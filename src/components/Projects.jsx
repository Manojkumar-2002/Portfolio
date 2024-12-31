import React, { useEffect, useState } from 'react';
import { IoLaptopOutline } from 'react-icons/io5';
import { FaSquareGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ECommerce from '../assets/images/ECommerce.jpg';
import Job from '../assets/images/Job.jpeg';
import weather from '../assets/images/weather.jpeg';
import projectData from '../assets/projects.json';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from JSON (could be static import or dynamic)
    setProjects(projectData);
  }, []);

  return (
    <div id="projects" className="min-vh-100 pt-5 text-white">
      <div className="container mt-4">
        <h1 className="font-weight-bold text-3xl mb-4 text-center text-white">Projects</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-8" />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div key={index} className="col">
              <div className="card text-center border-2 border-purple-600 shadow-lg bg-transparent">
                <img
                  src={project.image === 'ECommerce' ? ECommerce : project.image === 'Job' ? Job : weather}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-white">{project.title}</h5>
                  <p className="card-text text-white">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <Link to={project.site} className="btn btn-outline-light">
                    <IoLaptopOutline className="me-2" />
                    Visit Site
                  </Link>
                  <Link to={project.github} className="btn btn-outline-light">
                    <FaSquareGithub className="me-2" />
                    Github
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
