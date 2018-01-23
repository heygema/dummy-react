// @flow

import eventHandlers from '../eventHandlers';

it('should increaseCount', () => {
  let state = {count: 0};
  let newState = eventHandlers.increaseCount(state);
  expect(newState).toEqual({count: 1});
});
