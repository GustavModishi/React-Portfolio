
import Loader from 'react-loaders'
import { useState } from 'react'
import AnimatedLetters from '../components/AnimatedLetters'

function Experience() {

    const [letterClass, setLetterClass] = useState('text-animate')
    
  return (
    <>
      <div className="container about-page">
      <div className="text-zone">
      <h1 className='eh1'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c','e']}
              idx={22}
            />
        </h1>
  


  
  <h2 >Sales Person</h2>
  <h3 >TFG</h3>
  <h4 >2015 and 2016 Flexible</h4>
  <p >
    I Worked at sportscene as a sales person on flexible contracts twice. 
    The first time I worked there, it was my first job out college and the 
    second time was when they called me back for a december contract after 
    my contract at Jane Furse Comprehensive ended. then the following year 
    I decided to go study so I can pursue a career in Computer Science. 
  </p>



  <h2 >Contract Teacher</h2>
  <h3 >Jane Furse Comprehensive</h3>
  <h4 >2016</h4>
  <p>
    I Worked at Jane Furse Comprehensive as a teacher teaching grade 6 
    mathematics and Natural Science until my contract ended. 
  </p>
      
      
  <Loader type="pacman" />
  </div>
  </div>
    </>
  )
}

export default Experience