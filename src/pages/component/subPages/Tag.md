<main>

# 标签 / Tag

提供标记或者分类用的小标签。

## 使用说明

<desc>可以用于标记目标事物的属性、分类等。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Tag>tag</Tag>
<Spacer />
<Tag>文学类</Tag>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tag, Spacer } from 'nei-ui'
() => {
  return (
    <>
      <Tag>tag</Tag>
      <Spacer />
      <Tag>文学类</Tag>
    </>
  )
}
```

</details>
</playground>

### 类型

<desc>标签组件 Tag 提供了七种类型。通过 type 属性设置。</desc>
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

<Tag type='default'>default</Tag>
<Spacer />
<Tag type='primary'>primary</Tag>
<Spacer />
<Tag type='success'>success</Tag>
<Spacer />
<Tag type='warning'>warning</Tag>
<Spacer />
<Tag type='error'>error</Tag>
<Spacer />
<Tag type='dark'>dark</Tag>
<Spacer />
<Tag type='lite'>lite</Tag>
<Spacer />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tag, Spacer } from 'nei-ui'
() => {
  return (
    <>
      <Tag type="default">default</Tag>
      <Spacer />
      <Tag type="primary">primary</Tag>
      <Spacer />
      <Tag type="success">success</Tag>
      <Spacer />
      <Tag type="warning">warning</Tag>
      <Spacer />
      <Tag type="error">error</Tag>
      <Spacer />
      <Tag type="dark">dark</Tag>
      <Spacer />
      <Tag type="lite">lite</Tag>
    </>
  )
}
```

</details>
</playground>

### 自定义颜色

<desc>通过 color 属性向标签组件 Tag 传入想要的背景色也是被支持的。</desc>
<desc>colors 属性优先级高于 type 属性</desc>

<playground>
<wrapper>

<Tag type='default' color='red'>red tag</Tag>
<Spacer />
<Tag type='primary' color='#bbb'>\#bbb tag</Tag>
<Spacer />
<Tag color='rgba(0,0,0,0.75)'>rgba(0,0,0,0.75) tag</Tag>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Tag, Spacer } from 'nei-ui'
() => {
  <>
    <Tag type="default" color="red">
      red tag
    </Tag>
    <Spacer />
    <Tag type="primary" color="#bbb">
      #bbb tag
    </Tag>
    <Spacer />
    <Tag color="rgba(0,0,0,0.75)">rgba(0,0,0,0.75) tag</Tag>
  </>
}
```

</details>
</playground>

### 接口

| 属性  |      描述      | 类型    | 默认值    |
| :---: | :------------: | ------- | --------- |
| type  |   标签的类型   | TagType | 'default' |
| color | 自定义标签颜色 | String  | -         |

### 类型说明

<desc>type TagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'dark' | 'lite' </desc>

</main>
