import React from 'react'

const Description = ({ children, ...props }) => {
  return (
    <div className="description" {...props}>
      {children}
      <style jsx>{`
        .description {
          padding: 10px 0;
        }
      `}</style>
    </div>
  )
}

export default Description
