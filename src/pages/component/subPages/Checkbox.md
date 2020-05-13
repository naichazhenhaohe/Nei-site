<main>

# 复选框 / Checkbox

提供多个存在时，可选择多个的选项。

## 使用说明

<desc>需要用户在一堆选项中进行多选时使用。</desc>
<desc>只存在一个时，单选框 Radio 与复选框 Checkbox 与开关 Switch 的作用类似，展现形式不同。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Checkbox>checkbox</Checkbox>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Checkbox } from 'nei-ui'
() => {
  return <Checkbox>checkbox</Checkbox>
}
```

</details>
</playground>

### 值与初始值

<desc>复选框组件 Checkbox 的值由属性 checked 表达，初始值由属性 initChecked 表达。</desc>

<playground>
<wrapper>

<CheckboxDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React, { useState } from 'react'
import { Checkbox, Button, Isolator } from 'nei-ui'
() => {
  const [value, setValue] = useState(false)
  const init = true
  return (
    <>
      <Checkbox initChecked={init}>initChecked Checkbox</Checkbox>
      <Checkbox checked={value}>checkbox</Checkbox>
      <Button onClick={() => setValue(!value)}>点击切换复选框状态</Button>
    </>
  )
}
```

</details>
</playground>

### 禁用

<desc>使用 disabled 属性控制是否禁用复选框。</desc>

<playground>
<wrapper>

<Isolator>
  <Checkbox initChecked={true} disabled> disabled checkbox</Checkbox>
  <Checkbox initChecked={false} disabled> disabled checkbox</Checkbox>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Checkbox } from 'nei-ui'
() => {
  return (
    <Checkbox initChecked disabled> disabled checkbox</Checkbox>
    <Checkbox initChecked={false} disabled> disabled checkbox</Checkbox>
  )
}
```

</details>
</playground>

### 复选框组

<desc>复选框组 Checkbox.Group 可容纳多个复选框，并对多个复选框进行统一的管理。</desc>
<desc>复选框组 Checkbox.Group 中的复选框 Checkbox 需要有独一无二的 value 属性进行身份区分。</desc>
<desc>同时 value 属性值异与 checked 属性值，用于标注该复选框所代表的值是否被选中。</desc>

<playground>
<wrapper>

<CheckboxGroupDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Checkbox } from 'nei-ui'
const Group = Checkbox.Group
() => {
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

```

</details>
</playground>

### 接口

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Checkbox 接口</div>

|    属性     |               描述               | 类型        | 默认值 |
| :---------: | :------------------------------: | ----------- | ------ |
| initChecked |          复选框初始状态          | Boolean     | false  |
|   checked   |            复选框状态            | Boolean     | -      |
|  onChange   |     复选框状态转变是触发事件     | (event)=>{} | -      |
|    value    | 复选框在组内时使用，唯一的代表值 | String      | -      |
|  disabled   |          是否禁用复选框          | Boolean     | false  |
|  className  |            自定义类名            | string      | -      |

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Checkbox.Group 接口</div>

|   属性    |           描述           | 类型           | 默认值 |
| :-------: | :----------------------: | -------------- | ------ |
|   value   |     选中的复选框的值     | Array          | []     |
| disabled  |    是否禁用所有复选框    | Boolean        | false  |
| onChange  | 组内复选框状态改变时触发 | (value:[])=>{} | -      |
| className |        自定义类名        | string         | -      |

</main>
