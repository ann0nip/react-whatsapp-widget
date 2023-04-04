import React, { useState } from "react";
import styles from "./send-button.module.css";

interface SendButtonInterface {
  phoneNumber: number;
  sendButtonText?: string;
  inputPlaceHolder?: string;
}

const SendButton = ({
  phoneNumber,
  inputPlaceHolder,
  sendButtonText,
}: SendButtonInterface): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (!phoneNumber) {
      window.alert("Invalid Phone Number");
      return false;
    }
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        placeholder={inputPlaceHolder}
        className={styles.input}
        onChange={handleChange}
        value={message}
      />
      <button className={styles.button} onClick={handleClick}>
        {sendButtonText}
      </button>
    </div>
  );
};

export default SendButton;
