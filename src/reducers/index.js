import { combineReducers } from 'redux';
import users from './userReducer';
import { combineForms } from 'react-redux-form';

const initialUser = {
  id: '',
  first: '',
  last: '',
  email: '',
  phone: '',
  status: ''
};

const rootReducer = combineReducers({
  users,
  user: combineForms({
    details: initialUser
  }, 'user')
});

export default rootReducer;