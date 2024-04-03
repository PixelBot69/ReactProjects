import { useState } from "react";
import QRCode from "react-qr-code";

function Qrsss() {
    const [input, setInput] = useState("");
    const [qrcode, setQrcode] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleClick() {
        setQrcode(input);
    }

    return (
        <div>
            <input
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value here"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Generate QR Code</button>
            <QRCode value={qrcode} />
        </div>
    );
}

export default Qrsss;
