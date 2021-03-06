import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import HowToUse from './pages/HowToUse'

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/adding-projects-to-the-index' component={HowToUse}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
