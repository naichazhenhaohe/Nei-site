<main>

# 单选框 / Radio

提供多个存在时，只可选择一项的选项。

## 使用说明

<desc>需要用户在一堆选项中进行多选时使用。</desc>
<desc>功能与选择器 Select 类似，于多个选项中进行单选。区别在于单选框 Radio 能够直接看到所有的选项。</desc>
<desc>只存在一个时，单选框 Radio 与复选框 Checkbox 与开关 Switch 的作用类似，展现形式不同。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Radio>radio</Radio>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Radio } from 'nei-ui'
() => {
  return <Radio>radio</Radio>
}
```

</details>
</playground>

### 禁用

<desc>使用 disabled 属性控制是否禁用单选框。</desc>

<playground>
<wrapper>

<Isolator>
  <Radio checked disabled> disabled radio</Radio>
  <Radio disabled> disabled radio</Radio>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Radio } from 'nei-ui'
() => {
  return (
    <Radio checked disabled> disabled checkbox</Radio>
    <Radio disabled> disabled checkbox</Radio>
  )
}
```

</details>
</playground>

### 单选框组

<desc>单选框组 Radio.Group 可容纳多个单选框，同一时间至多只有一项被选中。</desc>
<desc>单选框组 Radio.Group 中的单选框 Radio 需要有独一无二的 value 属性进行身份区分。</desc>

<playground>
<wrapper>

<RadioGroupDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Radio } from 'nei-ui'
const Group = Radio.Group
() => {
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

```

</details>
</playground>

### 接口

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Radio 接口</div>

|   属性    |               描述               | 类型        | 默认值 |
| :-------: | :------------------------------: | ----------- | ------ |
|  checked  |            复选框状态            | Boolean     | -      |
| onChange  |     单选框状态转变是触发事件     | (event)=>{} | -      |
|   value   |    在组内时使用，唯一的代表值    | String      | -      |
|    id     |     单选框的 id，唯一标识符      | String      | -      |
| disabled  |          是否禁用单选框          | Boolean     | false  |
| className |            自定义类名            | string      | -      |
|    ...    | 其他原生属性，会被添加在单选框上 | -           | -      |

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Radio.Group 接口</div>

|   属性    |           描述           | 类型               | 默认值 |
| :-------: | :----------------------: | ------------------ | ------ |
|   value   |     选中的单选框的值     | string             | -      |
| disabled  |    是否禁用所有单选框    | Boolean            | false  |
| onChange  | 组内单选框状态改变时触发 | (value:string)=>{} | -      |
| className |        自定义类名        | string             | -      |

</main>
