import { api } from '~/services/api';
import { Alert } from 'react-native';

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

  EDIT_TASK: 'edit_task',
};

// Reducer
const INITIAL_STATE = {
  tasks: [],
  tasksEmpty: false,
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
        tasksEmpty: action.payload.length ? false : true,
      };
    case Types.GET_TASKS_LOADING:
      return { ...state, tasksLoading: action.payload };
    case Types.GET_TASKS_REFRESH:
      return { ...state, tasksRefresh: action.payload };
    case Types.GET_TASKS_ERROR:
      return {
        ...state,
        tasksError: true,
        tasksLoading: false,
        tasksRefresh: false,
      };
    // Create
    case Types.CREATE_TASK_LOADING:
      return { ...state, createTaskLoading: action.payload };
    case Types.CREATE_TASK_ERROR:
      return { ...state, createTaskError: action.payload };
    // Delete
    case Types.DELETE_TASK_ERROR:
      return { ...state, deleteTaskError: action.payload };

    // Edit
    case Types.EDIT_TASK:
      let allTasks = [];
      for (let i = 0; i < state.tasks.length; i += 1) {
        const tasksData = state.tasks[i].data.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        allTasks = [...allTasks, ...tasksData];
      }
      const data = organizeTasks(allTasks);
      return { ...state, tasks: data };
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
    const data = organizeTasks(response.data);

    dispatch({ type: Types.GET_TASKS, payload: data });
  } catch (error) {
    dispatch({ type: Types.GET_TASKS_ERROR });
  }
};

const organizeTasks = (tasks) => {
  const concludedArray = [];
  const openArray = [];
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].concluded) {
      concludedArray.push(tasks[i]);
    } else {
      openArray.push(tasks[i]);
    }
  }

  const data = [];
  if (openArray.length) {
    data.push({ title: 'Em aberto', data: openArray });
  }
  if (concludedArray.length) {
    data.push({ title: 'Concluídas', data: concludedArray });
  }
  return data;
};

export const createTask = (body, callback = () => {}) => async (dispatch) => {
  try {
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: true });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: false });
    await api.post('tasks', body);
    dispatch(getTasks());
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    callback(false);
  } catch (error) {
    callback(error);
    dispatch({ type: Types.CREATE_TASK_LOADING, payload: false });
    dispatch({ type: Types.CREATE_TASK_ERROR, payload: true });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.delete(`tasks/${id}`);
    dispatch(getTasks());
  } catch (error) {
    dispatch({ type: Types.DELETE_TASK_ERROR, payload: true });
  }
};

/**
 *
 * @param {{ id: number, name: string, description: string, favorite: boolean}} task
 */
export const editTask = (task) => async (dispatch) => {
  try {
    dispatch({ type: Types.EDIT_TASK, payload: task });
    await api.put(`tasks/${task.id}`, task);
  } catch (error) {
    dispatch(getTasks());
    Alert.alert(
      'Ops',
      'Algo inesperado acontece ao editar sua tarefa. Tente novamente mais tarde',
    );
  }
};
