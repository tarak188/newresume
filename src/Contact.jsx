import React from 'react';
import './contact.css';
import 'font-awesome/css/font-awesome.min.css';
import github1 from './pictures/github.png';
import Linkedin from './pictures/linkedin.png';
const Contact = () => {
  return (
    <div className="formmother">
      <div className="form-main">
        <div className="left-container">
          <p className='textxd'>
            I am always open to discuss new opportunities. Reach out if you'd like to collaborate on a project or simply say hi!
          </p>
          <p><i className="fa fa-arrow-right"></i> belhibatarak2@gmail.com</p>
<p><i className="fa fa-arrow-right"></i> (+216) 26 431 912</p>
<img src={github1} className='contactz'/>
<img src={Linkedin} className='contactz'/>


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
                placeholder='Name'
              />
            
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required
                placeholder='Email'
              />
             
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="number"
                name="phone_number"
                placeholder='Phone number'
              />
              
            </div>

            <div className="form-card">
              <textarea
                className="form-textarea"
                maxLength="420"
                rows="3"
                name="address"
                required
                placeholder='Content'
              ></textarea>
             
            </div>

            <div className="btn-wrap">
            <a href='mailto:belhibatarak2@gmail.com?subject=Subject&body=Message'>
  <button type="button">Submit</button>
</a>


            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
