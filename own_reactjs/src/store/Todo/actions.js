export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const TOGGLE_COMPLETED_TODO_ITEM = 'TOGGLE_COMPLETED_TODO_ITEM';

let nextTodoItemId = 0;

export const addTodoItem = (title) => {

    return {

        type: ADD_TODO_ITEM,
        payload: {
            id: nextTodoItemId++,
            title: title
        }

    };

};

export const removeTodoItem = (id) => {

  return {

      type: REMOVE_TODO_ITEM,
      payload: id

  };

};

export const toggleCompletedTodoItem = (id) => {

    return {

        type: TOGGLE_COMPLETED_TODO_ITEM,
        payload: id

    }

};