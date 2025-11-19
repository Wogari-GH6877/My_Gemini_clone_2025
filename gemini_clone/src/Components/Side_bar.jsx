import React, { useState } from 'react'
import { assets } from '../assets/assets'
import "./Side_bar.css"

function Side_bar() {

  const [extend,setExtend]=useState(false);
  return (
    <>
      <div className='Main_Side_Bar'>
        <div className='Top_Tide_Bar'>
            <div className='Top1'>
                <img onClick={()=>setExtend(!extend)}className="icons menu"src={assets.menu_icon} alt="" />
            </div>
            <div className='Top2'>
                <img className="icons input" src={assets.plus_icon} alt="" />
                {extend?<input type="text" placeholder='New Chat'/>:null}
            </div>
            {extend?<div className='Recent'>
                <p className='recent_title'>Recent</p>
                <div className='recent_chat'>
                  <img className="icons "src={assets.message_icon} alt="" />
                  <span>The Recent Meassage..</span>
                </div>
            </div>:null}

        </div>

        <div className='Bottom_Side_Bar'>
            <div className='bottom_part help'>
              <img className='icons question'src={assets.question_icon} alt="" />
              {extend?<span>Help</span>:null}

            </div>

            <div className='bottom_part help'>
              <img className='icons history' src={assets.history_icon} alt="" />
              {extend?<span>History</span>:null}

            </div>

            <div className='bottom_part activity'>
              <img className='icons setting' src={assets.setting_icon} alt="" />
              {extend?<span>Settings</span>:null}

            </div>

        </div>
      </div>
    </>
  )
}

export default Side_bar