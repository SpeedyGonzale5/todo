export default function AddTodo(text, todos, setTodos) {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
}
