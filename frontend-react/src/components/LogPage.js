import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== '') {
      localStorage.setItem('user', username);
      navigate('/game');
    } else {
      alert("Masukkan username!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login Game</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #8360c3, #2ebf91)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '300px',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px 15px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px 15px',
    backgroundColor: '#2ebf91',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  }
};

export default LogPage;
