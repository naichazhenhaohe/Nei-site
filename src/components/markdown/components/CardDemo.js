import React from 'react'
import { Card, Button, Isolator } from 'nei-ui'

export default function() {
  return (
    <Isolator>
      <Card
        title={
          <Button type="primary" onClick={() => alert('clicked!')}>
            按钮
          </Button>
        }
      >
        <p>Card 标题为一个按钮</p>
      </Card>
      <Card title="字符串标题">
        <p>Card 标题为一个字符串</p>
      </Card>
    </Isolator>
  )
}
