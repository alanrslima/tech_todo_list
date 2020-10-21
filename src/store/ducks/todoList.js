// Action Types
export const Types = {
  GET_TODO_LIST: 'get_todo_list',
};

// Reducer
const INITIAL_STATE = {
  todoList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TODO_LIST:
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
};

// Action creators
export const getTodoList = () => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_TODO_LIST });
  } catch (error) {
    // Error case
  }
};
