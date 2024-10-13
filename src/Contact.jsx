import React from 'react';
import './contact.css';
import 'font-awesome/css/font-awesome.min.css';
import github1 from './pictures/github.png';
import Linkedin from './pictures/linkedin.png';
const Contact = ({text}) => {
  return (
    <div className="formmother">
      <div className="form-main">
        <div className="left-container">
          <p className='textxd'>
{text.contact.text}          </p>
          <p><i className="fa fa-arrow-right"></i> belhibatarak2@gmail.com</p>
<p><i className="fa fa-arrow-right"></i> (+216) 26 431 912</p>
<a href='https://github.com/tarak188'><img src={github1} className='contactz' alt='contact'/></a>
<a href='https://www.linkedin.com/in/tarak-belhiba/'><img src={Linkedin} className='contactz' alt='contactlink'/></a>


        </div>

        <div className="main-wrapper">
          <h2 className="form-head">Contact Me!</h2>
          <form className="form-wrapper">
  <div className="form-card">
    <input
      className="form-input"
      type="text"
      name="full_name"
      required
      placeholder={text.contact.namePlaceholder} // Fixed proper
    />
  </div>

  <div className="form-card">
    <input
      className="form-input"
      type="email"
      name="email"
      required
      placeholder={text.contact.emailPlaceholder} // Fixed property
    />
  </div>

  <div className="form-card">
    <input
      className="form-input"
      type="number"
      name="phone_number"
      placeholder={text.contact.phonePlaceholder} // Fixed property
    />
  </div>

  <div className="form-card">
    <textarea
      className="form-textarea"
      maxLength="420"
      rows="3"
      name="address"
      required
      placeholder={text.contact.contentPlaceholder} // Fixed property
    ></textarea>
  </div>

  <div className="btn-wrap">
    <a href='mailto:belhibatarak2@gmail.com?subject=Subject&body=Message'>
      <button type="button">{text.contact.submitButton}</button>
    </a>
  </div>
</form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
