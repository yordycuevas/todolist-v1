import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm (){
    const [newTodoValue, setNewTodoValues] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValues (event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit =(e) =>{
        e.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);

    };



    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TODO</label>
            <textarea 
                value={newTodoValue}
                onChange = {onChange}
                placeholder="Enter your TODO here"
            />
            <div className = "TodoForm-buttonContainer">
                <button
                type="button"
                className = "TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancel
                </button>

                <button
                type="submit"
                className = "TodoForm-button TodoForm-button--submit"
                >
                Add
                </button>
            </div>


        </form>
    );
}

export { TodoForm };