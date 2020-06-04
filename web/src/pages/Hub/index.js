import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';

import './styles.css';
import api from '../../services/api';

const Hub = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
  }, []);

  return (
    <div className="hub-container">
      <header>
        <Logo />
        <Link className="navlink" to="/logon">Log in</Link>
        <Link className="navlink" to="/register">Sign Up</Link>
      </header>

      <hr/>

      <h1>Existing Projects</h1>
      <p>Find below some of the projects in need of your skills.</p>

      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <strong>Title</strong>
            <p>{project.title}</p>

            <strong>Description</strong>
            <p>{project.description}</p>

            <strong>Role</strong>
            <p>{project.role}</p>

            <strong>Location</strong>
            <p>{`City: ${project.city} State: ${project.state}`}</p>

            <div className="a-group">
              <a href={`mailto:${project.email}`} className="button">Email</a>
              <a href={`tel:${project.phone}`} className="button">Phone</a>
            </div>
          </li>  
        ))}
      </ul>
    </div>
  );
}

export default Hub;