import React from 'react';
import "./experience.css";
import node from './pictures/node-js.png';
import react1 from './pictures/physics.png';
import Gitlab from './pictures/gitlab.png';
import Typescript from './pictures/typescript.png';
import Trello from './pictures/trello.png';
import scss from './pictures/file.png';
import Css1 from './pictures/css-3.png';
import symfony from './pictures/symphony.png';
import Sqli from './pictures/sqli.jpg';
import Suply from './pictures/supply.jpg';

const Experience1 = ({ text }) => {
  return (
    <div className="mothercontainer">
      <h1 className='mytitle'>{text.experiencesTitle}</h1>
      <div className='stages'>
        <div className="firstintern">
          <h1>{text.internship1.title}</h1>
          <img src={Suply} className='logost' alt={text.internship1.company} />
          <h2>{text.internship1.company}</h2>
          <h3>{text.internship1.date}</h3>
          <p>{text.internship1.description}</p>
          <br />
          <div className="tools">
            <img src={react1} alt='React.js' />
            <img src={node} alt='Node.js' />
            <img src={Typescript} alt='TypeScript' />
            <img src={scss} alt='SCSS' />
            <img src={Gitlab} alt='GitLab' />
            <img src={Trello} alt='Trello' />
          </div>
        </div>
        <div className="firstintern">
          <h1>{text.internship2.title}</h1>
          <img src={Sqli} className='logost1' alt={text.internship2.company} />
          <h2>{text.internship2.company}</h2>
          <h3>{text.internship2.date}</h3>
          <p>{text.internship2.description}</p>
          <br />
          <div className="tools">
            <img src={react1} alt='React.js' />
            <img src={symfony} alt='Symfony' />
            <img src={Css1} alt='CSS' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience1;
