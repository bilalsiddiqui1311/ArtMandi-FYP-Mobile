import {set_loading, set_signup_failure, set_signup_success, set_user_failure, set_user_success,set_logout} from '../action/type';
const initialState = {
  user: {},
  loading: false,
  success: false,
  failure: false,
};
export default (state = initialState, action = {}) => {
    let {type,payload}=action
  switch (action.type) {
    case set_user_success:
      return {
        user: payload,
        success: true,
        failure: false,
        loading: false,
      };
    case set_user_failure:
      return {
        user: payload,
        success: false,
        failure: true,
        loading: false,
      };
      case set_signup_success:
      return {
        user: action.user,
        success: true,
        failure: false,
        loading: false,
      };
    case set_signup_failure:
      return {
        user: payload,
        success: false,
        failure: true,
        loading: false,
      };
      case set_logout:
      return {
        user: payload,
        success: false,
        failure: false,
        loading: false,
      };
      
    case set_loading:
      return {
        loading: payload,
      };
    default:
      return state;
  }
};
