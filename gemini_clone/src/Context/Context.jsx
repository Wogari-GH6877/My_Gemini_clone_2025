import { createContext, useState } from "react";
import {main} from "../Gemini_Config/GeminiConfig.jsx";
import { useEffect } from "react";

export const Appcontext=createContext();

const ContextProvider =(props)=>{
     
  const [input,setInput]=useState("");
  const [recentPrompt,setRecentPrompt]=useState("");
  const [prevPrompt,setPrevPrompt]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResutData]=useState("");

  const delayPara=(index,nextWord)=>{

  }

   const onSent=async(prompt)=>

   {  
     setResutData("");
     setLoading(true);
     setShowResult(true);
     setRecentPrompt(input);
     const response= await main(input);
     const responseArray=response.split("**");
     let newResponse;

     for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2!==1){
            newResponse+=responseArray[i];
        }
        else{
            newResponse+="<b>"+responseArray[i]+"<b>"
        }
     }
     setResutData(newResponse);
     setLoading(false);
     setInput("");
}

  


    const contextValue={
        input,setInput,recentPrompt,setRecentPrompt
        ,prevPrompt,setPrevPrompt,showResult,setShowResult,
        loading,setLoading,resultData,setResutData,onSent

    }

    return(
        <Appcontext.Provider value={contextValue}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default ContextProvider