import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='contact-us-label'>Contact Us</div>
      <div className='creater-box'>
        <div className='creater creater1'>
          <div className='creater-name'>Mandeep Singh</div>
          <div className='creater-contact-info'>


            <div className='creater-email'><a href="mailto:mandeepsingh1062002@gmail.com">Suggestions</a></div>

            <div className='creater-github'><a href="https://github.com/Universal-Mandeep">Github</a></div>

            <div className='creater-linkedin'><a href="https://www.linkedin.com/in/mandeep-singh-ab5364220/">LinkedIn</a> </div>
          </div>
        </div>

        <div className='creater creater2'>
          <div className='creater-name'>Mandeep Singh</div>
          <div className='creater-contact-info'>


            <div className='creater-email'><a href="mailto:7973.mandeep.singh@gmail.com">Suggestions</a></div>

            <div className='creater-github'><a href="https://github.com/mandy-1">Github</a></div>

            <div className='creater-linkedin'><a href="https://www.linkedin.com/in/mandeep-singh-759340212/">LinkedIn</a> </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer