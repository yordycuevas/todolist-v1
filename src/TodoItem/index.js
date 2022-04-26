import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { BsClipboardX } from "react-icons/bs";
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <AiFillThunderbolt  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        
      </AiFillThunderbolt>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BsClipboardX className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        
      </BsClipboardX>
    </li>
  );
}

export { TodoItem };