import React, { useState } from "react";
import { ReactQrCode } from "@devmehq/react-qr-code";
import "./App.css";

function App() {
  const [ReactQrCodeVisible, setReactQrCodeVisibility] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="qr-generator">
      <h1>Simple QR Generator</h1>
      <p>get a usable QR code out of any text</p>
      <div className="container">
        <form className="input">
          <input
            className="input-area"
            type="text"
            value={text}
            onClick={() => setReactQrCodeVisibility(false)}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            type="button"
            className="btn"
            onClick={() => setReactQrCodeVisibility(true)}
          >
            Generate
          </button>
        </form>
        {ReactQrCodeVisible && (
          <div className="qr-area">
            <ReactQrCode
              value={text}
              bgColor={"#ffffff"}
              size={300}
              fgColor="#4b0082"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
