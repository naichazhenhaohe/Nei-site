import React, { useState } from 'react'
import { useCustomization } from './customizationContext'

export default function LayoutBox () {
  const { theme, updateLayoutTheme } = useCustomization()
  const [fontsizeSmall, setFontsizeSmall] = useState(theme.layout.fontSizeSmall)
  const [fontsize, setFontsize] = useState(theme.layout.fontSize)
  const [fontSizeLarge, setFontSizeLarge] = useState(theme.layout.fontSizeLarge)
  const [radius, setRadius] = useState(theme.layout.radius)
  const [gap, setGap] = useState(theme.layout.gap)
  const [halfGap, setHalfGap] = useState(theme.layout.halfGap)
  const [quarterGap, setQuarterGap] = useState(theme.layout.quarterGap)

  const handleChange = (e, type) => {
    if (type === 'fontSizeSmall') {
      setFontsizeSmall(e.target.value)
    } else if (type === 'fontSize') {
      setFontsize(e.target.value)
    } else if (type === 'fontSizeLarge') {
      setFontSizeLarge(e.target.value)
    } else if (type === 'radius') {
      setRadius(e.target.value)
    } else if (type === 'gap') {
      setGap(e.target.value)
    } else if (type === 'halfGap') {
      setHalfGap(e.target.value)
    } else if (type === 'quarterGap') {
      setQuarterGap(e.target.value)
    }
    updateLayoutTheme(type, e.target.value)
  }
  return (
    <section>
      <h2>
        LAYOUT
      </h2>
      <div className='color-box'>
        <span className='largeLabel'>small font size</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={fontsizeSmall} onChange={e => handleChange(e, 'fontSizeSmall')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>default font size</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={fontsize} onChange={e => handleChange(e, 'fontSize')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>large font size</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={fontSizeLarge} onChange={e => handleChange(e, 'fontSizeLarge')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>border radius</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={radius} onChange={e => handleChange(e, 'radius')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>gap</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={gap} onChange={e => handleChange(e, 'gap')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>half gap</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={halfGap} onChange={e => handleChange(e, 'halfGap')} />
            </div>
          </div>
        </div>
      </div>
      <div className='color-box'>
        <span className='largeLabel'>quarter gap</span>
        <div className='color-wrapper'>
          <div className='box'>
            <div className='wrapper disabledBackground'>
              <input type="text" value={quarterGap} onChange={e => handleChange(e, 'quarterGap')} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.3rem;
          margin: 3vh 0;
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