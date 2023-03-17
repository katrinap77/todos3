// const API_URL = process.env.REACT_APP_API_URL || ""
// http://localhost:5001/todos

const createTodo = async (body) => {
  const response = await fetch("http://localhost:5001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const todo = await response.json();
  return todo;
};

const getTodos = async () => {
  const response = await fetch("http://localhost:5001/todos");
  const todos = await response.json();
  return todos;
};

export { createTodo, getTodos };
