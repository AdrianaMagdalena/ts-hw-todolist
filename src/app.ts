import { TodoList } from "./services/todo-list-service.js";
import TodoItem from "./modules/todo-item.js";

const todo1 = new TodoItem("Wash clothes");
const todo2 = new TodoItem({
  content: "Pack luggage",
  dueDate: new Date("2026-09-08"),
  category: "travel",
});

console.log(todo1);
console.log(todo2);

const todoList = new TodoList();
todoList.addTodo(todo1);
todoList.addTodo(todo2);

todoList.listTodos();

todoList.checkTodo(todo1);
todoList.listTodos();
