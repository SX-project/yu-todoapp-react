import React, { useState }  from "react";
import ReactDom from "react-dom";
import "./styles.css";

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
            <div className = "input-area">
                <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className = "incomplete-area">
                <p className = "title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo, index) => {
                        return(
                            <div key = {todo} className = "list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                <button onClick={() => onCLickDelete(index)}>削除</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className = "complete-area">
                <p className = "title">完了したTODO</p>
                <ul>
                    {completeTodos.map((todo, index) => {
                        return(
                            <div key = {todo} className = "list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickReturn(index)}>戻す</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};