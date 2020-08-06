import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newToDo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewTodo(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };
  return (
    <div>
      <h1>Add to Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write to do" onChange={onChange} />
      </form>
    </div>
  );
};
