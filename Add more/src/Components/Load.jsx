import React, { useState, useEffect } from "react";
import "./Load.css";

function LoadMore() {
    const [limit, setLimit] = useState(0);
    const [arr, setArr] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${limit * 20}`);
                const data = await response.json();
                setArr((prevData) => [...prevData, ...data.products]);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        load();
    }, [limit]);

    function LoadMores(){
        setLimit(limit+1)
    }

    return (
        <div className="container">
            <div className="image">
                {arr.map((product, index) => (
                    <div key={index}>
                        <img className="images" src={product.thumbnail} alt={product.brand} />
                        <p className="para">{product.brand}</p>
                    </div>
                ))}
            </div>
            <div className="but" onClick={LoadMores}>button</div>
        </div>
    );
}

export default LoadMore;
