import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/images/about.png';
import { ImPointRight } from 'react-icons/im';

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="about" className="min-vh-100 d-flex align-items-center justify-content-center bg-transparent-100 py-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 text-danger mb-4">About Me</h1>
            <hr className="mb-4" />
            <p className="mb-4">
              Hi, I’m Manoj Kumar from Tuticorin, India. I’m currently working as a Python Developer Intern at MNK Global Services.
            </p>
            <p className="mb-4">
              I’m gaining valuable experience and working on diverse projects, leveraging Python and other modern technologies.
            </p>
            <p className="mb-4">
              I’ve completed my BE in Computer Science & Engineering at UCEN, and I’m passionate about tackling challenging problems in software development.
            </p>
            <p className="mb-4">
              Some activities that I enjoy outside of coding include:
              <ul>
                <li className="d-flex align-items-center">
                  <ImPointRight className="me-2" /> Playing Chess
                </li>
                <li className="d-flex align-items-center">
                  <ImPointRight className="me-2" /> Traveling
                </li>
              </ul>
            </p>
            <p className="mb-4">
              "Strive to build things that make a difference!"
            </p>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img className="img-fluid rounded-lg shadow-about" src={AboutImg} alt="About me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
