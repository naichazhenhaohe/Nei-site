import React from 'react'

const defaultContext = {
  theme: {},
  updateColorTheme: () => { },
  updateLayoutTheme: () => { }
}

export const CustomizationContext = React.createContext(defaultContext)
export const useCustomization = () => React.useContext(CustomizationContext)
