import React, { useState } from 'react'

const Context = React.createContext({})

export function WidgetContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prevState) => setIsOpen(!prevState))
  }

  return (
    <Context.Provider value={{ isOpen, handleOpen }}>
      {children}
    </Context.Provider>
  )
}

export default Context
