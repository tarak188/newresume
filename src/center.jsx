import React from 'react';
import './cent.css';
import mypic from './pictures/tarak2.jpg';
import myresum from './pictures/tarak-belhiba-CV.pdf';

const Center1 = () => {
    const email = 'belhibatarak2@gmail.com';

    return (
        <div className='center2'>
            <div className='content'>  
                <p className='name'><bold>Belhiba Tarak</bold></p>
                <div className="desc">
                    <p>A passionate web developer specializing in web development
                    and interested in big data and cloud.
                    </p>
                </div>
                <div className="buttons"> {/* Buttons wrapper */}
                    <a href={myresum} download>
                        <button className='myresume'>Download My Resume</button>
                    </a>
                    <a href={`mailto:${email}`}>
                        <button className='contact'>Contact Me</button>
                    </a>
                </div>
            </div>
            <img src={mypic} className='mypic' alt="Tarak Belhiba" />
        </div>
    );
};

export default Center1;
