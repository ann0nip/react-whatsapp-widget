import React from 'react'
import App from './components/App'
import WhatsAppButton from './components/WhatsAppButton'

export default function WhatsAppWidget() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 15,
    right: 25
  }

  return (
    <div style={containerStyles}>
      <App />
      <WhatsAppButton />
    </div>
  )
}
