import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChatContext } from '../../contexts/chat.context';
import styles from './wa-button.module.css';

const defaultProps = {
    position: 'right',
};

const WaButton = ({
    position = defaultProps.position
}) => {
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);

    const handleOpen = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className={`${styles.root}  ${position === 'left' ? styles.positionLeft : styles.positionRight} ` } onClick={handleOpen}>
            <FaWhatsapp />
        </div>
    );
};

export default WaButton;
