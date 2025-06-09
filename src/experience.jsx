import React from 'react';
import "./experience.css";
import Sqli from './pictures/sqli.jpg';
import Suply from './pictures/supply.jpg';
// React Icons imports
import {
  FaReact,
  FaNodeJs,
  FaGitlab,
  FaTrello,
  FaJava,
  FaAndroid,
  FaPython,
  FaPhp
} from 'react-icons/fa';
import {
  SiTypescript,
  SiSass,
  SiSymfony,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiQuarkus,
  SiFastapi,
  SiJsonwebtokens
} from 'react-icons/si';
import {
  AiOutlineRobot,
  AiOutlineEye
} from 'react-icons/ai';
import {
  BiCodeAlt
} from 'react-icons/bi';
import {
  MdAnalytics,
  MdDashboard
} from 'react-icons/md';

const Experience1 = ({ text }) => {
  return (
    <div className="mothercontainer">
      <h1 className='mytitle'>{text.experiencesTitle}</h1>
      <div className='stages'>
        <div className="firstintern">
          <div className="company-header">
            <h1>{text.internship3.title}</h1>
            <div className="company-logo-placeholder">LINSOFT</div>
          </div>
          <h2>{text.internship3.company}</h2>
          <h3>{text.internship3.date}</h3>
          <p>{text.internship3.description}</p>
          <br />
          <div className="tools">
            <FaReact className="tech-icon" title="React.js" />
            <SiQuarkus className="tech-icon" title="Quarkus" />
            <SiJsonwebtokens className="tech-icon" title="JWT" />
            <SiFastapi className="tech-icon" title="FastAPI" />
            <FaPython className="tech-icon" title="Python" />
            <MdAnalytics className="tech-icon" title="Power BI" />
            <FaNodeJs className="tech-icon" title="Node.js" />
            <AiOutlineRobot className="tech-icon" title="AI Chatbot" />
            <AiOutlineEye className="tech-icon" title="OCR" />
          </div>
        </div>
        <div className="firstintern">
          <div className="company-header">
            <h1>{text.internship4.title}</h1>
            <div className="company-logo-placeholder">FREELANCE</div>
          </div>
          <h2>{text.internship4.company}</h2>
          <h3>{text.internship4.date}</h3>
          <p>{text.internship4.description}</p>
          <br />
          <div className="tools">
            <SiMongodb className="tech-icon" title="MongoDB" />
            <SiExpress className="tech-icon" title="Express.js" />
            <FaReact className="tech-icon" title="React.js" />
            <FaNodeJs className="tech-icon" title="Node.js" />
            <FaJava className="tech-icon" title="Java" />
            <BiCodeAlt className="tech-icon" title="XML" />
            <FaAndroid className="tech-icon" title="Android Studio" />
            <SiFirebase className="tech-icon" title="Firebase" />
          </div>
        </div>
        <div className="firstintern">
          <div className="company-header">
            <h1>{text.internship1.title}</h1>
            <img src={Suply} className='company-logo' alt={text.internship1.company} />
          </div>
          <h2>{text.internship1.company}</h2>
          <h3>{text.internship1.date}</h3>
          <p>{text.internship1.description}</p>
          <br />
          <div className="tools">
            <FaReact className="tech-icon" title="React.js" />
            <FaNodeJs className="tech-icon" title="Node.js" />
            <SiTypescript className="tech-icon" title="TypeScript" />
            <SiSass className="tech-icon" title="SCSS" />
            <FaGitlab className="tech-icon" title="GitLab" />
            <FaTrello className="tech-icon" title="Trello" />
          </div>
        </div>
        <div className="firstintern">
          <div className="company-header">
            <h1>{text.internship2.title}</h1>
            <img src={Sqli} className='company-logo' alt={text.internship2.company} />
          </div>
          <h2>{text.internship2.company}</h2>
          <h3>{text.internship2.date}</h3>
          <p>{text.internship2.description}</p>
          <br />
          <div className="tools">
            <FaReact className="tech-icon" title="React.js" />
            <SiSymfony className="tech-icon" title="Symfony" />
            <SiSass className="tech-icon" title="SCSS" />
            <FaPhp className="tech-icon" title="PHP" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience1;
