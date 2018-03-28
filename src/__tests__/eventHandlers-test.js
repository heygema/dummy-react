// @flow

import eventHandlers from '../eventHandlers';

// it('should increaseCount', () => {
//   let state = {count: 0};
//   let newState = eventHandlers.increaseCount(state);
//   expect(newState).toEqual({count: 1});
// });

it('should make todo isDone: true', () => {
  let state = {
    todoItems: [
      {id: 1, content: 'beli oreo', isDone: false},
      {id: 2, content: 'buy milk', isDone: false},
      {id: 3, content: 'buy milk', isDone: false},
    ],
  };
});
