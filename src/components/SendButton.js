import React, { useState } from 'react'
import styles from './SendButton.module.css'

export default function SendButton({ txt_button, phoneNumber }) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!phoneNumber) {
      alert('Invalid Phone Number')
      return false
    }
    window.open(`https://wa.me/${phoneNumber}?text=${message}`)
    setMessage('')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        placeholder='Type a message'
        className={styles.input}
        onChange={handleChange}
        value={message}
      />
      <button className={styles.button} onClick={handleSend}>
        {txt_button}
      </button>
    </div>
  )
}
