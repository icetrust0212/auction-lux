import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {users, authentication} from './reducers';

export default function rootReducer() {
  return combineReducers({
    form,
    authentication,
    users
  })
}