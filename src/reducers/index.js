import { combineReducers } from 'redux'
import authedUser from '../reducers/AuthedUser'
import users from '../reducers/Users'
import questions from '../reducers/Question'

export default combineReducers({
  authedUser,
  questions,
  users
})