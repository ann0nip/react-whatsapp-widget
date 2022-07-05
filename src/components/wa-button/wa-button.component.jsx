import React, { useContext } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { ChatContext } from '../../contexts/chat.context'
import styles from './wa-button.module.css'

export default function WaButton() {
  const { isChatOpen, setIsChatOpen } = useContext(ChatContext)

  const handleOpen = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <div className={styles.root} onClick={handleOpen}>
      <FaWhatsapp />
    </div>
  )
}
