import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/Questions'
import { receiveUsers } from '../actions/User'

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users))  
    dispatch(receiveQuestions(questions))
      
    })
  }
}