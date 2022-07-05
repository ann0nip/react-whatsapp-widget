import React, { useContext, useEffect } from 'react'
import { ChatContext } from '../../contexts/chat.context'
import WaButton from '../wa-button/wa-button.component'

const App = () => {
  const { isChatOpen } = useContext(ChatContext)

  useEffect(() => {
    console.log(isChatOpen)
  }, [isChatOpen])
  return <WaButton />
}

export default App
