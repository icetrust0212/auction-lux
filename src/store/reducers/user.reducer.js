import { userConstants } from '../constants';

export function users(state = {}, {type, payload}) {
  switch (type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: payload
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: payload
      };
    default:
      return state
  }
}


