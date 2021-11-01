import { _saveQuestionAnswer } from '../utils/_DATA'
import { addAnswerToQuestion } from '../actions/Questions'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER= 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addUserAnswer(authedUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  }
}
export function addUserQuestion({author,id }) {
  return {
    type: ADD_USER_QUESTION,
    author,
    id  
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addUserAnswer(authedUser, qid, answer))
    dispatch(addAnswerToQuestion(authedUser, qid, answer))
    return _saveQuestionAnswer({authedUser, qid, answer})
  }
}

