import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_COMPLETED_TODO_ITEM} from './actions';
import { loadState } from "./localStotage";

const persistedState = loadState();

const defaultState = persistedState ? persistedState.todoList : [];

export const todoReducer = (state = defaultState , action) => {

     switch (action.type) {

         case ADD_TODO_ITEM:
             return [
                 ...state,
                 {
                     id: action.payload.id,
                     title: action.payload.title,
                     completed: false
                 }
             ];

         case REMOVE_TODO_ITEM:
             return state.filter(task => task.id !== action.payload);

         case TOGGLE_COMPLETED_TODO_ITEM:
             return state.map(
                 todoItem =>
                     todoItem.id === action.payload ? { ...todoItem, completed: !todoItem.completed } : todoItem
             );
     }

     return state;

};