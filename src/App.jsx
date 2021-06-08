import React, { useState }  from "react";
import ReactDom from "react-dom";
import "./styles.css";
import {InputTodo} from "./components/InputTodo"
import {IncompleteTodos} from "./components/IncompleteTodos"
import {CompleteTodos} from "./components/CompleteTodos"


export const App = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    const onCLickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
        const newTodos = [...completeTodos, incompleteTodos[index]];
        setCompleteTodos(newTodos);
        onCLickDelete(index);
    };

    const onClickReturn =(index) => {
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setIncompleteTodos(newIncompleteTodos);

        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index,1);
        setCompleteTodos(newCompleteTodos);
    };

    return(
        <>
           <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length>=5} />
           {incompleteTodos.length>=5 && <p style={{ color:"red" }}>Todoが5個溜まったよ、消化して～。</p>}
           <IncompleteTodos onClickComplete={onClickComplete} onCLickDelete={onCLickDelete} incompleteTodos={incompleteTodos} />
           <CompleteTodos onClickReturn={onClickReturn} completeTodos={completeTodos}/>
        </>
    );
};