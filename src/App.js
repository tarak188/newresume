import React, { useEffect, useState } from 'react';
import './App.css';
import Center1 from './center.jsx';
import Contact from './Contact.jsx';
import Experience1 from './experience.jsx';
import Projets from './projets.jsx';
import en from './en.json';
import fr from './fr.json'; 

function App() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(en);

  useEffect(() => {
    const navbar = document.querySelector('ul');
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";  
      } else {
        navbar.style.top = "-80px";  
      }

      prevScrollPos = currentScrollPos;
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);  

  const handleLanguageChange = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === 'en' ? 'fr' : 'en';
      setText(newLang === 'en' ? en : fr); // Correctly set the text based on the language
      return newLang;
    });
  };

  return (
    <div className="App">
      <ul>
        <li><a className="active" href="#about">{text.navbar.about}</a></li>
        <li><a href="#experience">{text.navbar.experience}</a></li>
        <li><a href="#projects">{text.navbar.projects}</a></li>
        <li><a href="#contact">{text.navbar.contact}</a></li>
        <li>
          <button onClick={handleLanguageChange} className="language-button">
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </li>
      </ul>

      <section id="about">
      <Center1 text={text} />
      </section>

      <section id="experience">
        <br /><br /><br /><br />
        <Experience1  text={text} />
      </section>

      <section id="projects">
        <br /><br /><br /><br />
        <Projets text={text} />
        
      </section>

      <section id="contact">
        <br /><br /><br /><br />
        <Contact text={text}/>
      </section>
    </div>
  );
}

export default App;
