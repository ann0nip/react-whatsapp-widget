import React from 'react'
import App from './components/App'
import WhatsAppButton from './components/WhatsAppButton'
import { WidgetContextProvider } from './context/widgetContext'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  bottom: 15,
  right: 25
}

export default function WhatsAppWidget({
  textReplyTime = 'Typically replies within a day',
  message = `Hello! 👋🏼 \n\nWhat can we do for you?`,
  companyName = 'Support',
  sendButton = 'Send',
  phoneNumber
}) {
  return (
    <div style={containerStyles}>
      <WidgetContextProvider>
        <App
          textReplyTime={textReplyTime}
          companyName={companyName}
          phoneNumber={phoneNumber}
          sendButton={sendButton}
          message={message}
        />
        <WhatsAppButton />
      </WidgetContextProvider>
    </div>
  )
}
