import React from 'react'
import { Radio } from 'nei-ui'

const Group = Radio.Group

export default function() {
  const handleChange = value => {
    console.log(value)
  }
  return (
    <>
      <Group value="apple" onChange={handleChange}>
        <Radio value="apple">apple</Radio>
        <Radio value="orange">orange</Radio>
        <Radio value="banana">banana</Radio>
      </Group>
      <p style={{ margin: '10px 0' }}>下方为被禁用的单选框组</p>
      <Group value="orange" disabled>
        <Radio value="apple">apple</Radio>
        <Radio value="orange">orange</Radio>
        <Radio value="banana">banana</Radio>
      </Group>
    </>
  )
}
