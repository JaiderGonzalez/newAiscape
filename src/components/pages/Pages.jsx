import React from 'react'
import NavBar from '../main/header/Header.jsx'
import Home from '../home/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from "../main/footer/Footer.jsx"
import RutError from '../home/RutError.jsx'
import RutInformation from '../home/RutInformation.jsx'

const Pages = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/information" component={RutInformation}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default Pages