import React from 'react'
import styles from './App.module.css'

import Header from './Header'
import ChatSection from './ChatSection'
import SendButton from './SendButton'

export default function App({
  company_name = 'Ann0nIT',
  txt_reply_time = 'Typically replies within a day',
  message = `Hello! 👋🏼
  What can we do for you?`,
  txt_button = 'Send'
}) {
  return (
    <div className={styles.root}>
      <Header />
      <ChatSection />
      <SendButton />
    </div>
  )
}
