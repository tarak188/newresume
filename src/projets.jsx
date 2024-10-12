import React from 'react';
import './projets.css';

const Projets = () => { 
  return (
    <div className="headcontainer">
            <h1 className='projtitle'>My proudest and latest projects !</h1>
            <div className="container">
      <div className="product-card">
        
        <div className="product-info">
          <h2>Chat application</h2>
          <p>
          Developed a real-time chat application where users can quickly create an account, generate a room with a unique code, and chat with multiple participants. Focused on user-friendly design, easy setup, and smooth messaging experience.
          </p>
          <div className="tags">
            <span className="tag">MERN</span>
            <span className="tag">Socket.io</span>
            <span className="tag">Scss</span>
          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/chatApp' target="_blank" rel="noopener noreferrer">
    <button className="order-button">Check the Code</button>
</a>
          </div>
        </div>
      </div>

      <div className="product-card">
        
        <div className="product-info">
          <h2>Student booking-App</h2>
          <p>
            developed a student booking-app that shows real time data (appartements) from "9annas.tn" by scrapping them and showing them on my website while also showing their location on the map 
          </p>
          <div className="tags">
            <span className="tag">MERN</span>
            <span className="tag">Puppeteer</span>
            <span className="tag">google map API</span>
            <span className="tag">SCSS</span>


          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/booking-app' target="_blank" rel="noopener noreferrer">
    <button className="order-button">Check the Code</button>
</a>          </div>
        </div>
      </div>
      <div className="product-card">
      
        <div className="product-info">
          <h2>E-commerce website clone</h2>
          <p>
          Recreated the MODECO.tn website, but better ! focusing on delivering a responsive and user-friendly interface.ensuring optimal performance across devices while maintaining a clean and modern design
          </p>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">javascript</span>
            <span className="tag">CSS</span>
            <span className="tag">BOOTSTRAP</span>
            <span className="tag">PHP</span>


          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/e-commerce-website' target="_blank" rel="noopener noreferrer">
    <button className="order-button">Check the Code</button>
</a>          </div>
        </div>
      </div>
      <div className="product-card">
       
        <div className="product-info">
          <h2>Weather App</h2>
          <p>
          Developed a Weather App using React.js and CSS, featuring dynamic icon and icon color changes based on the weather temperature. Focused on providing a clean and responsive design with real-time weather updates.
          </p>
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">CSS</span>
            <span className="tag">Weather API</span>
          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/Weather-App' target="_blank" rel="noopener noreferrer">
    <button className="order-button">Check the Code</button>
</a>          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Projets;
