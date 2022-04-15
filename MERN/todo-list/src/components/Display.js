import React, { useState } from "react";

const Display = (props) => {
    const { todoList, setTodoList } = props;

    const handleCompleted = (todo) => {

        todo.markedDelete = !todo.markedDelete;
    };

    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };
    const deleteButton = (idFromBelow) => {
    
        setTodoList(
            todoList.filter((todo, index) => {
            return todo.id !== idFromBelow;
            })
        );
    };
    return (
    <div>
        {todoList.map((todo, index) => (
        <div className={styled(todo.markedDelete)} key={todo.id}>
            <p>{todo.content}</p> 
            <input type="checkbox" onChange={() => handleCompleted(todo)} />
            <button onClick={() => deleteButton(todo.id)}>Delete</button>
            {/* Changed this to onClick */}
        </div>
        ))}
    </div>
    );
};

export default Display;
