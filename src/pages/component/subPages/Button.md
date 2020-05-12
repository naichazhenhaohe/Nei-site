<main>

# 按钮 / Button

按钮用于立即触发一个操作。

## 使用说明

<desc>按钮封装了一个或者多个操作，并在用户点击时进行相应，实现相应的业务逻辑。</desc>

<ul>
  <li>主按钮。进行主要的功能的相应，最好一片区域内只存在一个主按钮。</li>
  <li>常规按钮。常规的按钮，为默认按钮。</li>
  <li>危险按钮。点击后触发的功能较为危险或不可逆时使用。</li>
  <li>幽灵按钮。幽灵按钮会继承所在地的背景色，适合在按钮所在位置具有背景色时使用。</li>
  <li>链接按钮。用于连接，相应跳转功能。</li>
</ul>

## 代码演示

### 类型

<desc>有三种类型按钮。type 属性值默认为 default 。</desc>
<desc>type 属性值类型为 string ，可有如下属性值</desc>

<ul>
  <li>default</li>
  <li>primary</li>
  <li>success</li>
  <li>warning</li>
  <li>link</li>
</ul>

<playground>
<wrapper>
<div style='marginBottom: 10px;'><Button type='default'>default button</Button></div>
<div style='marginBottom: 10px;'><Button type='primary'>primary button</Button></div>
<div style='marginBottom: 10px;'><Button type='success'>success button</Button></div>
<div style='marginBottom: 10px;'><Button type='warning'>warning button</Button></div>
<div><Button type='link'>link button</Button></div>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button type="default">default button</Button>
    <Button type="primary">primary button</Button>
    <Button type="success">success button</Button>
    <Button type="warning">warning button</Button>
    <Button type="link">link button</Button>
  </>
)
```

</details>
</playground>

### 尺寸

<desc>按钮自设三种尺寸，通过按钮属性 size 设置。</desc>
<desc>size 属性值类型为 string ，默认为 'default' , 可为如下</desc>

<ul>
  <li>small</li>
  <li>default</li>
  <li>large</li>
</ul>

<playground>
<wrapper>

<div style='marginBottom: 10px;'><Button size='small'>small button</Button></div>
<div style='marginBottom: 10px;'><Button size='default'>default button</Button></div>
<div style='marginBottom: 10px;'><Button size='large'>large button</Button></div>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button size="small">small button</Button>
    <Button size="default">default button</Button>
    <Button size="large">large button</Button>
  </>
)
```

</details>
</playground>

### 危险按钮

<desc>危险类型按钮，通过按钮属性 danger 设置。</desc>
<desc>danger 属性值类型为 boolean</desc>
<desc>danger 属性与值不为 'link' 的 type 属性同时存在时，danger 属性优先级更高。</desc>
<playground>
<wrapper>

<div style='marginBottom: 10px;'><Button danger>danger button</Button></div>
<div style='marginBottom: 10px;'><Button danger type='primary'>danger primary button</Button></div>
<div style='marginBottom: 10px;'><Button danger type='success'>danger success button</Button></div>
<div><Button danger type='link'>danger link</Button></div>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button danger>danger button</Button>
    <Button danger type="success">
      danger success button
    </Button>
    <Button danger type="link">
      link button
    </Button>
  </>
)
```

</details>
</playground>

### 禁用按钮

<desc>禁用类型按钮，通过按钮属性 disabled 设置。</desc>
<desc>disabled 属性值类型为 boolean</desc>
<desc>disabled 属性优先级高于 danger 属性和值为 'primary' 或 'default' 的 type 属性。</desc>
<playground>
<wrapper>

<div style='marginBottom: 10px;'><Button disabled>disabled button</Button></div>
<div style='marginBottom: 10px;'><Button disabled danger type='primary'>disabled primary button</Button></div>
<div><Button disabled type='link'>disabled link</Button></div>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button danger>danger button</Button>
    <Button danger type="primary">
      primary button
    </Button>
    <Button danger type="link">
      link button
    </Button>
  </>
)
```

</details>
</playground>

### 幽灵按钮

<desc>幽灵类型按钮，通过按钮属性 ghost 设置。</desc>
<desc>ghost 属性值类型为 boolean</desc>
<desc>ghost 属性对于 type 属性为 'link' 的按钮以及危险按钮无效</desc>
<playground>
<wrapper>

<div style='background: #fce; padding: 20px;'>
<div style='marginBottom: 10px;'><Button ghost>ghost button</Button></div>
<div style='marginBottom: 10px;'><Button ghost type='primary'>ghost primary button</Button></div>
<div style='marginBottom: 10px;'><Button ghost type='success'>ghost success button</Button></div>
<div style='marginBottom: 10px;'><Button ghost type='warning'>ghost warning button</Button></div>
<div style='marginBottom: 10px;'><Button ghost danger type='primary'>ghost danger button</Button></div>
<div><Button type='link'>ghost link button</Button></div>
</div>
</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button ghost>ghost button</Button>
    <Button ghost type="primary">
      ghost primary button
    </Button>
    <Button ghost type="success">
      ghost success button
    </Button>
    <Button ghost type="warning">
      ghost warning button
    </Button>
    <Button ghost danger type="primary">
      ghost danger button
    </Button>
    <Button type="link">ghost link button</Button>
  </>
)
```

</details>
</playground>

|   属性   |    描述    | 类型       | 默认值      |
| :------: | :--------: | ---------- | ----------- |
|   type   | 按钮的类型 | ButtonType | 'default'   |
|   size   | 按钮的大小 | ButtonSize | 'default'   |
|  danger  |  危险按钮  | Boolean    | false       |
| disabled |  禁用按钮  | Boolean    | false       |
| onClick  |  点击事件  | Function   | (event)=>{} |

### 类型说明

<desc>type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'link'</desc>
<desc>type ButtonSize = 'small' | 'default' | 'large'</desc>

</main>
