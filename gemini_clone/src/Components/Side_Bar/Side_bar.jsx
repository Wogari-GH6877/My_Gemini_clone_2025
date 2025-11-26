import React, { useState,useContext } from 'react'
import { assets } from '../../assets/assets'
import "./Side_bar.css"
import { Appcontext } from '../../Context/Context';

function Side_bar() {

  const [extend,setExtend]=useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Appcontext);

  const loadPrompt= async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt);
  }
  return (
    <>
      <div className='Main_Side_Bar'>
        <div className='Top_Tide_Bar'>
            <div className='Top1'>
                <img onClick={()=>setExtend(!extend)}className="icons menu"src={assets.menu_icon} alt="" />
            </div>
            <div onClick={()=>newChat()}className='Top2'>
                <img className="icons input" src={assets.plus_icon} alt="" />
                {extend?<input type="text" placeholder='New Chat'/>:null}
            </div>
            {extend?<div className='Recent'>
                <p className='recent_title'>Recent</p>
                {prevPrompt.map((item,index)=>{
                  return(
                    <div onClick={()=>loadPrompt(item)}className='recent_chat'>
                  <img className="icons "src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>

                  )
                })}
                
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