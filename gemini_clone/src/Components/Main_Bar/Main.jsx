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

    </div>
  )
}

export default Main