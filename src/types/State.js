// @flow

export type Todo = {
  id: number,
  content: string,
  isDone: boolean,
};

export type State = {
  [string]: any,
};

export type TodoState = {
  [string]: Array<Todo>,
};
