import React from 'react'
import App from './components/App'
import WhatsAppButton from './components/WhatsAppButton'
import { WidgetContextProvider } from './context/widgetContext'
import styles from './index.module.css'

export default function WhatsAppWidget({
  textReplyTime = 'Typically replies within a day',
  message = `Hello! 👋🏼 \n\nWhat can we do for you?`,
  companyName = 'Support',
  sendButton = 'Send',
  placeholder = 'Type a message',
  phoneNumber
}) {
  return (
    <div className={styles.root}>
      <WidgetContextProvider>
        <App
          textReplyTime={textReplyTime}
          companyName={companyName}
          phoneNumber={phoneNumber}
          sendButton={sendButton}
          placeholder={placeholder}
          message={message}
        />
        <WhatsAppButton />
      </WidgetContextProvider>
    </div>
  )
}
