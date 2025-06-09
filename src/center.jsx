import React from 'react';
import './cent.css';
import mypic from './pictures/tarak2.jpg';
import myresum from './pictures/tarak-belhiba-CV.pdf';

const Center1 = ({ text }) => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className='center2'>
            <div className='content'>
                <p className='name'><strong>Belhiba Tarak</strong></p>
                <div className="desc">
                    <p>{text.profile.description}
                    </p>
                </div>
                <div className="buttons">
                    <a href={myresum} download>
                        <button className='myresume'>{text.profile.downloadResume}</button>
                    </a>
                    <button className='contact-scroll' onClick={scrollToContact}>
                        <span className="contact-text">{text.profile.contactMe}</span>
                        <span className="contact-arrow">↓</span>
                    </button>
                </div>
            </div>
            <img src={mypic} className='mypic' alt="Tarak Belhiba" />
        </div>
    );
};

export default Center1;
