import React, { useState } from 'react'
import { useCustomization } from './customizationContext'

export default function LayoutBox () {
  const { theme, updateColorTheme } = useCustomization()
  const [primary, setPrimary] = useState(theme.color.primary)
  const [success, setSuccess] = useState(theme.color.success)
  const [danger, setDanger] = useState(theme.color.danger)
  const [warning, setWarning] = useState(theme.color.warning)
  const [disabledColor, setDisabledColor] = useState(theme.color.disabledColor)
  const [disabledBackground, setDisabledBackground] = useState(theme.color.disabledBackground)
  const handleChange = (e, type) => {
    if (type === 'primary') {
      setPrimary(e.target.value)
    } else if (type === 'success') {
      setSuccess(e.target.value)
    } else if (type === 'danger') {
      setDanger(e.target.value)
    } else if (type === 'warning') {
      setWarning(e.target.value)
    } else if (type === 'disabledColor') {
      setDisabledColor(e.target.value)
    } else if (type === 'disabledBackground') {
      setDisabledBackground(e.target.value)
    }

    updateColorTheme(type, e.target.value)
  }
  return (
    <section>
      <h1>自定义主题</h1>
      <div className='desc'>
        组件库的自带主题分为 color 与 layout 两部分构成
      </div>
      <div className='desc'>
        在使用 Nei-UI 时进行主题自定义也十分方便
      </div>
      <div className='desc'>
        在下方进行编辑后，复制本页面末端代码，并用于 Provider 组件即完成主题自定义。
      </div>
      <h2>
        COLOR
      </h2>
      <div className='color-box'>
        <span className='label'>primary</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper primary'>
              <input type="text" value={primary} onChange={e => handleChange(e, 'primary')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='label'>success</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper success'>
              <input type="text" value={success} onChange={e => handleChange(e, 'success')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='label'>danger</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper danger'>
              <input type="text" value={danger} onChange={e => handleChange(e, 'danger')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='label'>warning</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper warning'>
              <input type="text" value={warning} onChange={e => handleChange(e, 'warning')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>disabled color</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledColor'>
              <input type="text" value={disabledColor} onChange={e => handleChange(e, 'disabledColor')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>disabled background</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={disabledBackground} onChange={e => handleChange(e, 'disabledBackground')} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 3vh;
          font-size: 2rem;
        }
        h2 {
          font-size: 1.3rem;
          margin: 3vh 0;
        }  
        .desc {
          margin: 10px 0;
          line-height: 1.5;
        } 
        .color-box {
          margin-bottom: 10px;
        }
        .box {
          display: inline-flex;
          align-items: center;
          height: calc(${theme.layout.gap} * 1.5);
          background-color: ${theme.color.background};
        }
        .color-wrapper {
          display: inline-flex;
          vertical-align: middle;
          align-items: center;
          height: 100%;
          flex: 1;
          user-select: none;
          transition: ${theme.layout.transitionAll};
        }
        .wrapper {
          border-radius: ${theme.layout.radius};
          border: 1px solid ${theme.color.border};
        }
        .label,.largeLabel {
          color: ${theme.color.text};
          display: inline-block;
          padding: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
          width: 100px;
        }
        .largeLabel {
          width: 200px;
        }
        .primary {
          border: 1px solid ${theme.color.primary};
        }
        .success {
          border: 1px solid ${theme.color.success};
        }
        .danger {
          border: 1px solid ${theme.color.danger};
        }
        .warning {
          border: 1px solid ${theme.color.warning};
        }
        input {
          padding: ${`${theme.layout.quarterGap} ${theme.layout.halfGap}`};
          box-shadow: none;
          font-size: ${theme.layout.fontSize};
          background-color: transparent;
          border: none;
          color: ${theme.color.text};
          outline: none;
          border-radius: 0;
          width: 100%;
          }
      `}</style>
    </section>
  )
}