import { Button, Card } from "@mui/material";
import React, { useState } from "react";
const TodoList = ({ todo, onDelete, editItem }) => {
  //   const onDelete = () => {
  //     todo.filter((data) => data.id !== id);
  //   };
  return (
    <Card>
      {todo.map((todos, id) => (
        <div className="card">
          <h3>{todos}</h3>
          <span>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: "15px" }}
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          </span>
        </div>
      ))}
    </Card>
  );
};
export default TodoList;

// <Card className="card">
//   <div key={id}>
//     <h3>{todo}</h3>
//     <Button variant="contained" color="primary">
//       Edit
//     </Button>
//     <Button variant="contained" color="error" onClick={onDelete}>
//       Delete
//     </Button>
//   </div>
// </Card>
