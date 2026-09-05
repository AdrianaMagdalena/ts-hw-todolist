/*
decorator

MUST HAVE:
display message about succesful creation of a todo item 

NICE TO HAVE:
for displaying status updates in console about a change in todo item
*/
export function LogAddition(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Adding item...`);
    originalMethod.apply(this, args);
  };
}
