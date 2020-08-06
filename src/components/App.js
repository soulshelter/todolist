import React from "react";
import Add from "./Add";
import List from "./List";
import { useState } from "../context";
import ToDo from "./Todo";

function App() {
  const { toDos, completed } = useState();
  return (
    <div>
      <Add />
      <List name={"To Do"}>
        <h2>To Dos</h2>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
