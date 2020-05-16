<main>

# 开关 / Switch

开关选择器。

## 使用说明

<desc>可选择的状态仅有两种时使用。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Switch />
<Spacer />
<Switch checked>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Switch } from 'nei-ui'
() => {
  return (
    <>
      <Switch />
      <Switch checked />
    </>
  )
}
```

</details>
</playground>

### 禁用

<desc>使用 disabled 属性控制开关是否禁用。</desc>

<playground>
<wrapper>

<Switch disabled/>
<Spacer />
<Switch checked disabled>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Switch } from 'nei-ui'
() => {
  return (
    <>
      <Switch disabled />
      <Switch checked disabled />
    </>
  )
}
```

</details>
</playground>

### 接口

|   属性    |          描述          | 类型             | 默认值 |
| :-------: | :--------------------: | ---------------- | ------ |
|  checked  |       开关的状态       | Boolean / String | false  |
| disabled  |     开关是否被禁用     | Boolean          | false  |
| onChange  | 开关状态改变时触发事件 | (event)=>{}      | -      |
| className |       自定义类名       | string           | -      |

</main>
