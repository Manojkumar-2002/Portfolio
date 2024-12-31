import React from 'react';
import {
  DiReact,
  DiPython,
  DiMongodb,
  DiDjango,
} from "react-icons/di";
import {
  SiMysql,
  SiPostman,
  SiPycharm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skills = [
    { icon: <DiReact className='skill-icon fs-1 text-primary' alt="React Icon" />, name: 'React' },
    { icon: <DiPython className='skill-icon fs-1 text-warning' alt="Python Icon" />, name: 'Python' },
    { icon: <DiMongodb className='skill-icon fs-1 text-success' alt="MongoDB Icon" />, name: 'MongoDB' },
    { icon: <DiDjango className='skill-icon fs-1 text-success' alt="Django Icon" />, name: 'Django' },
    { icon: <SiMysql className='skill-icon fs-1 text-danger' alt="MySQL Icon" />, name: 'MySQL' },
  ];

  const tools = [
    { icon: <VscVscode className='skill-icon fs-1 text-info' alt="Visual Studio Code Icon" />, name: 'Visual Studio Code' },
    { icon: <SiPostman className='skill-icon fs-1' style={{ color: 'orange' }} alt="Postman Icon" />, name: 'Postman' },
    { icon: <SiPycharm className='skill-icon fs-1 text-success' alt="PyCharm Icon" />, name: 'PyCharm' },
  ];

  return (
    <div id="skills" className="container my-5 min-vh-100 align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="font-weight-bold mb-4 text-white ">Technologies I Know</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-4" />
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
          {skills.map((skill, index) => (
            <div key={index} className='col'>
              <div className='card p-3 shadow-sm bg-transparent rounded-lg'>
                <div className="card-body text-center border-light glass">
                  <div className="mb-2">{skill.icon}</div>
                  <p className="mt-2 text-white">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1 className="font-weight-bold mb-4 text-white">Development Tools</h1>
        <hr className="w-25 mx-auto border-2 border-danger mb-4" />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tools.map((tool, index) => (
            <div key={index} className='col'>
              <div className='card p-3 shadow-sm bg-transparent rounded-md'>
                <div className="card-body text-center border-light glass">
                  <div className="mb-2">{tool.icon}</div>
                  <p className="mt-2 text-white">{tool.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
