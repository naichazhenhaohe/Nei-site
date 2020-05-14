<main>

# 进度条 / Progress

提供一个条形体，用于展示目标进度。

## 使用说明

<desc>在需要展示某个会持续相对较长事件的操作、事件的进度时使用。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Progress value={25} max="50" />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Progress } from 'nei-ui'
() => {
  return <Progress value={25} max="50" />
}
```

</details>
</playground>

### 类型

<desc>进度条组件 Progress 自设了四种类型。</desc>
<desc>通过 type 属性设置 Progress 的类型，默认为 'default'，有如下可选项：</desc>

<ul>
  <li>default</li>
  <li>primary</li>
  <li>success</li>
  <li>warning</li>
</ul>

<playground>
<wrapper>

<Progress value={20} />
<Spacer x={1}>
<Progress type="success" value={60} />
<Spacer x={1}>
<Progress type="warning" value={80} />
<Spacer x={1}>
<Progress type="error" value={100} />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Progress } from 'nei-ui'
() => {
  return (
    <>
      <Progress value={20} />
      <Progress type="success" value={60} />
      <Progress type="warning" value={80} />
      <Progress type="error" value={100} />
    </>
  )
}
```

</details>
</playground>

### 值

<desc>进度条组件 Progress 当前进度由属性 value 控制，最大额度由属性 max 控制。</desc>
<desc>value 属性与 max 属性值类型皆为 Number 。</desc>
<desc>value 属性默认为 0；max 属性默认值为 100 。</desc>

<playground>
<wrapper>

<Progress value={20} max={40}/>
<Spacer x={1}>
<Progress value={20} max={60}/>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Progress } from 'nei-ui'
() => {
  <>
    <Progress value={20} max={40} />
    <Progress value={20} max={60} />
  </>
}
```

</details>
</playground>

### 自定义颜色

<desc>进度条组件 Progress 除了可选择自设的 4 各类型外，还可以选择自定义颜色。</desc>
<desc>可通过 colors 属性设置自定义颜色。</desc>
<desc>colors 属性优先级高于 type 属性</desc>

<playground>
<wrapper>

<Progress value={20} max={40} type='success' colors='red'/>
<Spacer x={1}>
<Progress value={20} max={40} colors='grey'/>
<Spacer x={1}>
<Progress value={20} max={40} colors='#bbb'/>
<Spacer x={1}>
<Progress value={20} max={40} colors='rgba(0,0,0,0.7)'/>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Progress } from 'nei-ui'
() => {
  <>
    <Progress value={20} max={40} type="success" colors="red" />
    <Progress value={20} max={40} colors="grey" />
    <Progress value={20} max={40} colors="#bbb" />
    <Progress value={20} max={40} colors="rgba(0,0,0,0.5)" />
  </>
}
```

</details>
</playground>

### 接口

|   属性    |     描述     | 类型         | 默认值    |
| :-------: | :----------: | ------------ | --------- |
|   type    | 进度条的类型 | ProgressType | 'default' |
|   value   | 进度条当前值 | Number       | 0         |
|    max    | 进度条最大值 | Number       | 100       |
|  colors   |  自定义颜色  | String       | -         |
| className |  自定义类名  | string       | -         |

### 类型说明

<desc>type ProgressType = 'default' | 'primary' | 'success' | 'warning'</desc>

</main>
