/* 
for business logic, data transformation
how todo list treats todo items

funtions to do:
MUST HAVE:
- creating a list
- adding a todo to the list
- storing the todo items as a Map
- listing all todo items
- finding todo item by id
- filtering a todo item by category
- check todo item as done = deleting a todo item

NICE TO HAVE:   
- modifying a todo item
*/

import { TodoStatus, LogStatus } from "../decorators/logStatus.js";
import TodoItem from "../modules/todoItem.js";
import { getTodoName } from "../utils/getTodoName.js";
import { TodoContent } from "../utils/todoContent.js";
import { getTodoCategory } from "../utils/getTodoCategory.js";

export class TodoList {
  private _listItems: Map<string, TodoItem<TodoContent>> = new Map();

  @LogStatus(TodoStatus.new)
  addTodo(todo: TodoItem<TodoContent>): void {
    this._listItems.set(todo.id, todo);
    console.log(`New todo ID: ${todo.id}`);
  }

  @LogStatus(TodoStatus.done)
  checkTodo(todo: TodoItem<TodoContent>): void {
    this._listItems.delete(todo.id);
    console.log(`Removed todo ID: ${todo.id}`);
  }

  listTodos(): void {
    console.log(`✍ Listing your todo items:`);
    this._listItems.forEach((todo) => {
      console.log(`ID: ${todo.id}, name: ${getTodoName(todo.content)}`);
    });
  }

  filterCategory(category: string): void {
    const todosArray = Array.from(this._listItems.values());

    const matchingTodos = todosArray.filter(
      (todo) => getTodoCategory(todo.content) === category,
    );

    console.log(`✍ Listing todo items in "${category}" category:`);

    if (matchingTodos.length === 0) {
      console.log(`❗ No items found in "${category}" category.`);
      return;
    }

    matchingTodos.forEach((todo) => {
      console.log(`ID: ${todo.id}, name: ${getTodoName(todo.content)}`);
    });
  }
}
