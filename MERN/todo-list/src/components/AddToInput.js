import React, { useState } from "react";

const AddToInput = (props) => {
    const [todoText, setTodoText] = useState("");
    
    const { todoList, setTodoList } = props;
    
    const submitHandler = () => {
        console.log('submitHandler is being run')
        
        setTodoList([
            
            ...todoList,
            {
            content: todoText,
            markedDelete: false, 
            id: Math.floor(Math.random() * 100).toString(),
            },
        ]);
        setTodoText("");
    };
    console.log('todoList: ', todoList)
    return (
    <div>
        <input
            value={todoText}
            onChange={(e) => {

                setTodoText(e.target.value)
            }}
            type="text"
        />
        <button onClick= {() => submitHandler()}>Add</button>
    </div>
    );
};

export default AddToInput;
