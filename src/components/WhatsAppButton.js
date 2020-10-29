import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton({ triggerChat }) {
  return (
    <div className={styles.root} onClick={triggerChat}>
      <FaWhatsapp />
    </div>
  )
}
