import React from 'react'
import dayjs from 'dayjs'
import styles from './ChatSection.module.css'

export default function ChatSection({ companyName, message }) {
  const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)

  return (
    <div className={styles.root}>
      <div className={styles.message}>
        <span className={styles.triangle_top_right} />
        <span className={styles.message_title}>{companyName}</span>
        <p className={styles.message_body}>{message}</p>
        <span className={styles.message_time}>{time}</span>
      </div>
    </div>
  )
}
