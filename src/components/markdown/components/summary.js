import React from 'react'

export default function Summary({ children, ...props }) {
  return (
    <summary {...props}>
      {children}
      <style jsx>{`
        summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgb(102, 102, 102);
          height: 2.875rem;
          user-select: none;
          padding: 0px 16pt;
          border-top: 1px solid rgb(234, 234, 234);
          list-style: none;
          outline: none;
          cursor: pointer;
        }
        summary:focus,
        summary:hover,
        summary:active {
          outline: none;
          list-style: none;
        }
        summary::-webkit-details-marker,
        summary::before {
          display: none;
        }
      `}</style>
    </summary>
  )
}
