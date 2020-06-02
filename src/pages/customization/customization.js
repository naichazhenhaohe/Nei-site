import React, { useState, useMemo } from 'react'
import { LiveEditor, LiveProvider } from 'react-live'
import makeCodeTheme from '@com/theme/codeTheme'
import useTheme from '@com/theme/useTheme'
import { CustomizationContext } from './customizationContext'
import LayoutBox from './layoutBox'
import ColorBox from './colorBox';
import Preview from './preview';
import { Spacer } from 'nei-ui'

const isObject = (target: any) => target && typeof target === 'object'

const getDeepDifferents = (source, target) => {
  if (!isObject(target) || !isObject(source)) return target

  const sourceKeys = Object.keys(source)
  let result = {}
  for (const key of sourceKeys) {
    const sourceValue = source[key]
    const targetValue = target[key]

    if (isObject(sourceValue) && isObject(targetValue)) {
      const childrenDiff = getDeepDifferents(sourceValue, { ...targetValue })
      if (Object.keys(childrenDiff).length !== 0) {
        result[key] = childrenDiff
      }
    } else if (sourceValue !== targetValue) {
      result[key] = targetValue
    }
  }
  return result
}

export default function Customization () {
  const theme = useTheme()
  const codeTheme = makeCodeTheme(theme)
  const [defaultTheme, setDefaultTheme] = useState(theme)

  const code = useMemo(() => getDeepDifferents(theme, defaultTheme), [defaultTheme, theme])

  const userCodes = `const myTheme = ${JSON.stringify(code, null, 2)}`

  const updateColorTheme = (type, value) => {
    const copyTheme = JSON.parse(JSON.stringify(defaultTheme))
    copyTheme.color[type] = value
    setDefaultTheme(copyTheme)
  }

  const updateLayoutTheme = (type, value) => {
    const copyTheme = JSON.parse(JSON.stringify(defaultTheme))
    copyTheme.layout[type] = value
    console.log(copyTheme)
    setDefaultTheme(copyTheme)
  }

  const providerValue = {
    theme: defaultTheme,
    updateColorTheme,
    updateLayoutTheme
  }

  return <CustomizationContext.Provider value={providerValue}>
    <div className='wrapper'>
      <aside>
        <Preview />
      </aside>
      <main>
        <ColorBox />
        <LayoutBox />
      </main>
    </div>
    <div className='codeBox'>
      <div className='codes'>
        <LiveProvider code={userCodes} disabled theme={codeTheme}>
          <LiveEditor />
        </LiveProvider>
      </div>
    </div>
    <Spacer y={10} />
    <style jsx>{`
        .wrapper {
          min-height: calc(100vh - 108px);
          max-width: 782pt;
          box-sizing: border-box;
          margin: 0px auto;
          padding: 0px 16pt;
          display: flex;
        }
        .codeBox {
          max-width: 782pt;
          margin: 10vh auto;
        }
        aside {
          width: 34%;
          margin-right: 16pt;
          padding-right: 4pt;
          position: relative;
          height: 100%;
          border-right: 1px solid rgb(234, 234, 234);
          transition: width 200ms ease 0s;
          padding-top: 74px;
        }
        main{
          padding-top: calc(25px + 48px);
        }  
        .codes {
          width: 80%;
          position: relative;
          margin: 5vh auto 0;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(234, 234, 234);
          border-image: initial;
          border-radius: 5px;
          overflow: hidden;
          padding: calc(9.6pt) 16pt;
        }
      `}</style>
  </CustomizationContext.Provider>
}
