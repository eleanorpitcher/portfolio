import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import GithubLogo from '../assets/github-logo.png'
import LinkedInLogo from '../assets/linkedin-icon.png'

function Contact() {

  return (
    <div className='container-fluid justify-content-center pb-5' style={{backgroundColor: '#adb5bd'}} id="contact">
          <div className="row justify-content-center">
            <div className="text-center">
              <h2 className="fs-1 fw-bold mt-5 mb-5">Get in touch</h2>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            
            <div className="btn-click col-lg-1 col-md-2 col-sm-2 col-xs-1 mb-3">
              <Link to='https://github.com/eleanorpitcher' target="_blank"><img src={GithubLogo} alt="" style={{height: '50px', width: 'auto', border: 'none' }} /></Link>
            </div>
            <div className="btn-click col-lg-1 col-md-2 col-sm-2 col-xs-1 mb-3">
              <Link to='https://www.linkedin.com/in/eleanor-p-a7a18416a/' target="_blank"><img src={LinkedInLogo} alt="" style={{height: '50px', width: 'auto', border: 'none'}} /></Link>
            </div>
            <div className="btn-click col-lg-1 col-md-2 col-sm-2 col-xs-1">
              <button className='btn btn-outline-dark fw-bold' target="_blank" style={{height: '50px', width: 'auto', fontSize: '.9rem', transition: '.5s'}}>Email Me</button>
            </div>
          </div>
        </div>
  )
}

export default Contact