import React from 'react'

export default function ColorBox({ name, color, fontColor = 'rgba(0, 0, 0, 0.65)', bordercolor = false }) {
  return (
    <div>
      <span>{name}:</span>
      <span>{color}</span>
      <style jsx>{`
        div {
          background: ${color};
          width: 200px;
          height: 48px;
          line-height: 48px;
          padding: 0 8px;
          display: flex;
          justify-content: space-between;
          color: ${fontColor};
          border: ${bordercolor ? '1px solid rgba(0,0,0,0.65)' : 'none'};
        }
      `}</style>
    </div>
  )
}
