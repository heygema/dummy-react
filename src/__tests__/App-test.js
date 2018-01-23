// @flow
import renderApp from '../App';

it('Should render state into view', () => {
  let html = renderApp({count: 11});
  expect(html).toEqual(`
    <p>Hello 11</p>
    <button onClick="emitEvent('increaseCount')">Increase</button>
    <button onClick="emitEvent('decreaseCount')">Decrease</button>
  `);
});
