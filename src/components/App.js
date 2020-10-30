import React, { useContext } from 'react'
import styles from './App.module.css'
import WidgetContext from '../context/widgetContext'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App(props) {
  const { isOpen, handleOpen } = useContext(WidgetContext)

  return (
    <div className={styles.root} style={{ opacity: isOpen ? 1 : 0 }}>
      <Header handleOpen={handleOpen} {...props} />
      <ChatSection {...props} />
      <SendButton {...props} />
    </div>
  )
}
