import React, { useEffect } from 'react'
import Sidebar from '@com/sidebar'
import Prism from 'prismjs'
import Markdown from '@com/markdown'

export default function Home(props) {

  const options = [
    {
      zh: '快速了解',
      children: [
        { zh: '什么是 Nei-UI', en: 'introduction' },
        { zh: '安装', en: 'installation' },
        { zh: '自定义主题', en: 'customization' }
      ]
    }
  ]

  const { name } = props.match.params
  const MAIN = require(`./subPages/${name}.md`).default || ''

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  })
  
  return (
    <div className="wrapper">
      <Sidebar destination="/guide" options={options} />
      <div className="hiddenSidebar" />
      <Markdown content={MAIN}/>
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
