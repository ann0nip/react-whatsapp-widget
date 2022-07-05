import React, { useContext, Fragment } from 'react';

import { ChatContext } from '../../contexts/chat.context';
import ChatBox from '../chat-box/chat-box.component';
import Header from '../header/header.component';
import SendButton from '../send-button/send-button';
import WaButton from '../wa-button/wa-button.component';
import styles from './app.module.css';

const App = (props) => {
    const { isChatOpen } = useContext(ChatContext);

    return (
        <Fragment>
            <div
                className={`${styles.root} ${
                    isChatOpen ? styles.open : styles.close
                }`}
            >
                <Header {...props} />
                <ChatBox {...props} />
                <SendButton {...props} />
            </div>
            <WaButton />
        </Fragment>
    );
};

export default App;
