import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="box">
      <div className="wrapper">
        <div className="siteName">Nei-UI</div>
        <nav>
          <NavLink className="tab" activeClassName="selected" to="/guide">
            指南
          </NavLink>
          <NavLink className="tab" activeClassName="selected" to="/component">
            组件
          </NavLink>
          <NavLink className="tab" activeClassName="selected" to="/customization">
            自定义主题
          </NavLink>
        </nav>
      </div>
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          height: 48px;
          background: #fff;
          z-index: 100;
        }
        .box::after {
          position: absolute;
          content: '';
          height: 1px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background-color: rgba(0, 0, 0, 0.2);
        }
        .wrapper {
          max-width: 750pt;
          width: 100%;
          display: flex;
          align-items: flex-end;
          height: 100%;
          z-index: 900;
          padding: 0px 16pt;
          overflow: auto;
          margin: 0px auto;
        }
        .siteName {
          height: 100%;
          line-height: 48px;
          font-size: 16px;
          width: 50px;
          text-align: center;
          cursor: default;
          user-select: none;
        }
        nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          height: 100%;
          margin-left: 3vw;
        }
        div :global(.tab) {
          cursor: pointer;
          text-transform: capitalize;
          color: rgb(68, 68, 68);
          user-select: none;
          display: flex;
          align-items: center;
          line-height: 1.25rem;
          position: relative;
          padding: 4pt calc(2.6pt);
          outline: 0px;
          transition: all 200ms ease 0s;
          margin: 0px calc(6.4pt);
          height: calc(100% - 2px);
          padding-top: 0px;
          padding-bottom: 0px;
          color: rgb(102, 102, 102);
          font-size: 14px;
          text-decoration: none;
        }
        div :global(.tab::after) {
          position: absolute;
          content: '';
          bottom: -1px;
          left: 0px;
          right: 0px;
          width: 100%;
          height: 2px;
          transform: scaleX(0.85);
          background-color: transparent;
          transition: all 200ms ease 0s;
        }
        div :global(.selected) {
          color: #000;
          transition: all 200ms ease 0s;
        }
        div :global(.selected::after) {
          background-color: rgb(0, 0, 0);
          transform: scaleX(1);
        }
      `}</style>
    </header>
  )
}
