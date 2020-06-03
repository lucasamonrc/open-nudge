import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import Logo from '../../components/Logo';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [url, setUrl] = useState('');
  const [orgFlag, setOrgFlag] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const flag = orgFlag.toLowerCase().trim();
    const org_flag = flag === 'yes' ? true : false

    const data = {
      name,
      email,
      phone,
      city,
      state,
      url,
      org_flag
    };

    try {
      const res = await api.post('users', data);

      alert(`Registration was successfull. You have now an access id. Keep it safe\nYour access id is: ${res.data.id}`);

      history.push('/logon');
    } catch (err) {
      alert('Error in registration. Please try again.');
      console.log(err.message);
    }
  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <Logo />

          <h1>Register</h1>
          <p>Register to Open Nudge, and start connecting to professionals to help in your project.</p>

          <Link className="back-link" to="/logon">
            <FiArrowLeft size={16} color="#f9cf26" />
            I have an account
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="(000) 000-0000"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Website"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />

          <input
            type="text"
            placeholder="Organization? (Yes/No)"
            value={orgFlag}
            onChange={e => setOrgFlag(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;