import React,{ useState } from 'react'
import MainContent from "./pages/MainContent.js"
import Head from "./components/Head.js"
import Foot from "./components/Foot.js"
import Faq  from "./pages/Faq.js"
import Blog  from "./pages/Blog.js"
import Donate  from "./pages/Donate.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'


function App(){
  return(
    <Router>
      <div>
        <Head />
        <Switch>
          <Route path='/' exact component={MainContent} />
          <Route path='/donate' component={Donate} />
          <Route path='/faq' component={Faq} />
          <Route path='/blog' component={Blog} />
        </Switch>
        <Foot /> 
      </div>
    </Router>
  )
}

export default App;
