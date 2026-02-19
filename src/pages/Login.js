import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ENDPOINTS } from '../config/api';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Récupérer tous les utilisateurs de MockAPI
      const response = await fetch(ENDPOINTS.users);
      const users = await response.json();

      // Vérifier si l'utilisateur existe
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Sauvegarder l'utilisateur dans localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirection vers la page home
        navigate('/home');
      } else {
        setError('Identifiant ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Erreur de connexion. Vérifiez votre connexion internet.');
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <div className="logo-icon">
            <span className="circle-red"></span>
            <span className="circle-blue"></span>
          </div>
          <h1>PLANIFY</h1>
          <p className="tagline">La planification simplifiée</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h2>Connexion</h2>

          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="username">Identifiant / Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Votre identifiant"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>

          <p className="redirect-link">
            Pas encore de compte ? <Link to="/register">S'inscrire</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
