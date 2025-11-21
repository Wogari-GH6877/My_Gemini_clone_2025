import React from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"

function Main() {
  return (
    <div className='Main'>
        <div className='Nav_bar'>
            <div className='Gemini_text'>
                <p>Gemini</p>

            </div>
            <div className='user_logo'>
                <img className="icons"src={assets.user_icon} alt="" />

            </div>

            

        </div>

        <div className='Center_Box'>
              <div className='hello_text'>
                <p><span>
                  Hey,Dev
                </span></p>

                <p>How Can I help you!</p>

              </div>

              <div className='Container'>
                <div className='Card'>
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.compass_icon} alt="Compass" />
                </div>

                <div className='Card'>
                  <p>Briefly Summarize this the concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="Bulb" />
                </div>

                <div className='Card'>
                  <p>Brainstorm team banding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="Message" />
                </div>

                <div className='Card'>
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="Code_icons" />
                </div>

              </div>
            </div>

    </div>
  )
}

export default Main