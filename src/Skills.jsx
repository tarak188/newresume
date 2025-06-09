import React, { useState } from 'react';
import './Skills.css';
// React Icons imports for skills
import { 
  FaReact, 
  FaNodeJs, 
  FaGitlab, 
  FaTrello, 
  FaJava, 
  FaAndroid, 
  FaPython,
  FaPhp,
  FaGit,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs
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
  SiJsonwebtokens,
  SiSocketdotio,
  SiTailwindcss,
  SiVite,
  SiOdoo,
  SiJquery,
  SiOracle,
  SiJira,
  SiPuppeteer
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
  MdDashboard,
  MdSecurity,
  MdEmail
} from 'react-icons/md';
import {
  DiDatabase
} from 'react-icons/di';
import {
  GiArtificialIntelligence
} from 'react-icons/gi';
import {
  HiOutlineMail
} from 'react-icons/hi';
import {
  FaMapMarkerAlt,
  FaSearch,
  FaLink,
  FaCube
} from 'react-icons/fa';

const Skills = ({ text }) => {
  const [clickedSkill, setClickedSkill] = useState(null);

  const handleSkillClick = (skillName) => {
    setClickedSkill(skillName);
    setTimeout(() => setClickedSkill(null), 600);
  };

  const skills = [
    { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
    { name: 'PHP', icon: <FaPhp />, color: '#777bb4' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
    { name: 'Quarkus', icon: <SiQuarkus />, color: '#4695eb' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28' },
    { name: 'SCSS', icon: <SiSass />, color: '#cc6699' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952b3' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'Socket.io', icon: <SiSocketdotio />, color: '#010101' },
    { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
    { name: 'Git', icon: <FaGit />, color: '#f05032' },
    { name: 'GitLab', icon: <FaGitlab />, color: '#fc6d26' },
    { name: 'Jira', icon: <SiJira />, color: '#0052cc' },
    { name: 'Trello', icon: <FaTrello />, color: '#0079bf' },
    { name: 'Power BI', icon: <MdAnalytics />, color: '#f2c811' },
    { name: 'Dashboards', icon: <MdDashboard />, color: '#4285f4' },
    { name: 'OCR', icon: <AiOutlineEye />, color: '#4ecdc4' },
    { name: 'AI', icon: <GiArtificialIntelligence />, color: '#ff6b6b' },
    { name: 'Microservices', icon: <BiCodeAlt />, color: '#6c757d' },
    { name: 'RBAC', icon: <MdSecurity />, color: '#dc3545' },
    { name: 'Android Studio', icon: <FaAndroid />, color: '#3ddc84' },
    { name: 'Symfony', icon: <SiSymfony />, color: '#000000' },
    { name: 'Oracle Database', icon: <SiOracle />, color: '#f80000' },
    { name: 'SQL', icon: <DiDatabase />, color: '#336791' },
    { name: 'Vite', icon: <SiVite />, color: '#646cff' },
    { name: 'Odoo', icon: <SiOdoo />, color: '#714b67' },
    { name: 'jQuery', icon: <SiJquery />, color: '#0769ad' },
    { name: 'Puppeteer', icon: <SiPuppeteer />, color: '#40b5a4' },
    { name: 'EmailJS', icon: <HiOutlineMail />, color: '#e74c3c' },
    { name: 'Google Maps API', icon: <FaMapMarkerAlt />, color: '#4285f4' },
    { name: 'Web Scraping', icon: <FaSearch />, color: '#28a745' },
    { name: 'SEO', icon: <FaSearch />, color: '#ffc107' },
    { name: 'Blockchain', icon: <FaLink />, color: '#f7931a' },
    { name: 'ERP', icon: <FaCube />, color: '#6f42c1' }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="skills-title">{text.skillsTitle || 'My Skills'}</h1>
        <p className="skills-subtitle">{text.skillsSubtitle || 'Technologies and tools I work with'}</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`skill-item ${clickedSkill === skill.name ? 'bounce' : ''}`}
            onClick={() => handleSkillClick(skill.name)}
            style={{ 
              '--skill-color': skill.color,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
