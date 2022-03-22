import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "../Todo";
import FormTodo from "../FormTodo";
export default function TodoApp() {
  const [todos, setTodos] = useState([
    {
      text: "Go on a walk",
      isDone: false,
    },
  ]);
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">To Do List</h1>
        <FormTodo todos={todos} setTodos={setTodos} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
