import React, { useEffect, useState } from "react";
import "./Scroll.css";

function Scroll() {
    const [load, setLoad] = useState(false);
    const [api, setApi] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoad(false);
                const response = await fetch(`https://dummyjson.com/products?limit=100`);
                const data = await response.json();
                console.log(data);
                setApi(data.products);
                setLoad(true);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchData(); 
    }, []); 

    useEffect(() => {
        const handleScroll = () => {
            const howMuchScrolled =
                document.body.scrollTop || document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollPercentage = (howMuchScrolled / height) * 100;
            setScrollPercentage(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <div className="container">
            <div className="scroll-progress-tracking-container">
                <div
                    className="current-progress-bar"
                    style={{ width: `${scrollPercentage}%` }}
                ></div>
            </div>
            {load ? (
                api.map((dataItem, index) => (
                    <p key={index}>{dataItem.title}</p>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
}

export default Scroll;
