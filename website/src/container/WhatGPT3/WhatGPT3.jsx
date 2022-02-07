import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.scss'

const WhatGPT3 = () => {
    return (
        <>
            <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
                <div className="gpt3__whatgpt3-feature">
                    <Feature title="What is HADES?" 
                    text="HADES is a conversational entity that can answer questions about the world.
                    It is built using a neural network that is trained on a large corpus of questions and answers.
                    Having a conversational entity is a great way to get answers to your questions.
                    Things like weather, news, and more can be answered by the conversational entity.
                    Customer Support can also be answered by the conversational entity.
                    This is a great way to automate your customer support.
                    Improvise the accuracy by adding in more datasets and training the neural network."
                    />
                </div>
                <div className="gpt3__whatgpt3-heading"> 
                    <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                </div>
                <div className="gpt3__whatgpt3-container">
                    <Feature title="Python" 
                    text="The Python language is a general-purpose, high-level programming language.
                    It has efficient high-level data structures and a simple but effective approach to object-oriented programming.
                    It's an easy language to learn and use. It is useful in ML, AI, and many other fields." 
                    />
                    <Feature title="Pytorch" 
                    text="Pytorch is a machine learning library for Python. It is a deep learning framework that is used for deep learning. 
                    It is a high-level API for training neural networks. It is used for deep learning models such as image recognition, text classification, and speech recognition.
                    Our project is built using Pytorch. The training of the neural network is done using the Pytorch library."

                    />
                    <Feature title="NLP" 
                    text="Natural Language Processing (NLP) is a field of computer science that deals with the interactions between computers and human (natural) languages.
                    NLP is used to analyze text, speech, and audio data. Our project is built using NLP. It makes use of the NLTK library. 
                    It is a library of Python modules that implement natural language processing algorithms. The usecase of NLP is to analyze text, speech, and audio data." 
                    />
                </div>
        </div>
    </>
    )
}
//EZ
export default WhatGPT3