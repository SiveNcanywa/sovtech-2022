import React from 'react';
import './App.css';
import sovtechAbout from './sovtechAbout.png';
import Typewriter from 'typewriter-effect';

var typewriter = new Typewriter(App, {
  loop: true,
  delay: 75,
});

function App() {
 return(
  <div className="parent">
  <div className="right">
  <div className= "image">
    <img src={sovtechAbout} alt="myself"/>
  </div>
  </div>
  <div className="left">
   
    <h1>Hello I am Sive Chrestena Ncanywa</h1>
    <h2 className='introduction'>I am a  <span className='typing'> <Typewriter
  options={{
    strings: [' Sofware Engineer!', ' Web Developer!'],
    autoStart: true,
    loop: true,
  }}
/></span></h2>
   <p>
My name is Sive Chrestena Ncanywa. I am a 20 year old female residing in Cape Town. I passed my matric in 2020 and the following year, 2021 I enrolled at Northlink College where I completed my N1 certificate in Electrical Engineering. In September I was fortunate enough to be part of the students at Lifechoices Academy doing Coding and that is where I gained my coding skills. 

Growing up in one of the informal settlements in Cape Town where there were less opportunities and exposure to the latest technologies made me a  curious individual at a very young age. I love how technology can make individual’s lives easier and that has been my goal ever since; TO CHANGE PEOPLE’S LIVES USING TECHNOLOGY!

I would like to join the sovtech graduate programme in the Software engineering  stream because I want to grow and excel within the industry. I wanna be part of teams that builds software, design and create websites that help people live better and businesses to succeed.

I am a hard working individual who is eager to learn and grow within the industry. I am committed, hard working and friendly. I can work with different kinds of people , I’m a great team player and would be a great asset to the company.

  </p>
  
  <button class="learn-more"><a href='https://docs.google.com/document/d/1kAxXpZzJ5q8rGOOTXqf-QveiBYOWaQ-0FfXIDmdJHHM/edit?usp=sharing' target="_blank">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Download CV</span>
    </a>
  </button>
  <button class="portfolio"><a href='https://sive-ncanywa.netlify.app' target="_blank">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">View Portfolio</span>
    </a>
  </button>

  
  </div>
  </div>
 
 );
      
 
}

export default App;
