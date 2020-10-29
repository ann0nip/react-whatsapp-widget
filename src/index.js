import React, { useState } from 'react'
import App from './components/App'
import WhatsAppButton from './components/WhatsAppButton'

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
  const [open, setOpen] = useState(false)

  const triggerChat = () => {
    setOpen((prevState) => setOpen(!prevState))
  }

  return (
    <div style={containerStyles}>
      <App
        textReplyTime={textReplyTime}
        companyName={companyName}
        phoneNumber={phoneNumber}
        triggerChat={triggerChat}
        sendButton={sendButton}
        message={message}
        isOpen={open}
      />
      <WhatsAppButton triggerChat={triggerChat} />
    </div>
  )
}
