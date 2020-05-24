<main>

# 卡片 / Card

基础的容器。

## 使用说明

<desc>需要突出展示一部分内容时使用。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Card title='Card 标题'>
  <p>Card 内容： 段落 1</p>
  <p>Card 内容： 段落 2</p>
</Card>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card } from 'nei-ui'
() => {
  return (
    <Card title="Card 标题">
      <p>Card 内容： 段落 1</p>
      <p>Card 内容： 段落 2</p>
    </Card>
  )
}
```

</details>
</playground>

### 标题

<desc>卡片组件 Card 的标题通过 title 属性进行设置。</desc>
<desc>title 属性值类型可以是 ReactNode 和 String。</desc>

<playground>
<wrapper>

<CardDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card，Button } from 'nei-ui'
() => {
  return (
    <>
      <Card
        title={
          <Button type="primary" onClick={() => alert('clicked!')}>按钮</Button>
        }
      >
        <p>Card 标题为一个按钮</p>
      </Card>
      <Card title="字符串标题">
        <p>Card 标题为一个字符串</p>
      </Card>
    </>
  )
}
```

</details>
</playground>

### 无标题卡片

<desc>不设置title的值即可让卡片没有标题栏。</desc>

<playground>
<wrapper>

<Card>
  <p>no title Card body</p>
</Card>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card } from 'nei-ui'
() => {
  return (
    <Card >
      <p>no title Card body</p>
    </Card>
  )
}
```

</details>
</playground>

### 悬浮特效

<desc>通过 hoverable 属性设置卡片组件 Card 在被鼠标翻盖时，是否会产生悬浮的特效。</desc>
<desc>hoverable 属性值类型为 Boolean。默认为 false 。</desc>

<playground>
<wrapper>

<Isolator>
  <Card title='有悬浮特效' hoverable>
    <p>请将鼠标移在卡片上查看效果</p>
  </Card>
  <Card title='无悬浮特效'>
    <p>请将鼠标移在卡片上查看效果</p>
  </Card>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card } from 'nei-ui'
() => {
  return (
    <>
      <Card title="有悬浮特效" hoverable>
        <p>请将鼠标移在卡片上查看效果</p>
      </Card>
      <Card title="无悬浮特效">
        <p>请将鼠标移在卡片上查看效果</p>
      </Card>
    </>
  )
}
```

</details>
</playground>

### 尺寸

<desc>通过 size 属性设置卡片组件 Card 的大小。</desc>
<desc>size 属性值有 'small' 与 'default' 两种，默认为 'default'。</desc>
<desc>size 属性为 'small' 时，Card 组件的标题会变小。</desc>

<playground>
<wrapper>

<Card title='small Card title' size='small'>
  <p>small Card body</p>
</Card>
<p style='margin-top: 10px;'></p>
<Card title='Card title'>
  <p>Card body</p>
</Card>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card } from 'nei-ui'
() => {
  return (
    <>
      <Card title="有悬浮特效" size="small">
        <p>请将鼠标移在卡片上查看效果</p>
      </Card>
      <Card title="无悬浮特效">
        <p>请将鼠标移在卡片上查看效果</p>
      </Card>
    </>
  )
}
```

</details>
</playground>

### 无边框卡片

<desc>通过 bordered 属性设置卡片组件 Card 是否有边框。</desc>
<desc>无边框 Card 适合在有背景色的地方使用。</desc>

<playground>
<wrapper>

<div style="background: #bbb; padding: 20px;">
<Card title='无边框卡片' bordered={false}>
  <p>no border Card body</p>
</Card>
</div>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Card } from 'nei-ui'
() => {
  return (
    <div style={{ background: '#bbb', padding: '20px' }}>
      <Card title="无边框卡片" bordered={false}>
        <p>no border Card body</p>
      </Card>
    </div>
  )
}
```

</details>
</playground>

### 接口

|   属性    |                描述                | 类型                | 默认值    |
| :-------: | :--------------------------------: | ------------------- | --------- |
|  titile   |             卡片的标题             | ReactNode / String / null  | -         |
| hoverable | 卡片被鼠标覆盖时，是否出现悬浮效果 | Boolean             | false     |
|   size    |          卡片 title 大小           | 'default' / 'small' | 'default' |
| bordered  |              卡片是否有边框              | Boolean             | true     |
| className |             自定义类名             | string              | -         |

</main>
