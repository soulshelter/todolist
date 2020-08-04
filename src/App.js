import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD, DEL, COMPLETE } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewTodo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };
  return (
    <div>
      <h1>Add to Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write to do" onChange={onChange} />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            {" "}
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                  ❌
                </span>
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                  ↪️
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

export default App;
