import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
export function A({ children, ...props }) {
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

export function Link({ children, ...props }) {
  return (
    <span>
      <RouterLink {...props}>{children}</RouterLink>
      <style jsx>{`
        span :global(a) {
          text-decoration: none;
          color: #ff7755;
          transition: 0.5s all ease;
        }
        span :global(a:hover, a:focus) {
          color: #00ccff;
        }
      `}</style>
    </span>
  )
}
