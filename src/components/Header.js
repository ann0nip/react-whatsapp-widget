import React from 'react'
import styles from './Header.module.css'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header({ company_name, txt_reply_time, triggerChat }) {
  return (
    <div className={styles.root}>
      <span className={styles.close_btn} onClick={triggerChat}>
        <AiOutlineClose />
      </span>
      <div className={styles.logo}>
        <BiSupport />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.texts_h1}>{company_name}</h1>
        <span className={styles.texts_span}>{txt_reply_time}</span>
      </div>
    </div>
  )
}
