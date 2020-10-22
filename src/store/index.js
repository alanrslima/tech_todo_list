import { combineReducers } from 'redux';
import tasks from './ducks/tasks';
import theme from './ducks/theme';

export default combineReducers({
  tasks,
  theme,
});
