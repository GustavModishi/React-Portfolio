import React from 'react'
import { FaRegCopyright, FaTwitter, FaGithub, FaLinkedin  } from 'react-icons/fa';



function Footer() {
  return (
    <footer className='footer-mob'>
         
         <div class="social-icons">

         <a href="https://www.linkedin.com/in/gustav-modishi/">
         <FaLinkedin
           
           color="#ffd700"
             
              className="anchor-icon"
            />
        </a>
        <a href="https://github.com/GustavModishi">
        <FaGithub
             
              color="#ffd700"

              className="anchor-icon"
            />
        </a>
        <a href="https://twitter.com/Gustav_Modishi">
        <FaTwitter
              
              color="#ffd700"
            
              className="anchor-icon"
            />
        </a>
         </div>
        <div class="copyright">
            
        <p><FaRegCopyright className="cr-icon" /><span>2023 Gustav Modishi</span></p>
        </div>
       
    
    </footer>
  )
}

export default Footer