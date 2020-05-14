import React from 'react'
import { NavLink } from 'react-router-dom'
export default React.memo(({ items, showDescription, destination }) => {
  return (
    <div className="navBox">
      {items.map((item, index) => (
        <div className="link" key={index}>
          <NavLink
            activeClassName="selected"
            onClick={() => {
              document.documentElement.scrollTop = document.body.scrollTop = 0
            }}
            to={{
              pathname: `${destination}/${item.en}`
            }}
          >
            {item.zh}
            {showDescription && <span>{item.en}</span>}
          </NavLink>
        </div>
      ))}
      <style jsx>{`
        .navBox {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          position: relative;
          margin-top: 0.5rem;
          transition: all 0.2s ease-in-out 0s;
        }
        .link {
          width: 100%;
          color: rgb(102, 102, 102);
          display: flex;
          height: 2.25rem;
          align-items: center;
          justify-content: flex-start;
          text-transform: capitalize;
        }
        .navBox :global(a) {
          cursor: pointer;
          text-decoration: none;
          color: rgb(51, 51, 51);
          font-size: 1rem;
          font-weight: 400;
          display: inline-flex;
          align-items: baseline;
          transition: all 300ms ease 0s;
        }
        span {
          font-size: 0.75rem;
          color: rgb(136, 136, 136);
          font-weight: 400;
          display: inline-block;
          padding-left: 5px;
          transition: all 300ms ease 0s;
        }
        .navBox :global(.selected),
        .navBox :global(.selected span) {
          color: #000;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
})
