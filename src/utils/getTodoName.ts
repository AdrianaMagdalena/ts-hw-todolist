import { TodoContent, TodoObjectContent } from "./todoContent";

function isObjectContent(content: TodoContent): content is TodoObjectContent {
  return (
    typeof content === "object" &&
    content !== null &&
    "name" in content &&
    typeof content.name === "string"
  );
}

export function getTodoName(content: TodoContent): string {
  if (isObjectContent(content)) {
    return content.name;
  } else {
    return content;
  }
}
