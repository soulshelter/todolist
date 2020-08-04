import React, { useReducer, useState } from "react";

const initialState = {
  toDos: [],
};

const ADD = "increment";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      return;
  }
};

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
      <h1>Add to Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write to do" onChange={onChange} />
      </form>
      <ul>
        <h2>To Docs</h2>
        {state.toDos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
