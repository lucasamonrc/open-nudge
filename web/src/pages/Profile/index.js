import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Logo from '../../components/Logo';

const Profile = () => {
  const [projects, setProjects] = useState([]);

  const history = useHistory();

  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setProjects(response.data);
    })
  }, [userId]);

  async function handleDeleteProject(id) {
    try {
      await api.delete(`projects/${id}`, {
        headers: {
          Authorization: userId,
        }
      });

      setProjects(projects.filter(project => project.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/logon');
  }

  return (
    <div className="profile-container">
      <Logo />
      <header>
        <span>Welcome, {userName}</span>
        <Link className="button" to="/projects/new">Create new project</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#f9cf26" />
        </button>
      </header>

      <h1>Existing Projects</h1>

      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <struser>Project:</struser>
            <p>{project.title}</p>

            <struser>Description:</struser>
            <p>{project.description}</p>

            <struser>Role:</struser>
            <p>{project.role}</p>

            <button onClick={() => handleDeleteProject(project.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;