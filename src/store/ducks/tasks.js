import { api } from '~/services/api';

// Action Types
export const Types = {
  GET_TASKS: 'get_tasks',
  GET_TASKS_LOADING: 'get_tasks_loading',
  GET_TASKS_REFRESH: 'get_tasks_refresh',
  GET_TASKS_ERROR: 'get_tasks_error',

  CREATE_TASK: 'create_task',
  CREATE_TASK_LOADING: 'create_task_loading',
  CREATE_TASK_ERROR: 'create_task_error',

  DELETE_TASK_ERROR: 'delete_task_error',
};

// Reducer
const INITIAL_STATE = {
  tasks: [],
  tasksLoading: false,
  tasksRefresh: false,
  tasksError: null,

  createTaskLoading: false,
  createTaskError: null,

  deleteTaskError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Get
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        tasksLoading: false,
        tasksError: null,
        tasksRefresh: false,
      };
    case Types.GET_TASKS_LOADING:
      return { ...state, tasksLoading: action.payload };
    case Types.GET_TASKS_REFRESH:
      return { ...state, tasksRefresh: action.payload };
    case Types.GET_TASKS_ERROR:
      return { ...state, tasksError: null };
    // Create
    case Types.CREATE_TASK_LOADING:
      return { ...state, createTaskLoading: action.payload };
    case Types.CREATE_TASK_ERROR:
      return { ...state, createTaskError: action.payload };
    // Delete
    case Types.DELETE_TASK_ERROR:
      return { ...state, deleteTaskError: action.payload };
    default:
      return state;
  }
};

// Action creators
export const getTasks = (refresh = false) => async (dispatch) => {
  try {
    if (refresh) {
      dispatch({ type: Types.GET_TASKS_REFRESH, payload: true });
    } else {
      dispatch({ type: Types.GET_TASKS_LOADING, payload: true });
    }
    const response = await api.get('tasks');
    dispatch({ type: Types.GET_TASKS, payload: response.data });
  } catch (error) {
    dispatch({ type: Types.GET_TASKS_ERROR });
  }
};

export const createTask = (body) => async (dispatch) => {
  try {
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: true });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: false });
    await api.post('tasks', body);
    dispatch(getTasks());
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
  } catch (error) {
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: true });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    // dispatch({ type: Types.CREATE_TASK_LOADING, payload: true });
    dispatch({ type: Types.DELETE_TASK_ERROR, payload: false });
    await api.delete(`tasks/${id}`);
    dispatch(getTasks());
    // dispatch(getTasks());
    // dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    // dispatch({ type: Types.CREATE_TASK_ERROR, payload: false });
  } catch (error) {
    dispatch({ type: Types.DELETE_TASK_ERROR, payload: true });
    // dispatch({ type: Types.CREATE_TASK_ERROR, payload: true });
  }
};
