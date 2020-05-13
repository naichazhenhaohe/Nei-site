<main>

# 隔离器 / Isolator

用于在目标之间提供标准的间隔。

## 使用说明

<desc>把预期添加间隔的内容作为本组件的子代。会将本组件包含的内容依据用户指定的大小进行垂直向或水平向的分隔。</desc>
<desc>与间距组件 Spacer 的区别在于，间距组件在需要进行间隔的内容间引用。</desc>
<desc>而使用隔离器组件 Isolator 组件则要把进行隔离的内容作为子代传入 Isolator。</desc>

## 代码演示

### 基础使用

<desc>将隔离器组件 Isolator 将需要进行隔离的内容包含。</desc>
<desc>默认将需要隔离的内容垂直向添加 8px 的间距。</desc>

<playground>
<wrapper>

<Isolator>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Isolator } from 'nei-ui'
() => {
  return (
    <Isolator>
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
    </Isolator>
  )
}
```

</details>
</playground>

### 水平间距

<desc>进行水平向添加间距，需要使用 direction 属性</desc>
<desc> direction 属性默认值为 vertical 。设置为 horizontal 时水平隔离。</desc>

<playground>
<wrapper>

<Isolator direction='horizontal'>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Isolator } from 'nei-ui'
() => {
  return (
    <Isolator direction="horizontal">
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
    </Isolator>
  )
}
```

</details>
</playground>

### 设置间距大小

<desc>进行间距大小，需要使用 size 属性</desc>
<desc>size 属性值类型为 string。默认值为 8。</desc>

<playground>
<wrapper>

<Isolator size='16'>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
  <div style="width: 50px; height: 50px; background: #bbb;"></div>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Isolator } from 'nei-ui'
() => {
  return (
    <Isolator size="16">
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
      <div style={{ width: '50px', height: '50px', background: '#bbb' }}></div>
    </Isolator>
  )
}
```

</details>
</playground>

|   属性    |    描述    | 类型          | 默认值     |
| :-------: | :--------: | ------------- | ---------- |
| direction |  间距方向  | DirectionType | 'vertical' |
|   size    |  间距大小  | String        | 8          |
| className | 自定义类名 | string        | -          |

### 类型说明

<desc>type DirectionType = 'vertical' | 'horizontal'</desc>

</main>
