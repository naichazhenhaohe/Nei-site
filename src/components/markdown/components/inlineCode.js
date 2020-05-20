import React from 'react'

export default function InlineCode({ children, ...props }) {
  return (
    <pre {...props}>
      {children}
      <style jsx>
        {`
          pre {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 8pt 16pt;
            margin: 10px 0;
          }
        `}
      </style>
    </pre>
  )
}
