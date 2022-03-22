import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MarkTodo from "../MarkTodo/markTodo";
import RemoveTodo from "../TodoItem/removeTodo";
export default function Todo({ todo, index, todos, setTodos }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant="success"
          onClick={() => MarkTodo(index, todos, setTodos)}
        >
          ✓
        </Button>{" "}
        <Button
          variant="danger"
          onClick={() => RemoveTodo(index, todos, setTodos)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}
