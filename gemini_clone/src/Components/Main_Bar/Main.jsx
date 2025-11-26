import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./Main.css"
import { Appcontext } from '../../Context/Context'

function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Appcontext)
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
              

              {!showResult?<>
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
              </>:<div className='result'>
                <div className='resut_title'>
                  <img className="icons" src={assets.user_icon} alt="" />
                  <p>{recentPrompt}</p>

                </div>
                <div className='result_data'>
                  <img className="icons" src={assets.gemini_icon} alt="" />
                  {loading? <div className='loader'>
                   <hr />
                   <hr />
                   <hr />

                  </div>:<div dangerouslySetInnerHTML={{ __html: resultData }} />

}
                  
                </div>

                </div>}

              

              <div className='bottom_container'>
                <div className='Search_Box'>
                  <input onChange={(e)=>setInput(e.target.value)}placeholder="Enter a prompt here" type="text" value={input}/>
                  <div className='images'>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                  </div>
                  
                </div>

                <div className='gemini_text'>
                  <p>Gemini may display inaccurate info, including about people, so double-click its response.Your privacy and Gemini Apps</p>
                </div>


              </div>
            </div>

    </div>
  )
}

export default Main