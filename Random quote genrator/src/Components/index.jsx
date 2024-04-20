import { useEffect } from "react";
import { useState } from "react";



function Quote(){


    const [data,setData]=useState([])
    
    async function random(){
        try {
            const response = await fetch("https://api.quotable.io/quotes/random")

            const da= await response.json()
            setData(da[0])
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        random()
    },[])

    function refresh(){
        random()
    }

    return(
        <div>
          <p>{data?.author}</p>
          <p>{data?.content}</p>
          <button onClick={refresh}>refresh</button>
        </div>
    )




}
export default Quote