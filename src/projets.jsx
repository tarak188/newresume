import React from 'react';
import './projets.css';

const Projets = ({ text }) => { 
  return (
    <div className="headcontainer">
            <h1 className='projtitle'>{text.projTitle}</h1>
            <div className="container">
      <div className="product-card">
        
        <div className="product-info">
          <h2>{text.chatApp.title}</h2>
          <p>
          {text.chatApp.description}          </p>
          <div className="tags">
            <span className="tag">MERN</span>
            <span className="tag">Socket.io</span>
            <span className="tag">Scss</span>
          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/chatApp' target="_blank" rel="noopener noreferrer">
    <button className="order-button">{text.chatApp.checkCode}</button>
</a>
          </div>
        </div>
      </div>

      <div className="product-card">
        
        <div className="product-info">
          <h2>Student booking-App</h2>
          <p>
            {text.bookingApp.description}
          </p>
          <div className="tags">
            <span className="tag">MERN</span>
            <span className="tag">Puppeteer</span>
            <span className="tag">google map API</span>
            <span className="tag">SCSS</span>


          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/chatApp' target="_blank" rel="noopener noreferrer">
    <button className="order-button">{text.bookingApp.checkCode}</button>
</a>          </div>
        </div>
      </div>
      <div className="product-card">
      
        <div className="product-info">
          <h2>{text.ecommerceClone.title}</h2>
          <p>
{text.ecommerceClone.description}          </p>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">javascript</span>
            <span className="tag">CSS</span>
            <span className="tag">BOOTSTRAP</span>
            <span className="tag">PHP</span>


          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/chatApp' target="_blank" rel="noopener noreferrer">
    <button className="order-button">{text.ecommerceClone.checkCode}</button>
</a>          </div>
        </div>
      </div>
      <div className="product-card">

        <div className="product-info">
          <h2>{text.weatherApp.title}</h2>
          <p>
{text.weatherApp.description}          </p>
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">CSS</span>
            <span className="tag">Weather API</span>
          </div>
          <div className="price-order">
          <a href='https://github.com/tarak188/chatApp' target="_blank" rel="noopener noreferrer">
    <button className="order-button">{text.weatherApp.checkCode}</button>
</a>          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-info">
          <h2>{text.absenceManager.title}</h2>
          <p>
            {text.absenceManager.description}
          </p>
          <div className="tags">
            <span className="tag">Android Studio</span>
            <span className="tag">Java</span>
            <span className="tag">XML</span>
            <span className="tag">Firebase</span>
            <span className="tag">Firestore</span>
          </div>
          <div className="price-order">
            <a href='https://github.com/tarak188' target="_blank" rel="noopener noreferrer">
              <button className="order-button">{text.absenceManager.checkCode}</button>
            </a>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-info">
          <h2>{text.marketplace.title}</h2>
          <p>
            {text.marketplace.description}
          </p>
          <div className="tags">
            <span className="tag">React.js</span>
            <span className="tag">Firebase</span>
            <span className="tag">SCSS</span>
            <span className="tag">Bootstrap</span>
            <span className="tag">Power BI</span>
            <span className="tag">EmailJS</span>
          </div>
          <div className="price-order">
            <a href='https://github.com/tarak188' target="_blank" rel="noopener noreferrer">
              <button className="order-button">{text.marketplace.checkCode}</button>
            </a>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-info">
          <h2>{text.smartStockApp.title}</h2>
          <p>
            {text.smartStockApp.description}
          </p>
          <div className="tags">
            <span className="tag">Quarkus</span>
            <span className="tag">JWT</span>
            <span className="tag">FastAPI</span>
            <span className="tag">Python</span>
            <span className="tag">Power BI</span>
            <span className="tag">Node.js</span>
            <span className="tag">OCR</span>
            <span className="tag">AI Chatbot</span>
          </div>
          <div className="price-order">
            <a href='https://github.com/tarak188' target="_blank" rel="noopener noreferrer">
              <button className="order-button">{text.smartStockApp.checkCode}</button>
            </a>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-info">
          <h2>{text.gymWebsite.title}</h2>
          <p>
            {text.gymWebsite.description}
          </p>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">PHP</span>
            <span className="tag">MySQL</span>
          </div>
          <div className="price-order">
            <a href='https://github.com/tarak188/gym-website' target="_blank" rel="noopener noreferrer">
              <button className="order-button">{text.gymWebsite.checkCode}</button>
            </a>
          </div>
        </div>
      </div>

      <div className="product-card">
        <div className="product-info">
          <h2>{text.movieRatingWebsite.title}</h2>
          <p>
            {text.movieRatingWebsite.description}
          </p>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">PHP</span>
          </div>
          <div className="price-order">
            <a href='https://github.com/tarak188/movie-rating-website-' target="_blank" rel="noopener noreferrer">
              <button className="order-button">{text.movieRatingWebsite.checkCode}</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Projets;
