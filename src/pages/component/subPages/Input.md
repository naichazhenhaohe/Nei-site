<main>

# 输入框 / Input

用于接收用户通过键盘输入的内容。

## 使用说明

<desc>需要接收用户输入的内容时，使用本组件。</desc>

## 代码演示

### 类型

<desc>输入框 Input 的类型，通过属性 type 设置。</desc>
<desc>type 属性值类型为 string</desc>
<desc>type 属性默认值为 'default' ，可有如下属性值</desc>

<ul>
  <li>default</li>
  <li>primary</li>
  <li>success</li>
  <li>warning</li>
  <li>error</li>
</ul>

<playground>
<wrapper>

<Isolator>
  <Input type='default' placeholder='default' />
  <Input type='primary' placeholder='primary' />
  <Input type='success' placeholder='success' />
  <Input type='warning' placeholder='warning' />
  <Input type='error' placeholder='error' />
</Isolator>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Input } from 'nei-ui'
() => {
  return(
    <>
      <Input type="default" placeholder="default" />
      <Input type="primary" placeholder="primary" />
      <Input type="success" placeholder="success" />
      <Input type="warning" placeholder="warning" />
      <Input type="error" placeholder="error" />
    </>
  )
}
```

</details>
</playground>

### 禁用和只读

<desc>禁用和只读类型的输入框，通过属性 disabled 和 readOnly 设置。</desc>
<desc>disabled 和 readOnly 属性值类型皆为 Boolean，默认值皆为 false。</desc>
<desc>disabled 属性优先据高于 type 属性。</desc>

<playground>
<wrapper>

<Isolator>
  <Input disabled placeholder='disabled input' />
  <Input readOnly placeholder='readOnly primary' />
  <Input disabled type='primary' placeholder='disabled primary input' />
  <Input readOnly type='primary' placeholder='readOnly primary input' />
</Isolator>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Input } from 'nei-ui'
() => {
  return (
    <>
      <Input disabled placeholder="disabled input" />
      <Input readOnly placeholder="readOnly primary" />
      <Input disabled type="primary" placeholder="disabled primary input" />
      <Input readOnly type="primary" placeholder="readOnly primary input" />
    </>
  )
}
```

</details>
</playground>

### 尺寸

<desc>通过属性 size 设置输入框的大小。</desc>
<desc>size 属性值类型皆为 String, 默认为 default，可有如下属性值</desc>

<ul>
  <li>small</li>
  <li>default</li>
  <li>large</li>
</ul>
<playground>
<wrapper>

<Isolator>
  <Input type='primary' size="small" placeholder="small" />
  <Input type='primary' placeholder="default" />
  <Input type='primary' size="large" placeholder="large" />
</Isolator>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Input } from 'nei-ui'
() => {
  return (
    <>
      <Input size="small" placeholder="small" />
      <Input size="default" placeholder="default" />
      <Input size="large" placeholder="large" />
    </>
  )
}
```

</details>
</playground>

### 值与事件

<desc>value 属性绑定输入框的当前值。</desc>
<desc>initValue 属性给予输入框组件 Input 初始值。</desc>
<desc>value 属性结合 onChange 事件以实现数据绑定。</desc>
<desc>请于下方输入框中输入内容后，于控制台查看变化。</desc>

<playground>
<wrapper>

<InputDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React, { useState } from 'react'
import { Input } from 'nei-ui'
() => {
  const [value, setValue] = useState()
  const handleChange = e => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return <Input value={value} onChange={handleChange} />
}
```

</details>
</playground>

### 接口

|    属性     |                  描述                   | 类型      | 默认值    |
| :---------: | :-------------------------------------: | --------- | --------- |
|    type     |              输入框的类型               | InputType | 'default' |
|  disabled   |             是否禁用输入框              | Boolean   | false     |
|  readOnly   |             输入框是否只读              | Boolean   | false     |
|    size     |              输入框的尺寸               | InputSize | 'default' |
|    value    |               输入框的值                | string    | -         |
|  initValue  |             输入框的初始值              | string    | -         |
| placeholder |            输入框的占位文本             | string    | -         |
|  onChange   |       输入框内容改变时触发的事件        | event=>{}  | - |
|   onFocus   |        输入框被聚焦时触发的事件         | event=>{}  | - |
|   onBlur    |         输入框失焦时触发的事件          | event=>{}  | - |
|  className  |               自定义类名                | string    | -         |
|     ...     | 其他自定义属性，会被放置在 input 标签上 | -         | -         |

### 类型说明

<desc>type InputType = 'default' | 'primary' | 'success' | 'warning' | 'error'</desc>
<desc>type InputSize = 'default' | 'small' | 'large' </desc>

</main>
