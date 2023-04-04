import React from "react";
import styles from "./chat-box.module.css";

interface ChatBoxComponentBox {
  companyName?: string;
  message?: string;
}

const ChatBox = ({ companyName, message }: ChatBoxComponentBox): JSX.Element => {
  const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`);

  return (
    <div className={styles.root}>
      <div className={styles.message}>
        <span className={styles.triangle_top_right} />
        <span className={styles.message_title}>{companyName ? companyName : "Support"}</span>
        <p className={styles.message_body}>
          {message ? message : "Hello! 👋🏼 \n\nWhat can we do for you?"}
        </p>
        <span className={styles.message_time}>{time}</span>
      </div>
    </div>
  );
};

export default ChatBox;
