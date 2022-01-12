import React from 'react'
import './Header.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with Tensor Flow</h1>
      <p>And let that real shit provoke
        See, you's a wannabe 'loc, and you'll get smoked, and I hope
        That your fans understand when you talk about sprayin' me
        The same records that you makin' is payin' me
      </p><p>
        Motherfuck Dre! Motherfuck Snoop! Motherfuck Death Row!
        Yo, and here comes my left blow.
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