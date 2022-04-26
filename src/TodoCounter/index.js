import React from "react";
import { TodoContext } from "../TodoContext";
import { RiReactjsLine } from 'react-icons/ri';
import './TodoCounter.css';

function TodoCounter()  {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);


  return(
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODO <RiReactjsLine className="emoji"/>  </h2>
    
  );
}

export { TodoCounter };
