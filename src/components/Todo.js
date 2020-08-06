import React from "react";
import { UNCOMPLETE, COMPLETE, DEL } from "../actions";
import { useDispatch } from "../context";
export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <span
        role="img"
        aria-label="DEL"
        onClick={() => dispatch({ type: DEL, payload: id })}
      >
        ❌
      </span>
      <span
        role="img"
        aria-label="UNCOMPLETE"
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "↪️" : "✅"}
      </span>
    </li>
  );
};
