import React from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ sendButton, phoneNumber, placeholder }) {
  const handleSend = () => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number')
      return false
    }
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`)
  }

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handleSend}>
        {sendButton}
      </button>
    </div>
  )
}
