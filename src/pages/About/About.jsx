import React from 'react'
import './about.css'
function About() {
  return (
    
    <div className='about' id='about' >
    
    
    <img className='abt-designL' src='https://marketifythemes.net/html/dizme/img/brushes/about/1.png'></img>
    <div className='about-container'>
    
      <div className='profile'>
        <img className='dp' src='https://marketifythemes.net/html/dizme/img/about/1.jpg'></img>
      </div>
      <div className='abt'>
      <div className='abt-desc'>
        <h4 className='role'>I'm a Developer</h4>
        <h1>I Can Design Anything <br />You Want</h1>
        <br />
        <div className='desc'>
       <p>Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 2+ years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
       </div>
       <button type="button" class=" hire btn btn-success">Hire Me</button>
      </div>

      </div>
      </div>
      <img className='abt-designR' src='https://marketifythemes.net/html/dizme/img/brushes/about/2.png'></img>
      
      
    </div>
   
  )
}

export default About
