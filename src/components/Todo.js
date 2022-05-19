import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import TodoList from "./TodoList";
function Todo() {
  const [adder, setAdder] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setAdder(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const newtodos = [...todos, adder];
    setTodos(newtodos);
    // console.log(todos);
    setAdder("");
  };
  const onDelete = (id) => {
    const newtodos = todos.filter((data, index) => index != id);
    setTodos(newtodos);
  };
  return (
    <div className="body">
      <Paper className="paper" style={{ backgroundColor: "darkcyan" }}>
        <h3 style={{ fontFamily: "monospace", fontSize: "large" }}>
          Create Todos
        </h3>
        <form onSubmit={handleClick}>
          <TextField
            variant="outlined"
            placeholder="addTodo"
            name={adder}
            value={adder}
            onChange={handleChange}
          />
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            style={{ marginTop: "8px" }}
          >
            add
          </Button>
        </form>
      </Paper>
      {/* {todos.map((todo, index) => {
          //console.log(todo)

          <TodoList todo={todo} />;
        })} */}
      {/* <ul>
        {todos.map((data,id) => (<TodoList todo={data} id={id}/>))}
        </ul> */}
      <TodoList todo={todos} onDelete={onDelete} />
    </div>
  );
}
export default Todo;
