/*
MUST HAVE:
- ID (id randomisation?)
- category (optional, if not chosen - default to "general")
- content

NICE TO HAVE:
- name & description (optional) instead of content
- deadline
- iteration (one-time or repeting todo?)
- reminder alarm (how long before? multiple?)
- enum with statuses (or other status handling)
*/

import { TodoContent } from "../utils/todoContent.js";

export default class TodoItem<T extends TodoContent> {
  protected _id: string;
  private _content: T;

  constructor(content: T) {
    this._id = this.generateTodoId(6);
    this._content = content;
  }

  get id(): string {
    return this._id;
  }

  get content(): T {
    return this._content;
  }

  modifyContent(newContent: T) {
    this._content = newContent;
  }

  private generateTodoId(length: number): string {
    const chars: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }
}
