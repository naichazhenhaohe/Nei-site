<main>

# 安装

<desc>因为 Nei-UI 所有组件使用 React Hook 进行封装,</desc>
<desc>请确保 NodeJS 能在最新的版本，以及 React 版本大于 16.8</desc>

## 通过 yarn / npm 安装

<div>

```makeup
$ yarn add nei-ui
$ npm install nei-ui
```

</div>

<desc>使用如上两种方式中的一种进行下载即可</desc>
<desc>若网络不佳，使用 cnpm 也是很棒的选择</desc>

## 使用 babel-plugin-import 进行按需加载

<desc>虽然目前 Nei-UI 组件库内容不多，但是按需加载也能进一步降低项目大小。</desc>

<desc>首先下载 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 于项目中</desc>

<desc>其次，于 .babelrc 文件中或者 package.json 文件的 babel 属性中进行如下配置</desc>

<div>

```makeup
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "nei-ui",
        "libraryDirectory": "lib/components"
      }
    ]
  ]
}
```

</div>

## 使用组件

<desc>需要在使用前引入包到项目</desc>

<div>

```jsx
import { Button } from 'nei-ui'
ReactDOM.render(
  <>
    <Button>button</Button>
  </>
)
```

</div>

</main>
