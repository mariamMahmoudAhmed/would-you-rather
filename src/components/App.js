import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/Shared'
import Leaderboard from './Leaderboard'
import Navbar from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Login from './Login'
import ProtectedRoute from'./ProtectedRoute'
import NotFound from './NotFound'
import questions from './questions'




class App extends Component {
componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute path='/' exact component={Home}/>
        <ProtectedRoute path='/Leaderboard' component={Leaderboard} />
        <ProtectedRoute path='/add' component={NewQuestion} />
        <ProtectedRoute path='/questions:question_id' component={questions} />
        <Route path='/Login' component={Login} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </Router>
    
    )
  }
}
function mapStateToProps({ authedUser }) {
   return {
   authedUser
  }
}

export default connect(mapStateToProps)(App)