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
  txt_reply_time = 'Typically replies within a day',
  message = `Hello! 👋🏼 \n\nWhat can we do for you?`,
  company_name = 'Support',
  txt_button = 'Send',
  phoneNumber
}) {
  const [open, setOpen] = useState(false)

  const triggerChat = () => {
    setOpen((prevState) => setOpen(!prevState))
  }

  return (
    <div style={containerStyles}>
      <App
        txt_reply_time={txt_reply_time}
        company_name={company_name}
        phoneNumber={phoneNumber}
        triggerChat={triggerChat}
        txt_button={txt_button}
        message={message}
        isOpen={open}
      />
      <WhatsAppButton triggerChat={triggerChat} />
    </div>
  )
}
