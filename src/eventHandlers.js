// @flow
import type {State, TodoState} from './types/State';

type UpdateFunction = (State, mixed) => State;
// type UpdateFunctionWithId = (State, id: number) => State;
type EventHandlerObject = {
  [eventName: string]: UpdateFunction,
};

let eventHandlers: EventHandlerObject = {
  handleInput: (oldState, text) => {
    return {...oldState, input: text};
  },
  submitInput: (oldState) => {
    let {todoItems, input} = oldState;
    console.log('input is', input);
    let newItems = [
      ...todoItems,
      {
        id: Math.random(),
        content: input,
        isDone: false,
      },
    ];
    return {...oldState, todoItems: newItems, input: input};
  },
  checkOneTodo: (oldState: TodoState, id) => {
    let {todoItems} = oldState;
    let a = todoItems.map((x) => {
      // let {isDone} = x;
      if (x.id === id) {
        // x.isDone = !isDone;
        return {...x, isDone: !x.isDone};
      }
      return x;
    });
    return {
      ...oldState,
      todoItems: a,
    };
  },
  checkAllTodo: (oldState) => {
    let {todoItems} = oldState;
    let a = todoItems.map((x) => {
      let {isDone} = x;
      x.isDone = !isDone;
      return x;
    });
    return {
      ...oldState,
      todoItems: a,
    };
  },
};

export default eventHandlers;
