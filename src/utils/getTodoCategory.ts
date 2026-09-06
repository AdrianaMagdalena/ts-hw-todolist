import { TodoContent, TodoObjectContent } from "./todoContent";

function hasCategory(content: TodoContent): content is TodoObjectContent {
  return (
    typeof content === "object" &&
    content !== null &&
    "category" in content &&
    typeof content.category === "string"
  );
}

export function getTodoCategory(content: TodoContent): string | null {
  if (hasCategory(content)) {
    return content.category;
  } else {
    return null;
  }
}
