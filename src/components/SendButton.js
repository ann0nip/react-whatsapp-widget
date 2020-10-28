import React from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ txt_button }) {
  return (
    <div className={styles.root}>
      <input placeholder='Type a message' className={styles.input} />
      <button className={styles.button}>{txt_button}</button>
    </div>
  )
}
