import { useState } from 'react'
import {  FaNodeJs, FaDatabase, FaCss3, FaReact,
          FaJsSquare,  FaGit } from 'react-icons/fa';
import Loader from 'react-loaders'
import AnimatedLetters from '../components/AnimatedLetters'
import { SiDotnet } from 'react-icons/si';


function Coding() {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'd', 'i', 'n', ' g', ' ', 'A', 'b', 'i', 'l', 'i','t', 'y']}
              idx={15}
            />
          </h1>
          <h2></h2>
          <h2>C++</h2>
          <p>
            This is my first programming language, C++ it's like a mother tongue. 
            It was difficult and challenging for me to learn a long time but as 
            time went on I began to enjoy the challenge of solving complex problems.
          </p>

          <h2>React/ Vanila JavaScript</h2>
          <p>
          I started learning JavaScript when I was building a social media web app project ever 
          since then i have been improving my knowledge about the language.
          I then started learning React and it has been amazing solving front-end issues using 
          React Library. 
          </p>
          <h2>PHP</h2>
          <p>
          I briefly used PHP to build a to build a social media web app. It was not that difficult to 
          work around, I found that it has big community so the support for finding solutions.
          </p>
         
          <h2>SQL</h2>
          <p>
            I have been using SQL with different database management systems like MySQL, 
            Oracle, SQL Server. 
          </p>
          <h2>No-SQL</h2>
          <p>
            No-SQL is new to me but there are projects that I'm working on a few personal  
            projects using MangoDB  
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaNodeJs color="#DD0031" />
            </div>
            <div className="face2">
            <FaReact color="#5ED4F4" />
            </div>
            <div className="face3">
              

              <SiDotnet color="#F06529" />
            </div>
            <div className="face4">
            <FaDatabase color="#28A4D9" />
              
            </div>
            <div className="face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGit color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )

}

export default Coding