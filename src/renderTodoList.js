// @flow
import type {State, Todo} from './types/State';
import emitEvent from './main';

let renderTodoItem = (todo: Todo) => {
  return todo.isDone
    ? `<li onClick="emitEvent('checkOneTodo', ${todo.id})" ><s>${
      todo.content
    }</s></li>`
    : `<li onClick="emitEvent('checkOneTodo', ${todo.id})">${
      todo.content
    }</li>`;
};

global.alertChange = () => {
  let textValue = document.getElementById('textInput').value;
  console.log(textValue);
  // emitEvent('handleInput', textValue);
};

// global.submitToInput = () => {
//   // emitEvent('handleInput', document.getElementById('textInput').value);
// };

global.submitTodo = (text) => {
  emitEvent('handleInput', document.getElementById('textInput').value);
  // emitEvent('handleInput'm )
  emitEvent('submitInput');
};

let renderTodoList = (state: State) => {
  return `
  <ol>
    ${state.todoItems.map((x) => renderTodoItem(x)).join('')}
  </ol>
  <input id="textInput" type="text" onInput="alertChange()">
  <button onClick="submitTodo()">Add Todo </button>
  `;
};

export default renderTodoList;
