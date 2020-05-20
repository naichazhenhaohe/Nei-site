import React from 'react'

const Details = ({ children, ...props }) => {
  return (
    <details {...props}>
      {children}
      <style jsx>{`
        details {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          transition: all 0.2s ease 0s;
          overflow: hidden;
          background-color: #fafafa;
          border: none;
        }
      `}</style>
    </details>
  )
}

export default Details
