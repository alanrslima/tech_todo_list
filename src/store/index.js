import { combineReducers } from 'redux';
import todoList from './ducks/todoList';
import theme from './ducks/theme';

export default combineReducers({
  todoList,
  theme,
});
