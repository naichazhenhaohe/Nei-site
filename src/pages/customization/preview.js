import React from 'react'
import { useCustomization } from './customizationContext'

export default () => {
  const { theme } = useCustomization()
  return (
    <>
      <h2>
        预览
      </h2>
      <h3>
        COLOR
      </h3>
      <h4> 状态颜色 </h4>
      <div className='colorBox'>
        <div className='colorItem primary'>primary</div>
        <div className='colorItem success'>success</div>
        <div className='colorItem danger'>danger</div>
        <div className='colorItem warning'>warning</div>
      </div>
      <h4> 禁用态颜色 </h4>
      <div className='colorBox'>
        <div className='colorItem disabledBackground'>disabled</div>
      </div>
      <h4> 边框及字体颜色 </h4>
      <div className='colorBox'>
        <div className='colorItem headerFont'>header</div>
        <div className='colorItem textFont'>text</div>
        <div className='colorItem placeholderFont'>placeholder</div>
        <div className='colorItem selectedValueFont'>selectedValue</div>
      </div>
      <h3>
        LAYOUT
      </h3>
      <h4> 字体大小 </h4>
      <div className='layoutBox'>
        <div className='layoutItem smallFont'> 小号字体大小 </div>
        <div className='layoutItem defaultFount'> 默认字体大小 </div>
        <div className='layoutItem largeFont'> 大号字体大小 </div>
      </div>
      <div className='desc'>
        间距大小、边框圆角大小在上面内容上体现。
      </div>
      <style jsx>{`
        h2 {
          margin: 3vh 0px;
          font-size: 1.7rem;
        }
        h3 {
          font-size: 1.3rem;
          margin: 3vh 0;
        }
        h4 {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 3vh 0;
        } 
        .colorBox {
          user-select: none;
          display: flex;
          justify-content: space-between;
          text-align: center;
          flex-wrap: wrap;
        }
        .layoutBox {
          user-select: none;
        }
        .layoutItem {
          margin-right: ${theme.layout.halfGap};
          margin-bottom: ${theme.layout.halfGap};
        }
        .colorItem {
          color: #fff;
          width: 9rem;
          margin-right: ${theme.layout.halfGap};
          margin-bottom: ${theme.layout.halfGap};
          padding: ${theme.layout.gap};
          border-radius: ${theme.layout.radius};
        }
        .primary {
          background-color: ${theme.color.primary}
        }
        .success {
          background-color: ${theme.color.success};
        }
        .danger {
          background-color: ${theme.color.danger};
        }
        .warning {
          background-color: ${theme.color.warning};
        }
        .disabledBackground {
          background-color: ${theme.color.disabledBackground};
          color: ${theme.color.disabledColor};
        }
        .headerFont {
          color: ${theme.color.header};
          border: ${`1px solid ${theme.color.border}`};
        }
        .textFont {
          color: ${theme.color.text};
          border: ${`1px solid ${theme.color.border}`};
        }
        .placeholderFont {
          color: ${theme.color.placeholder};
          border: ${`1px solid ${theme.color.border}`};
        }
        .selectedValueFont {
          color: ${theme.color.selectedValue};
          border: ${`1px solid ${theme.color.border}`};
        }
        .smallFont {
          color: ${theme.color.text};
          font-size: ${theme.layout.fontSizeSmall};
        }
        .defaultFount {
          color: ${theme.color.text};
          font-size: ${theme.layout.fontSize};
        }
        .largeFont {
          color: ${theme.color.text};
          font-size: ${theme.layout.fontSizeLarge};
        }
      `}</style>
    </>
  )
}