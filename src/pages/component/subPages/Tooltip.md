<main>

# 文字提示 / Tooltip

提供一个内容为文字的气泡框，进行对目标的提示。

## 使用说明

<desc>需要对内容进行额外的描述，在鼠标移入时显示、移出时隐藏。</desc>
<desc>功能与原生 title 属性类似。</desc>

## 代码演示

### 基础使用

<desc>当鼠标覆盖到指定内容时，会有悬浮框出现进行相应的说明内容展示。</desc>

<playground>
<wrapper>

<Tooltip text='this is a tooltip'>
  tooltip
</Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return <Tooltip text="this is a tooltip">tooltip</Tooltip>
}
```

</details>
</playground>

### 类型

<desc>文字提示组件 Tooltip 提供了七种类型。通过 type 属性设置。</desc>
<desc>type 属性值类型为 string ，可有如下属性值</desc>

<ul>
  <li>default</li>
  <li>primary</li>
  <li>success</li>
  <li>warning</li>
  <li>error</li>
  <li>dark</li>
  <li>lite</li>
</ul>

<playground>
<wrapper>

<Tooltip type='default' text="this is a default tooltip">default tooltip</Tooltip>
<Tooltip type='primary' text="this is a primary tooltip">primary tooltip</Tooltip>
<Tooltip type='success' text="this is a success tooltip">success tooltip</Tooltip>
<Tooltip type='warning' text="this is a warning tooltip">warning tooltip</Tooltip>
<Tooltip type='error' text="this is a error tooltip">error tooltip</Tooltip>
<Tooltip type='dark' text="this is a dark tooltip">dark tooltip</Tooltip>
<Tooltip type='lite' text="this is a lite tooltip">lite tooltip</Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return (
    <>
      <Tooltip type="default" text="this is a default tooltip">
        default tooltip
      </Tooltip>
      <Tooltip type="primary" text="this is a primary tooltip">
        primary tooltip
      </Tooltip>
      <Tooltip type="success" text="this is a success tooltip">
        success tooltip
      </Tooltip>
      <Tooltip type="warning" text="this is a warning tooltip">
        warning tooltip
      </Tooltip>
      <Tooltip type="error" text="this is a error tooltip">
        error tooltip
      </Tooltip>
      <Tooltip type="dark" text="this is a dark tooltip">
        dark tooltip
      </Tooltip>
      <Tooltip type="lite" text="this is a lite tooltip">
        lite tooltip
      </Tooltip>
    </>
  )
}
```

</details>
</playground>

### 提示框位置

<desc>文字提示组件 Tooltip 提供 12 种方向选择。</desc>
<desc>设置 placement 属性进行设置，默认值为 top。</desc>

<playground>
<wrapper>

<Tooltip type='primary' placement='top' text='top tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>top</div></Tooltip>
<Tooltip type='primary' placement='topLeft' text='topLeft tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>topLeft</div></Tooltip>
<Tooltip type='primary' placement='topRight' text='topRight tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>topRight</div></Tooltip>
<Tooltip type='primary' placement='right' text='right tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>right</div></Tooltip>
<Tooltip type='primary' placement='rightTop' text='rightTop tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>rightTop</div></Tooltip>
<Tooltip type='primary' placement='rightBottom' text='rightBottom tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>rightBottom</div></Tooltip>
<Tooltip type='primary' placement='bottom' text='bottom tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>bottom</div></Tooltip>
<Tooltip type='primary' placement='bottomLeft' text='bottomLeft tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>bottomLeft</div></Tooltip>
<Tooltip type='primary' placement='bottomRight' text='bottomRight tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>bottomRight</div></Tooltip>
<Tooltip type='primary' placement='left' text='left tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>left</div></Tooltip>
<Tooltip type='primary' placement='leftTop' text='leftTop tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>leftTop</div></Tooltip>
<Tooltip type='primary' placement='leftBottom' text='leftBottom tooltip'><div style='padding: 6pt 12pt; border: 1px solid #bbb;margin: 10px;'>leftBottom</div></Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return <Tooltip text="this is a tooltip">tooltip</Tooltip>
}
```

</details>
</playground>

### 间距

<desc>文字提示组件 Tooltip 与被提示内容之间的距离也是可以被设置的。</desc>
<desc>设置 offset 属性调整提示框与被提示内容之间距离，offset 属性默认值为 12 。</desc>

<playground>
<wrapper>

<Tooltip text="offset 12" placement="left" type="error">offert 12</Tooltip>
<Tooltip text="offset 24" placement="left" offset={24} type="error">offert 24</Tooltip>
<Tooltip text="offset 36" placement="left" offset={36} type="error">offert 36</Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return (
    <>
      <Tooltip text="offset 12" placement="left" type="error">
        offert 12
      </Tooltip>
      <Tooltip text="offset 24" placement="left" offset={24} type="error">
        offert 24
      </Tooltip>
      <Tooltip text="offset 36" placement="left" offset={36} type="error">
        offert 36
      </Tooltip>
    </>
  )
}
```

</details>
</playground>

### 延迟时间

<desc>文字提示组件 Tooltip 的出现与消失前的延迟时间可以被设定。</desc>
<desc>设置 leaveDelay & enterDelay 属性进行设定延迟，单位皆为毫秒</desc>
<desc>leaveDelay 默认为 0，enterDelay 默认为 100 。</desc>

<playground>
<wrapper>

<Tooltip text="移入鼠标 0.5s 后出现" type="error" enterDelay={500}>
  enterDelay 500
</Tooltip>
<Tooltip text="鼠标移出 0.5s 后消失" type="error" leaveDelay={500}>
  leaveDelay 500
</Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return (
    <>
      <Tooltip text="0.5s后出现" type="error" enterDelay={500}>
        enterDelay 500
      </Tooltip>
      <Tooltip text="0.5s后消失" type="error" leaveDelay={500}>
        leaveDelay 500
      </Tooltip>
    </>
  )
}
```

</details>
</playground>

### 无箭头

<desc>通过 hideArrow 属性设置文字提示框是否有箭头</desc>

<playground>
<wrapper>

<Tooltip text="有箭头" placement='right' type="primary">
  有箭头
</Tooltip>
<Tooltip hideArrow placement='right' text="无箭头" type="primary">
  无箭头
</Tooltip>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tooltip } from 'nei-ui'
() => {
  return (
    <>
      <Tooltip text="0.5s后出现" type="error" enterDelay={500}>
        enterDelay 500
      </Tooltip>
      <Tooltip text="0.5s后消失" type="error" leaveDelay={500}>
        leaveDelay 500
      </Tooltip>
    </>
  )
}
```

</details>
</playground>

### 接口

|    属性    |             描述              | 类型             | 默认值    |
| :--------: | :---------------------------: | ---------------- | --------- |
|    type    |       文字提示框的类型        | TooltipType      | 'default' |
| placement  |     文字提示框出现的位置      | TooltipPlacement | 'default' |
|   offset   |  文字提示框与被提示内容间距   | Number           | 12        |
| leaveDelay | 文字提示框隐藏时延迟,单位毫秒 | Number           | 0         |
| enterDelay | 文字提示框出现时延迟,单位毫秒 | Number           | 100       |
| hideArrow  |    是否隐藏文字提示框箭头     | Boolean          | false     |
| className  |          自定义类名           | string           | -         |

### 类型说明

<desc>type TooltipType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'dark' | 'lite' </desc>
<desc><pre style='font-family: inherit;'>
type TooltipPlacement = 'top'
| 'topLeft'
| 'topRight'
| 'right'
| 'rightTop'
| 'rightBottom'
| 'bottom'
| 'bottomRight'
| 'bottomLeft'
| 'left'
| 'leftTop'
| 'leftBottom'

</pre></desc>

</main>
