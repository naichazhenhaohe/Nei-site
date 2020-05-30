import React, { useState } from 'react'
import { useCustomization } from './customizationContext'
import { Input } from 'nei-ui';

export default function LayoutBox () {
  const { theme, updateLayoutTheme } = useCustomization()
  const [fontsizeSmall, setFontsizeSmall] = useState(theme.layout.fontsizeSmall)
  const handleChange = (e, type) => {
    setFontsizeSmall(e.target.value)
    updateLayoutTheme(type, e.target.value)
  }
  return (
    <section>
      <Input value={fontsizeSmall} onChange={e => handleChange(e, 'fontSizeSmall')} />
    </section>
  )
}