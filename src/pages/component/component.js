import React, { useEffect } from 'react'
import Sidebar from '@com/sidebar'
import Markdown from '@com/markdown'
import Prism from 'prismjs'

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
      <Markdown content={MAIN} />
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
