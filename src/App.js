// @flow
import type {TodoState} from './types/State';
import renderTodoList from './renderTodoList';

function renderApp(state: TodoState) {
  return `
    ${renderTodoList(state)}
    <button onClick="emitEvent('checkAllTodo')">Check All</button>
    
  `;
}

export default renderApp;
