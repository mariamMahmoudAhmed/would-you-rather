import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION
} from '../actions/User'

export default function users(state={}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
case ADD_USER_ANSWER:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_USER_QUESTION:
      const { author,id } = action       
      return {
        ...state,
        [author]: {
          ...state[author],
          questions:state[author].questions.concat(id)
        }
      }
    default:
      return state
  }
}