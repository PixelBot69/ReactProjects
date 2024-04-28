import React, { useEffect, useState } from "react";

function FilterCard() {
    const [product, setProduct] = useState([]);
    const [selected, setSelected] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    async function Pro() {
        try {
            const apiResponse = await fetch("https://dummyjson.com/products");
            const result = await apiResponse.json(); 
            setProduct(result.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        Pro();
    }, []);

    useEffect(() => {
        if (selected === '') {
            setFilteredItems(product);
        } else {
            const filtered = product.filter(item => item.category === selected);
            setFilteredItems(filtered);
        }
    }, [selected, product]);

    const handleCategorySelect = (category) => {
        setSelected(category);
    };

    return (
        <div>
            
            {product.map((i) => (
                <button key={i.id} onClick={() => handleCategorySelect(i.category)}>
                    {i.category}
                </button>
            ))}
         
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>
                        <ul>{item.title}</ul>
                        <ul>{item.category}</ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterCard;
