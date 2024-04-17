import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

function Count({intial,end}){
    const [time,setTime]= useState(intial)
    const [running,setRunning]= useState(true)
    const value = useRef()

    useEffect(()=>{
        if (running) {
        
            value.current = setInterval(() => {
              setTime((prevTime) => {
                if (prevTime === 0) {
                  clearInterval(value.current);
                  setRunning(false);
      
                  if (end) {
                    end();
                  }
      
                  return 0;
                }
      
                return prevTime - 1;
              });
            }, 1000);
          } else {
            clearInterval(value.current);
          }
      
          return () => {
            clearInterval(value.current);
          };
        

    },[running,end])

    const minutes = Math.floor(time / 60);
     const seconds = time % 60;
     function resetFun(){
        clearInterval(value.current)
        setTime(intial)
        setRunning(false)

     }
     function pauseFun(){
        setRunning((turu)=>!turu)
        
     }

     function startFun(){
        setRunning(true)
        
     }




    
    
    
    return  (
    <> 
    <div>
    <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        <button onClick={resetFun}>reset</button>
        <button onClick={pauseFun}>pause</button>
        <button onClick={startFun}>start</button>
      </p>
    </div>
   
    </>)
}

export default Count

