import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../config/api';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterSubject, setFilterSubject] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  // Formulaire pour ajouter/modifier un événement
  const [eventForm, setEventForm] = useState({
    day: 'Lundi',
    title: '',
    time: '',
    room: '',
    color: 'green'
  });

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const colors = [
    { value: 'green', label: ' Vert (normal)' },
    { value: 'orange', label: ' Orange (Histoire)' },
    { value: 'blue', label: ' Bleu (Informatique)' },
    { value: 'purple', label: ' Violet (Langues)' },
    { value: 'pink', label: ' Rose (important)' },
    { value: 'light-purple', label: ' Violet clair (moint important)' },
    { value: 'yellow', label: ' Jaune (Autres)' }
  ];

  // Vérifier l'authentification
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
    } else {
      setCurrentUser(JSON.parse(user));
    }
  }, [navigate]);

  // Charger les événements depuis MockAPI
  useEffect(() => {
    if (currentUser) {
      loadEvents();
    }
  }, [currentUser]);

  // Filtrer les événements
  useEffect(() => {
    if (filterSubject === '') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => 
        event.title.toLowerCase().includes(filterSubject.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [filterSubject, events]);

  const loadEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(ENDPOINTS.events);
      const allEvents = await response.json();
      // Filtrer les événements de l'utilisateur connecté
      const userEvents = allEvents.filter(event => event.userId === currentUser.id);
      setEvents(userEvents);
      setFilteredEvents(userEvents);
    } catch (err) {
      console.error('Erreur lors du chargement des événements:', err);
    } finally {
      setLoading(false);
    }
  };

  const getEventsForDay = (day) => {
    return filteredEvents.filter(event => event.day === day);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleOpenModal = (event = null) => {
    if (event) {
      // Mode édition
      setEditingEvent(event);
      setEventForm({
        day: event.day,
        title: event.title,
        time: event.time,
        room: event.room,
        color: event.color
      });
    } else {
      // Mode ajout
      setEditingEvent(null);
      setEventForm({
        day: 'Lundi',
        title: '',
        time: '',
        room: '',
        color: 'green'
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingEvent(null);
    setEventForm({
      day: 'Lundi',
      title: '',
      time: '',
      room: '',
      color: 'green'
    });
  };

  const handleFormChange = (e) => {
    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const eventData = {
      userId: currentUser.id,
      day: eventForm.day,
      title: eventForm.title,
      time: eventForm.time,
      room: eventForm.room,
      color: eventForm.color
    };

    try {
      if (editingEvent) {
        // Modifier un événement existant
        const response = await fetch(`${ENDPOINTS.events}/${editingEvent.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });

        if (response.ok) {
          alert('Événement modifié avec succès !');
          loadEvents();
          handleCloseModal();
        }
      } else {
        // Ajouter un nouvel événement
        const response = await fetch(ENDPOINTS.events, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });

        if (response.ok) {
          alert('Événement ajouté avec succès !');
          loadEvents();
          handleCloseModal();
        }
      }
    } catch (err) {
      console.error('Erreur:', err);
      alert('Erreur lors de l\'enregistrement de l\'événement');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      setLoading(true);
      try {
        const response = await fetch(`${ENDPOINTS.events}/${eventId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Événement supprimé avec succès !');
          loadEvents();
        }
      } catch (err) {
        console.error('Erreur:', err);
        alert('Erreur lors de la suppression de l\'événement');
      } finally {
        setLoading(false);
      }
    }
  };

  if (!currentUser) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-section">
          <div className="logo-icon-small">
            <span className="circle-red-small"></span>
            <span className="circle-blue-small"></span>
          </div>
          <div>
            <h1>PLANIFY</h1>
            <p className="tagline-small">La planification simplifiée</p>
          </div>
        </div>

        <div className="user-info">
          <span>👤 {currentUser.name}</span>
        </div>

        <nav className="nav">
          <button className="btn-add" onClick={() => handleOpenModal()}>
            + Ajouter un événement
          </button>
          <button className="btn-logout" onClick={handleLogout}>
            Déconnexion
          </button>
        </nav>
      </header>

      <div className="controls">
        <div className="filter-section">
          <input
            type="text"
            className="filter-input"
            placeholder="Filtrer par matière..."
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
          />
          <button className="refresh-btn" onClick={loadEvents} disabled={loading}>
            {loading ? '⏳ Chargement...' : '⟳ Rafraîchir'}
          </button>
        </div>
      </div>

      <div className="calendar">
        {days.map(day => (
          <div key={day} className="day-column">
            <div className="day-header">{day}</div>
            <div className="events-container">
              {getEventsForDay(day).length === 0 ? (
                <div className="empty-day">Aucun événement</div>
              ) : (
                getEventsForDay(day).map(event => (
                  <div key={event.id} className={`event-card ${event.color}`}>
                    <h3>{event.title}</h3>
                    <p className="event-time">🕐 {event.time}</p>
                    <p className="event-room">📍 {event.room}</p>
                    <div className="event-actions">
                      <button 
                        className="icon-btn edit" 
                        onClick={() => handleOpenModal(event)}
                        title="Modifier"
                      >
                        ✏️
                      </button>
                      <button 
                        className="icon-btn delete" 
                        onClick={() => handleDeleteEvent(event.id)}
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour ajouter/modifier un événement */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingEvent ? 'Modifier l\'événement' : 'Ajouter un événement'}</h2>
              <button className="close-btn" onClick={handleCloseModal}>✕</button>
            </div>

            <form onSubmit={handleSubmitEvent} className="event-form">
              <div className="form-group">
                <label htmlFor="title">📝 Titre de l'événement *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={eventForm.title}
                  onChange={handleFormChange}
                  placeholder="Ex: Maths - Cours"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="day">📅 Jour *</label>
                <select
                  id="day"
                  name="day"
                  value={eventForm.day}
                  onChange={handleFormChange}
                  required
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="time">🕐 Horaire *</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={eventForm.time}
                  onChange={handleFormChange}
                  placeholder="Ex: 10:00 - 12:00"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="room">📍 Salle/Lieu *</label>
                <input
                  type="text"
                  id="room"
                  name="room"
                  value={eventForm.room}
                  onChange={handleFormChange}
                  placeholder="Ex: A101"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="color">🎨 Couleur *</label>
                <select
                  id="color"
                  name="color"
                  value={eventForm.color}
                  onChange={handleFormChange}
                  required
                >
                  {colors.map(color => (
                    <option key={color.value} value={color.value}>
                      {color.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={handleCloseModal}>
                  Annuler
                </button>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? 'Enregistrement...' : (editingEvent ? 'Modifier' : 'Ajouter')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
