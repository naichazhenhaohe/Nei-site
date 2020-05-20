import React, { useState } from 'react'
import { Checkbox, Button, Isolator } from 'nei-ui'

export default function() {
  const [value, setValue] = useState(false)
  const init = true

  return (
    <div>
      <Isolator>
        <Checkbox initChecked={init}>initChecked Checkbox</Checkbox>
        <Checkbox checked={value}>checkbox</Checkbox>
        <Button onClick={() => setValue(!value)}>点击切换复选框状态</Button>
      </Isolator>
    </div>
  )
}
