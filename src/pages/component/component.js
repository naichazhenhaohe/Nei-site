import React, { useEffect } from 'react'
import Sidebar from '@com/sidebar'
import {
  Button,
  Spacer,
  Isolator,
  Input,
  Checkbox,
  Radio,
  Select,
  Cascader,
  Card,
  Progress,
  Tag,
  Switch,
  Tooltip
} from 'nei-ui'
import Markdown from 'markdown-to-jsx'
import Prism from 'prismjs'
import {
  Main,
  H,
  T,
  Playground,
  Wrapper,
  Summary,
  Details,
  Description,
  Ul,
  InputDemo,
  CheckboxDemo,
  CheckboxGroupDemo,
  RadioGroupDemo,
  SelectGroupDemo,
  BasicCascader,
  SizeCascader,
  SeparatorCascader,
  DisabledCascader,
  CardDemo
} from '@com/md'

const options = [
  {
    en: 'LAYOUT',
    zh: '布局',
    children: [
      { zh: '间距', en: 'Spacer' },
      { zh: '隔离器', en: 'Isolator' }
    ]
  },
  {
    en: 'INPUT',
    zh: '输入',
    children: [
      { zh: '按钮', en: 'Button' },
      { zh: '输入框', en: 'Input' },
      { zh: '复选框', en: 'Checkbox' },
      { zh: '单选框', en: 'Radio' },
      { zh: '选择器', en: 'Select' },
      { zh: '级联选择器', en: 'Cascader' },
      { zh: '开关', en: 'Switch' }
    ]
  },
  {
    en: 'DISPLAY',
    zh: '展示',
    children: [
      { zh: '卡片', en: 'Card' },
      { zh: '进度条', en: 'Progress' },
      { zh: '标签', en: 'Tag' },
      { zh: '文字提示', en: 'Tooltip' }
    ]
  }
]

const mdOptions = {
  forceBlock: true,
  overrides: {
    main: Main,
    h1: H.H1,
    h2: H.H2,
    h3: H.H3,
    Switch: {
      component: Switch
    },
    Tooltip: {
      component: Tooltip
    },
    Tag: {
      component: Tag
    },
    Progress: {
      component: Progress
    },
    Card: {
      component: Card
    },
    CardDemo: {
      component: CardDemo
    },
    Button: {
      component: Button
    },
    Spacer: {
      component: Spacer
    },
    Isolator: {
      component: Isolator
    },
    Input: {
      component: Input
    },
    InputDemo: {
      component: InputDemo
    },
    Checkbox: {
      component: Checkbox
    },
    Radio: {
      component: Radio
    },
    CheckboxDemo: {
      component: CheckboxDemo
    },
    Option: {
      component: Select.Option
    },
    Select: {
      component: Select
    },
    CheckboxGroupDemo: {
      component: CheckboxGroupDemo
    },
    RadioGroupDemo: {
      component: RadioGroupDemo
    },
    SelectGroupDemo: {
      component: SelectGroupDemo
    },
    Cascader: {
      component: Cascader
    },
    BasicCascader: {
      component: BasicCascader
    },
    SizeCascader: {
      component: SizeCascader
    },
    SeparatorCascader: {
      component: SeparatorCascader
    },
    DisabledCascader: {
      component: DisabledCascader
    },
    playground: Playground,
    wrapper: Wrapper,
    summary: Summary,
    details: Details,
    desc: Description,
    ul: Ul,
    td: T.Td,
    tr: T.Tr,
    th: T.Th,
    table: T.Table,
    thead: T.Thead
  }
}

export default function Component(props) {
  const { name } = props.match.params
  const MAIN = require(`./subPages/${name}.md`).default || ''

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  })
  return (
    <div className="wrapper">
      <Sidebar showDescription destination="/component" options={options} />
      <div className="hiddenSidebar" />
      <Markdown children={MAIN} options={mdOptions} />
      <style jsx>{`
        .wrapper {
          min-height: calc(100vh - 108px);
          max-width: 782pt;
          display: flex;
          box-sizing: border-box;
          margin: 0px auto;
          padding: 0px 16pt;
        }
        .hiddenSidebar {
          width: 220px;
          flex-shrink: 0;
          height: 100vh;
        }
      `}</style>
    </div>
  )
}
