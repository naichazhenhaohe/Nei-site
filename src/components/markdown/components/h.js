import React from 'react'

const H1 = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
      <style jsx>{`
        h1 {
          margin-bottom: 3vh;
          font-size: 2rem;
        }
      `}</style>
    </h1>
  )
}

const H2 = ({ children, ...props }) => {
  return (
    <h2 {...props}>
      {children}
      <style jsx>{`
        h2 {
          margin: 3vh 0 0;
          font-weight: 500;
        }
      `}</style>
    </h2>
  )
}
const H3 = ({ children, ...props }) => {
  return (
    <h3 {...props}>
      {children}
      <style jsx>{`
        h3 {
          margin: 30px 0 10px;
          font-size: 1.3rem;
        }
      `}</style>
    </h3>
  )
}

const H = { H1, H2, H3 }

export default H
