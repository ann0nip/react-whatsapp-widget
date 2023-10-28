import React, { useContext, Fragment, useEffect } from 'react';
import { ChatContext } from '../../contexts/chat.context';
import ChatBox from '../chat-box/chat-box.component';
import Header from '../header/header.component';
import SendButton from '../send-button/send-button';
import WaButton from '../wa-button/wa-button.component';
import styles from './app.module.css';

const App = (props) => {
    console.log("🚀 ~ file: app.component.jsx:10 ~ App ~ props:", props)
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);
    useEffect(() => {
        if (props.open) {
            setIsChatOpen(true);
        }
    }, []);

    return (
        <Fragment>
            <div
                className={`${styles.root} ${
                    isChatOpen ? styles.open : styles.close
                } ${props.position === 'left' ? styles.positionLeft : styles.positionRight} ` }
            >

                <Header {...props} />
                <ChatBox {...props} />
                <SendButton {...props} />
            </div>
            <WaButton {...props} />
        </Fragment>
    );
};

export default App;
