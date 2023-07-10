import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../components/AnimatedLetters'
import im1 from '../assets/images/imagep1.jpg'
import im2 from '../assets/images/imagep2.jpg'
import im3 from '../assets/images/imagep3.jpg'
import im4 from '../assets/images/imagep4.jpg'
import im5 from '../assets/images/imagep5.jpg'
import im6 from '../assets/images/imagep7.jpg'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very dedicated, hard working software developer looking for a role in an
            IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm naturally curious, and continuously working on
            improving my skills one programming challenge at a time.
            I have had the opportunity to be in different challenging 
            scenarios or circumstances in my life. This has shaped me 
            to be a life long learner that is resilient. I don't ever 
            give up, if I can't solve a problem I always work on myself 
            so that I can try again and again.
          </p>
          <p>
            If I need to define myself in one sentence that would be
            a man from the dusty streets of my kasi (township) trying to make 
            change one idea at a time, and tech-obsessed!!!
          </p>


</div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <img src={im1} alt='Gustav' />
            </div>
            <div className="face2">
            <img src={im2} alt='Gustav' />
            </div>
            <div className="face3">
            <img src={im3} alt='Gustav' />
            </div>
            <div className="face4">
            <img src={im4} alt='Gustav' />
            </div>
            <div className="face5">
            <img src={im5} alt='Gustav' />
            </div>
            <div className="face6">
            <img src={im6} alt='Gustav' />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )

}

export default About