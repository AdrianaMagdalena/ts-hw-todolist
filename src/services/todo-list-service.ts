/* 
for business logic, data transformation
how todo list treats todo items

funtions to do:
MUST HAVE:
- creating a list
- adding a todo to the list (instatiate todo item here)
- storing the todo items as a Map
- listing all todo items
- finding todo item by id
- filtering a todo item by category
- check todo item as done
- deleting a todo item

NICE TO HAVE:   
- modifying a todo item
*/

import { LogAddition } from "../decorators/logAddition.js";
import { LogDeletion } from "../decorators/logDeletion.js";
import TodoItem from "../modules/todo-item.js";
import { TodoContent } from "../utils/types.js";

export class TodoList<T> {
  private _listItems: Map<string, TodoItem<T>> = new Map();

  @LogAddition
  addTodo(todo: TodoItem<T>): void {
    this._listItems.set(todo.id, todo);
    console.log(`Todo item created: ${todo.id}`);
  }

  @LogDeletion
  checkTodo(todo: TodoItem<T>) {
    this._listItems.delete(todo.id);
    console.log(`Todo done: ${todo.id}`);
  }

  listTodos() {
    // TODO - change this into type guard???
    this._listItems.forEach((item) => {
      console.log(`ID: ${item.id}, name: ${JSON.stringify(item.content)}`);
    });
  }
}
