import React from 'react'
import styles from './Header.module.css'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header({ companyName, textReplyTime, triggerChat }) {
  return (
    <div className={styles.root}>
      <span className={styles.close_btn} onClick={triggerChat}>
        <AiOutlineClose />
      </span>
      <div className={styles.logo}>
        <BiSupport />
      </div>
      <div className={styles.texts}>
        <h1 className={styles.texts_h1}>{companyName}</h1>
        <span className={styles.texts_span}>{textReplyTime}</span>
      </div>
    </div>
  )
}
