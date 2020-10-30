import React, { useContext } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'
import WidgetContext from '../context/widgetContext'

export default function WhatsAppButton() {
  const { handleOpen } = useContext(WidgetContext)

  return (
    <div className={styles.root} onClick={handleOpen}>
      <FaWhatsapp />
    </div>
  )
}
