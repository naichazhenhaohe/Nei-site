import React, { useMemo } from 'react'
import { LiveEditor, LiveProvider } from 'react-live'
import makeCodeTheme from '@com/theme/codeTheme';
import useTheme from '@com/theme/useTheme'

export default function Customization () {
  const theme = useTheme()
  const codeTheme = makeCodeTheme(theme)

  const userCodes = 
  `const myTheme = {
    "layout": {
      "pageWidth": "753pt"
    }
  }`

  return <main>
    <LiveProvider code={userCodes} disabled theme={codeTheme}>
      <LiveEditor />
    </LiveProvider>
    <style jsx>{`
      main {
        padding-top: calc(25px + 48px);
      }  
    `}</style>
  </main>
}
