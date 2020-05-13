import React from 'react'
import { Checkbox } from 'nei-ui'

const Group = Checkbox.Group

export default function() {
  return (
    <Group
      value={['apple']}
      onChange={values => {
        console.log(values)
      }}
    >
      <Checkbox value="apple">apple</Checkbox>
      <Checkbox value="orange">orange</Checkbox>
      <Checkbox value="banana">banana</Checkbox>
    </Group>
  )
}
