import React, { useContext } from 'react'
import App from './components/app/app.component'

import { ChatProvider } from './contexts/chat.context'
//import styles from './styles.module.css'

export const WhatsAppWidget = () => {
  return (
    <ChatProvider>
      <App />
    </ChatProvider>
  )
}
