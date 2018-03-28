// @flow
import type {State} from './types/State';

let initialState: State = {
  todoItems: [
    {id: 1, content: 'buy a milk', isDone: false},
    {id: 2, content: 'go to the outer space', isDone: false},
    {id: 3, content: 'fix hal 9000', isDone: true},
  ],
  // count: 1,
  input: '',
};

export default initialState;
