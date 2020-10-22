import { api } from '~/services/api';

// Action Types
export const Types = {
  GET_TASKS: 'get_tasks',
  GET_TASKS_LOADING: 'get_tasks_loading',
  GET_TASKS_ERROR: 'get_tasks_error',

  CREATE_TASK: 'create_task',
  CREATE_TASK_LOADING: 'create_task_loading',
  CREATE_TASK_ERROR: 'create_task_error',
};

// Reducer
const INITIAL_STATE = {
  tasks: [],
  tasksLoading: false,
  tasksError: null,

  createTaskLoading: false,
  createTaskError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        tasksLoading: false,
        tasksError: null,
      };
    case Types.GET_TASKS_LOADING:
      return { ...state, tasksLoading: false };
    case Types.GET_TASKS_ERROR:
      return { ...state, tasksError: null };
    case Types.CREATE_TASK_LOADING:
      return { ...state, createTaskLoading: action.payload };
    case Types.CREATE_TASK_ERROR:
      return { ...state, createTaskError: action.payload };
    default:
      return state;
  }
};

// Action creators
export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_TASKS_LOADING, payload: true });
    const response = await api.get('tasks');
    dispatch({ type: Types.GET_TASKS, payload: response.data });
  } catch (error) {
    dispatch({ type: Types.GET_TASKS_ERROR });
  }
};

export const createTask = (body) => async (dispatch) => {
  try {
    console.log(body);
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: true });
    await api.post('tasks', body);
    dispatch(getTasks());
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: false });
  } catch (error) {
    console.log(error.request);
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: true });
  }
};
