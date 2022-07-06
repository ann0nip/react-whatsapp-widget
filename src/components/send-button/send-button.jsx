import React, { useState } from 'react';
import styles from './send-button.module.css';

const defaultProps = {
    sendButtonText: 'Send',
    inputPlaceHolder: 'Type a message',
};

const SendButton = ({
    phoneNumber,
    inputPlaceHolder = defaultProps.inputPlaceHolder,
    sendButtonText = defaultProps.sendButtonText,
}) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        if (!phoneNumber) {
            window.alert('Invalid Phone Number');
            return false;
        }
        window.open(`https://wa.me/${phoneNumber}?text=${message}`);
        setMessage('');
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
