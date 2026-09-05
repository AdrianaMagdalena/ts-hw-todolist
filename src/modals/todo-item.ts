/*
for creating a todo item class & constructor
without methods or logic behind it
just to be able to instantiate a todo inside a list

properties:
MUST HAVE:
- ID (id randomisation?)
- category (optional, if not chosen - default to "general")
- name
- description (optional)

NICE TO HAVE:
- deadline
- iteration (one-time or repeting todo?)
- reminder alarm (how long before? multiple?)
- enum with statuses (or other status handling)
*/

export default class TodoItem {
  private _id: string;
  public category: string;
  private _name: string;
  private _desc?: string;

  constructor(todoId: string, category: string, name: string, desc?: string) {
    this._id = todoId;
    this.category = category;
    this._name = name;
    this._desc = desc;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get desc(): string | undefined {
    return this._desc;
  }
}
