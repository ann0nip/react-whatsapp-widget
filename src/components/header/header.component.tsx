import React, { useContext } from "react";
import { BiSupport } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { ChatContext } from "../../contexts/chat.context";
import styles from "./header.module.css";

interface HeaderInterface {
  CompanyIcon?: any;
  companyName?: string;
  replyTimeText?: string;
}

const Header = ({ CompanyIcon, companyName, replyTimeText }: HeaderInterface): JSX.Element => {
  const { setIsChatOpen } = useContext(ChatContext);

  const handleOpen = () => {
    setIsChatOpen(false);
  };

  return (
    <div className={styles.root}>
      <span className={styles.close_btn} onClick={handleOpen}>
        <AiOutlineClose />
      </span>
      <div className={styles.logo}>{(CompanyIcon && <CompanyIcon />) || <BiSupport />}</div>
      <div className={styles.texts}>
        <span className={styles.texts_h1}>{companyName}</span>
        <span className={styles.texts_span}>{replyTimeText}</span>
      </div>
    </div>
  );
};

export default Header;
