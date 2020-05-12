import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div>{children}</div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 16pt;
        }
      `}</style>
    </div>
  )
}
