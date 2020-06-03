import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import Logo from '../../components/Logo';

const NewProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('');

  const history = useHistory();

  const userId = localStorage.getItem('userId');

  async function handleNewProject(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      role,
    };

    try {
      await api.post('Projects', data, {
        headers: {
          Authorization: userId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Error in creating new project. Try again.');
      console.log(err.message);
    }
  }

  return (
    <div className="new-project-container">
      <div className="content">
        <section>
          <Logo />

          <h1>Create new project</h1>
          <p>Describe your project and its needs with as much detail as possible to draw professionals unto it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to profile
          </Link>
        </section>

        <form onSubmit={handleNewProject}>
          <input
            placeholder="Project Title"
            role={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            role={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Role"
            role={role}
            onChange={e => setRole(e.target.value)}
          />

          <button className="button" type="submit">Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewProject; 