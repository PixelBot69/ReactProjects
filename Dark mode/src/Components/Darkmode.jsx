import React from "react";
import LocalStorage from "./LocalStorage";
import "./dark.css";



function Darkmode(){
    const [theme,setTheme]=LocalStorage('theme','light')
    function handleToggleTheme(){
        setTheme(theme==='light'? 'dark':'light')
    }


    return(
        <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World !</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    )

}
export default Darkmode