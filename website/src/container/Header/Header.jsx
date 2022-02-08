import React from 'react'
import './Header.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">An Artificial Conversing Entity</h1>
      <p>With the help of neural networks, we can create a conversational entity that can answer questions about the world.
      </p><p>
        By - Team HADES.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='People'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='AI'/>
    </div>
  </div>
);


export default Header