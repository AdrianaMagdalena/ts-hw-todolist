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

import { TodoStatus, LogStatus } from "../decorators/logStatus.js";
import TodoItem from "../modules/todoItem.js";
import { getTodoName } from "../utils/getTodoName.js";
import { TodoContent } from "../utils/todoContent.js";

export class TodoList {
  private _listItems: Map<string, TodoItem<TodoContent>> = new Map();

  @LogStatus(TodoStatus.new)
  addTodo(todo: TodoItem<TodoContent>): void {
    this._listItems.set(todo.id, todo);
    console.log(`New todo ID: ${todo.id}`);
  }

  @LogStatus(TodoStatus.done)
  checkTodo(todo: TodoItem<TodoContent>) {
    this._listItems.delete(todo.id);
    console.log(`Removed todo ID: ${todo.id}`);
  }

  listTodos() {
    this._listItems.forEach((todo) => {
      console.log(getTodoName(todo.content));
    });
  }
}
