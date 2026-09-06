import { TodoList } from "./services/todoListService.js";
import TodoItem from "./modules/todoItem.js";

const todo1 = new TodoItem("Wash clothes");
const todo2 = new TodoItem({
  name: "Pack luggage",
  dueDate: new Date("2026-09-08"),
  category: "travel",
});
const todo3 = new TodoItem({
  name: "Homework",
  dueDate: new Date("2026-09-07"),
  category: "learning",
});
const todo4 = new TodoItem({
  name: "Hoover",
  category: "chores",
});
const todo5 = new TodoItem({
  name: "Water plants",
  category: "chores",
});
const todo6 = new TodoItem("Go for a walk");

const todoList = new TodoList();
todoList.addTodo(todo1);
todoList.addTodo(todo2);
todoList.addTodo(todo3);
todoList.addTodo(todo4);
todoList.addTodo(todo5);
todoList.addTodo(todo6);

todoList.listTodos();

todoList.checkTodo(todo1);
todoList.listTodos();

todoList.filterCategory("chores");
