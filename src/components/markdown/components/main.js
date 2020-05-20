import React from 'react'

export default function Main({ children }) {
  return (
    <main>
      {children}
      <style jsx>{`
        main {
          display: flex;
          max-width: calc(100% - 220px);
          flex-direction: column;
          padding-left: 20px;
          padding-top: calc(25px + 48px);
          padding-bottom: 150px;
          flex: 0 0 100%;
        }
      `}</style>
    </main>
  )
}
