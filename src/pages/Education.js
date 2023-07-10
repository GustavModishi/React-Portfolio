import React from 'react'
import Loader from 'react-loaders'
import { useState } from 'react'
import AnimatedLetters from '../components/AnimatedLetters'

function Education() {
  const [letterClass, setLetterClass] = useState('text-animate')
  return (

    <>
    <div className="container education-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
            idx={15}
          />
        </h1>
        <div className="inst">
        <h2>Tshwane University of Technology</h2>
          <h3>SOFTWARE DEVELOPMENT</h3>
          <h4>2017-2023</h4>
          <br/>

        </div>
        <div className="inst">
          
          <h2>ONLINE LEARNING</h2>
          <a  href="https://www.freecodecamp.org/gustav_modishi"
            target="_blank"
            rel="noreferrer" ><h3>FreeCodeCamp</h3></a>
          <a  href="https://www.hackerrank.com/certificates/iframe/696a9258bd2e"
            target="_blank"
            rel="noreferrer" ><h3>HackerRank</h3></a>
          <a  href="https://www.linkedin.com/in/gustav-modishi/details/certifications/"
            target="_blank"
            rel="noreferrer" ><h3>Linkedin Learning</h3></a>
          <br/>
        </div>
        <div className="inst">
          <h2>Nkangala FET College</h2>
          <h3>ELECTRICAL ENGINEERING</h3>
          <h4>2013-2014</h4>
        </div>

      </div>

      
    </div>
    <Loader type="pacman" />

  </>
   



  )
}

export default Education