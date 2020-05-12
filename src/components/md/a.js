import React from 'react'

export default function A({ children, ...props }) {
  return (
    <a target="_blank" {...props}>
      {children}
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: #ff7755;
            transition: 0.5s all ease;
          }
          a:hover,
          a:focus {
            color: #00ccff;
          }
        `}
      </style>
    </a>
  )
}
