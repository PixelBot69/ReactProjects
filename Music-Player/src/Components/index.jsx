

import { useState, useRef,useEffect} from 'react'

function Music(){
    const music=useRef(null)
    const [current,setCurrent]=useState(0)
    const [pause,setPause]=useState(false)
    const [progress,setProgress]=useState(0)
    useEffect(() => {
        if (pause) {
          const interval = setInterval(() => {
            setProgress(
              (music.current.currentTime / music.current.duration) * 100
            );
          }, 1000);
    
          return () => clearInterval(interval);
        }
      }, [pause]);
  
  
    const tracks = [
      {
        title: "Track 1",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/150",
      },
      {
        title: "Track 2",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://via.placeholder.com/150",
      },]




      function handlepause(){
        if (pause === true){
            setPause(false)
            music.current.pause();


        }
        else{
            setPause(true)
            music.current.play();

        }

      }
      function handleMusic(val) {
        let newIndex;
        if (val === "forward") {
            newIndex = (current + 1) % tracks.length; 
        } else {
            newIndex = (current - 1 + tracks.length) % tracks.length; 
        }
        setCurrent(newIndex);
        setProgress(0);
    }
    

    return( <>
        <h1>{tracks[current].title}</h1>
        <img src={tracks[current].image} />
        <audio ref={music} src={tracks[current].source} />
        
        <div
            className="progress"
            style={{
                width: `${progress}%`,
                background: pause ? "#3498db" : "#a43636",
                height: '15px'
            }}
        ></div>
        
        <button onClick={() => handleMusic("forward")}>forward</button>
        <button onClick={handlepause}>{pause ? "playing" : "pause"}</button>
        <button onClick={() => handleMusic("backward")}>backward</button>
    </>
 
      
    )
}
export default Music