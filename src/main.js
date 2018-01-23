// @flow
import renderApp from './App';
import eventHandlers from './eventHandlers';

let state = {
  count: 1,
};

global.emitEvent = (eventName) => {
  let eventHandler = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state);
    render();
  }
};

function render() {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}

render();
