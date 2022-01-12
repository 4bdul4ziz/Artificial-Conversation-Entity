import React from 'react'
import { Feature } from '../../components';
import './Features.scss'

const featuresData = [
    {
      title: 'Straight Outta Compton',
      text: "You are now about to witness the strength of street knowledge Straight outta Compton, crazy motherfucker named Ice Cube  From the gang called Niggaz With Attitudes When I'm called off, I got a sawed off Squeeze the trigger, and bodies are hauled off You too, boy, if ya fuck with me",
    },
    {
      title: 'Real Muthaphuckkin Gs',
      text: "Mothafuck Dre Mothafuck Snoop Mothafuck Death Row Yo, and here comes me left blow Cause i'm the E-A-Z-Y-E, and this is the season to let real Gs in",
    },
    {
      title: "Nuthin' but a 'G' Thang",
      text: "One, two, three and to the four Snoop Doggy Dogg and Dr. Dre is at the door Ready to make an entrance, so back on up ('Cause you know we're 'bout to rip shit up) Gimme the microphone first, so I can bust like a bubble Compton and Long Beach together, now you know you in trouble Ain't nothin' but a G thang, baby",
    },
    {
      title: 'Kicking in The Doors',
      text: "Kick in the door, waving the four-four All you heard was Poppa don't hit me no more Kick in the door, waving the four-four All you heard was  don't hit me no more Kick in the door, waving the four-four All you heard was Poppa don't hit me no more (Biggie) Kick in the door, waving the four-four (Uh-huh) All you heard was Poppa don't hit me no more",
    },
  ];
  
  const Features = () => (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
)

export default Features