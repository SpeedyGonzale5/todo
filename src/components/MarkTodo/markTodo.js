export default function MarkTodo(index, todos, setTodos) {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
}
