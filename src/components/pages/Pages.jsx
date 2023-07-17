import React from 'react'
import NavBar from '../main/header/Header.jsx'
import Home from '../home/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from "../main/footer/Footer.jsx"

const Pages = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Pages