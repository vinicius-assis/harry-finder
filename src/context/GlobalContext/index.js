import React, { useState, createContext} from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => setActive(!active)

  return (
    <GlobalContext.Provider value={{ active, handleClick }}>
      {children}
    </GlobalContext.Provider>
  )
}
