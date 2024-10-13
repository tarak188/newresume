import React from 'react';
import './cent.css';
import mypic from './pictures/tarak2.jpg';
import myresum from './pictures/tarak-belhiba-CV.pdf';

const Center1 = ({ text }) => {
    const email = 'belhibatarak2@gmail.com';

    return (
        <div className='center2'>
            <div className='content'>  
                <p className='name'><strong>Belhiba Tarak</strong></p>
                <div className="desc">
                    <p>{text.profile.description}
                    </p>
                </div>
                <div className="buttons"> {/* Buttons wrapper */} 
                    <a href={myresum} download>
                        <button className='myresume'>{text.profile.downloadResume}</button>
                    </a>
                    <a href={`mailto:${email}`}>
                        <button className='contact'>{text.profile.contactMe}</button>
                    </a>
                </div>
            </div>
            <img src={mypic} className='mypic' alt="Tarak Belhiba" />
        </div>
    );
};

export default Center1;
