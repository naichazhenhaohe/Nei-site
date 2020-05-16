import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from '@com/header'
import Home from '@page/home'
import Component from '@page/component'
import Customization from '@page/customization'

export default function App() {
  return (
    <>
      <Router basename="/nei">
        <Header />
        <Switch>
          <Route path="/guide/:name" component={Home} />
          <Route path="/component/:name" component={Component} />
          <Route path="/customization" component={Customization} />
          <Redirect from="/component" to="/component/Spacer" />
          <Redirect from="/" to="/guide/introduction" />
          <Redirect from="/guide" to="/guide/introduction" />
        </Switch>
      </Router>
      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        html {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.7);
        }
        body {
          font-family: 'Overpass', '微软雅黑', cursive, sans-serif;
          width: 100%;
          height: 100%;
          min-height: 100vh;
        }
        ::selection {
          color: #000;
          background-color: #fce;
        }
      `}</style>
    </>
  )
}
