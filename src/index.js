import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

console.log(todoList.todos);

// console.log(Todo.fromJson(todoList.todos[0]));

todoList.todos.forEach(todo => { crearTodoHtml( todo ) });