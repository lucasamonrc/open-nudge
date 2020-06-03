import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Logo from '../../components/Logo';
import heroesImg from '../../assets/heroes.svg';

const Logon = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post('/sessions', { id });

      localStorage.setItem('userId', id);
      localStorage.setItem('userName', res.data.name);

      history.push('/profile');

    } catch (err) {
      alert('Log in attempt failed. Try again.');
      console.log(err.message);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <Logo />

        <form onSubmit={handleLogin}>
          <h1>Log in to Open Nudge</h1>

          <input 
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">Log in</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Register now
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default Logon;
