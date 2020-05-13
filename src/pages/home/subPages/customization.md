<main>

# 自定义样式

## Nei-UI 自带样式

<desc>Nei-UI 相信 less is more。</desc>
<desc>努力使组件以简单的形式展现。同时，能给开发人员提供更多的进行自定义的空间。</desc>
<desc>Nei-UI 的所有组件都使用具有 'nei-' 前缀的 class，最大程度的避免与开发人员在项目中使用的类名冲突。</desc>
<desc>且所有的组件都提供了 className 属性，接受开发人员传入的类名，由此开发人员自行编写 CSS 代码进行样式修改也非常容易。</desc>

## Nei-UI 的主色

<div style='margin-top: 15px;'>

<ColorBox color='#fff' name='background' bordercolor/>
<ColorBox color='#000' name='foreground' fontColor='rgba(255,255,255,0.8)'/>
<ColorBox color='#4bf' name='primary'/>
<ColorBox color='#5c1' name='success'/>
<ColorBox color='#f11' name='danger'/>
<ColorBox color='#fa2' name='warning'/>

</div>

## 自定义主题

<desc>Nei-UI 提供了 Provider 组件支持开发人员进行对组件库的样式、颜色进行自定义。</desc>

<desc>请在<Link to='/customization'>这里</Link>进行选择所需要的样式。</desc>

<desc>并把选择好的样式如下作为 customTheme 传入 Provider。</desc>

```jsx
import { Provider } from 'nei-ui

const customTheme = {
  color: {
    danger: 'red'
  }
}

ReactDOM.render(
  <>
    <Provider theme={customTheme}>
      <YourApp>
    </Provider>
  </>
)
```

</main>
