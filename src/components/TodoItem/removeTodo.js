export default function RemoveTodo(index, todos, setTodos) {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}
