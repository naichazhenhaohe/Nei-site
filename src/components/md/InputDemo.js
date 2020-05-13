import React, { useState } from 'react'
import { Input } from 'nei-ui'

export default function() {
  const [value, setValue] = useState('')
  const handleChange = e => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <div>
      <Input value={value} onChange={handleChange} />
    </div>
  )
}
