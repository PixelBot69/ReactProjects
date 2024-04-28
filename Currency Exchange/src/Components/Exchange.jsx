import React, { useState, useEffect } from "react";

function Exchange() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        async function fetchExchangeRate() {
            try {
                const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
                const data = await response.json();
                const calculatedRate = data?.rates[toCurrency];
                if (calculatedRate) {
                    setExchangeRate(calculatedRate);
                    setConvertedAmount((amount * calculatedRate).toFixed(2));
                } else {
                    console.error("Conversion rate not available");
                }
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
            }
        }
        fetchExchangeRate();
    }, [fromCurrency, toCurrency, amount]);

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    function handleFromCurrencyChange(e) {
        setFromCurrency(e.target.value);
    }

    function handleToCurrencyChange(e) {
        setToCurrency(e.target.value);
    }

    return (
        <div>
            <label>
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                />
            </label>
            <label>
                From:
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value={"USD"}>USD</option>
                    <option value={"INR"}>INR</option>
                    <option value={"EUR"}>EUR</option>
                </select>
            </label>
            <p>To</p>
            <label>
                Converted Amount:
                <input type="text" value={convertedAmount} readOnly />
            </label>
            <label>
                To:
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value={"EUR"}>EUR</option>
                    <option value={"INR"}>INR</option>
                    <option value={"USD"}>USD</option>
                </select>
            </label>
            <p>Conversion rate: {exchangeRate}</p>
        </div>
    );
}

export default Exchange;
