import { useState } from "react"


function Tool({content}){

    const [active,setActive]=useState(false)
    function sett(){
        setActive(true)
    }
    function gett(){
        setActive(false)
    }

    return(
        <div>
            <button onMouseEnter={sett} onMouseLeave={gett}>click me</button>

            {active? content :null}
        </div>
    )




}
export default Tool