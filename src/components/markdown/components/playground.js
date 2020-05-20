import React from 'react'

export default function Playground({ children }) {
  return (
    <div className="playground">
      {children}
      <style jsx>{`
        .playground {
          width: 100%;
          border-radius: 5px;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(234, 234, 234);
          border-image: initial;
          margin-top: 15px;
        }
      `}</style>
    </div>
  )
}
