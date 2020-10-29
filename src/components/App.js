import React from 'react'
import styles from './App.module.css'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App(props) {
  return (
    <div className={styles.root} style={{ opacity: props.isOpen ? 1 : 0 }}>
      <Header {...props} />
      <ChatSection {...props} />
      <SendButton {...props} />
    </div>
  )
}
