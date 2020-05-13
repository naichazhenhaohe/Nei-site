import React from 'react'
import Children from './children'

export default React.memo(({ options, showDescription = false, destination, ...props }) => {
  return (
    <aside>
      {options.map((item, index) => (
        <div className="wrapper" key={index}>
          <span className="subTitle">{item.zh}</span>
          <Children showDescription={showDescription} destination={destination} items={item.children} />
        </div>
      ))}
      <style jsx>{`
        aside {
          width: 200px;
          margin-right: 20px;
          flex-shrink: 0;
          height: calc((100% - 2rem) - 140px + 60px);
          position: fixed;
          top: 140px;
          bottom: 2rem;
          transform: translateY(-60px);
          z-index: 100;
          transition: transform 200ms ease-out 0s;
        }
        .wrapper {
          margin-bottom: 8pt;
          width: 100%;
        }
        span {
          font-size: 12px;
          color: rgb(136, 136, 136);
          text-transform: uppercase;
          letter-spacing: 1.3px;
          transition: all 0.2s ease 0s;
        }
      `}</style>
    </aside>
  )
})
