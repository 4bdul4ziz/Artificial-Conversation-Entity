import React from 'react'
import { Feature } from '../../components';
import './Features.scss'

const featuresData = [
    {
      title: 'Deep Q Learning',
      text: "The process of Q-Learning creates an exact matrix for the working agent which it can “refer to” to maximize its reward in the long run. Although this approach is not wrong in itself, this is only practical for very small environments and quickly loses it’s feasibility when the number of states and actions in the environment increases.",
    },
    {
      title: 'Machine Learning',
      text: "Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect.",
    },
    {
      title: "Natural Language Processing",
      text: "Natural Language Processing (NLP) is the process of converting a natural language into a computer language. It is the process of taking a sentence, like “I want to go to the store” and converting it into a computer language. It is the process of taking a sentence, like “I want to go to the store” and converting it into a computer language. It is the process of taking a sentence, like “I want to go to the store” and converting it into a computer language.",
    },
    {
      title: 'Customer Support',
      text: "Customer Support is the process of providing assistance to customers. It is the process of providing assistance to customers.",
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