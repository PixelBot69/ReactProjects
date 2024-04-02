import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

function StarRating({ stars }) { 
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    function handleStarClick(index) {
        setRating(index);
    }

    function handleMouseOver(index) {
        setHoverRating(index);
    }

    function handleMouseLeave() {
        setHoverRating(rating);
    }

    return (
        <div className="StarRate">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1; 
                return (
                    <FaStar
                        key={index}
                        onClick={() => handleStarClick(starValue)}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        className={starValue <= (hoverRating || rating) ? "active" : ""}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
