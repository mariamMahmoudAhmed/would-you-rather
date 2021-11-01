import { SET_AUTHED_USER } from '../actions/AuthedUser'
import { REMOVE_AUTHED_USER } from '../actions/AuthedUser'

export default function authedUser(authedUser = null, action) {

    switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    case REMOVE_AUTHED_USER:
      return null
    default:
      return authedUser
  }
}
