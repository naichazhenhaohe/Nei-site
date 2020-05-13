<main>

# 间距 / Spacer

用于在目标之间提供标准的间隔。

## 使用说明

<desc>在预期有间隔的内容之间插入本组件。提供可由用户指定大小的水平向或垂直向间距。</desc>

## 代码演示

### 垂直间距

<desc>垂直方向添加间距，通过间距组件的属性 x 设置。</desc>
<desc>x 属性值类型为 number</desc>
<desc>间距组件使用 margin 支撑大小。因此作为子代组件进行支撑使，需要注意 margin 坍塌的问题。</desc>
<playground>
<wrapper>

<div style="background: #bbb; width:100%;display:flex;">
  <Spacer y={0.5}>
</div>
  <Spacer y={1}>
<div style="background: #bbb; width:100%;display:flex;">
  <Spacer y={1.5}>
</div>
<Spacer y={2}>
<div style="background: #bbb; width:100%;display:flex;">
  <Spacer y={2.5}>
</div>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Spacer } from 'nei-ui'
ReactDOM.render(
  <>
    <div style="background: #bbb; width:100%;display:flex;">
      <Spacer y={0.5}>
    </div>
      <Spacer y={1}>
    <div style="background: #bbb; width:100%;display:flex;">
      <Spacer y={1.5}>
    </div>
    <Spacer y={2}>
    <div style="background: #bbb; width:100%;display:flex;">
      <Spacer y={2.5}>
    </div>
  </>
)
```

</details>
</playground>

### 水平间距

<desc>水平方向添加间距，通过间距组件的属性 y 设置。</desc>
<desc>y 属性值类型为 number</desc>
<desc>间距组件的 display 属性为 block，会触发换行。若想避免换行可使用 flex 布局，或者下面介绍的 isInline 属性。</desc>
<playground>
<wrapper>

<div style='display: flex'>
  <div style="background: #bbb;display:inline-block;">
    <Spacer x={0.5}>
  </div>
    <Spacer x={1}>
  <div style="background: #bbb;display:inline-block;">
    <Spacer x={1.5}>
  </div>
  <Spacer x={2}>
  <div style="background: #bbb;display:inline-block;">
    <Spacer x={2.5}>
  </div>
</div>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Spacer } from 'nei-ui'
ReactDOM.render(
  <div style={{display: 'flex'}}>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={0.5}>
    </div>
      <Spacer x={1}>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={1.5}>
    </div>
    <Spacer x={2}>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={2.5}>
    </div>
  </div>
)
```

</details>
</playground>

### 行内间距

<desc>使间距组件变为行内元素，通过间距组件的属性 isInline 设置。</desc>
<desc>y 属性值类型为 Boolean</desc>
<playground>
<wrapper>

<div style="background: #bbb;display:inline-block;">
  <Spacer x={0.5}>
</div>
  <Spacer isInline x={1}>
<div style="background: #bbb;display:inline-block;">
  <Spacer x={1.5}>
</div>
<Spacer isInline x={2}>
<div style="background: #bbb;display:inline-block;">
  <Spacer x={2.5}>
</div>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Spacer } from 'nei-ui'
ReactDOM.render(
  <>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={0.5}>
    </div>
      <Spacer isInline x={1}>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={1.5}>
    </div>
    <Spacer isInline x={2}>
    <div style={{background: '#bbb', display: 'inline-block'}}>
      <Spacer x={2.5}>
    </div>
  </>
)
```

</details>
</playground>

|   属性    |            描述            | 类型    | 默认值 |
| :-------: | :------------------------: | ------- | ------ |
|     x     |          水平宽度          | Number  | 1      |
|     y     |          垂直高度          | Number  | 1      |
| isInline  | 是否设置间距组件为行内元素 | Boolean | false  |
| className |         自定义类名         | string  | -      |

</main>
