/*
decorator

MUST HAVE:
display message about succesful creation of a todo item 

NICE TO HAVE:
for displaying status updates in console about a change in todo item
*/

export enum TodoStatus {
  new = "⭐ Todo item created.",
  done = "✅ Todo item done. Removing from list.",
}

export function LogStatus(status: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(status);
      originalMethod.apply(this, args);
    };
  };
}
