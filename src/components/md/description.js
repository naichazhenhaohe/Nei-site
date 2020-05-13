import React from 'react'

const Description = ({ children, ...props }) => {
  return (
    <div className="description" {...props}>
      {children}
      <style jsx>{`
        .description {
          margin-top: 10px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}

export default Description
