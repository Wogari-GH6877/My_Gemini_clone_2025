import { createContext, useState } from "react";
import {main} from "../Gemini_Config/GeminiConfig.jsx";
import { useEffect } from "react";
import {marked} from "marked";

export const Appcontext=createContext();

const ContextProvider =(props)=>{
     
  const [input,setInput]=useState("");
  const [recentPrompt,setRecentPrompt]=useState("");
  const [prevPrompt,setPrevPrompt]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResultData]=useState("");

//   const delayPara=(index,nextWord)=>{

//     setTimeout(function(){
//         setResultData(prev=> prev + nextWord);
//     },75*index)

//   }

   const newChat=()=>{
    setLoading(false);
    setShowResult(false);
   }

   const onSent=async(prompt)=>

   {  
     setResultData("");
     setLoading(true);
     setShowResult(true);
     let response;
     if(prompt !==undefined){
        response=await main(prompt)
        setRecentPrompt(prompt)
     }
     else{
        setPrevPrompt(prev=>[...prev]);
        setRecentPrompt(input);
        response= await main(input);
     }
     setRecentPrompt(input);
     setPrevPrompt(prev=>[...prev,input])

     const html=marked(response);
     setResultData(html);
    //  let newResponse2=newResponse2.split("*").join("</br>");
    //  let newResponseArray=newResponse2.split(" ");

    //  for(let i=0; i < newResponseArray.length;i++){
    //     const nextWord = newResponseArray[i]
    //     delayPara(i,nextWord + " ")
    //  }
     setLoading(false);
     setInput("");
}

  


    const contextValue={
        input,setInput,recentPrompt,setRecentPrompt
        ,prevPrompt,setPrevPrompt,showResult,setShowResult,
        loading,setLoading,resultData,setResultData,onSent,newChat

    }

    return(
        <Appcontext.Provider value={contextValue}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default ContextProvider