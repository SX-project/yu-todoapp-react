import React from "react";

export const IncompleteTodos = (props) => {

    const style = {
        backgroundColor: "lightgreen",
        width: "400px",
        minHeight: "200px",
        padding: "5px",
        margin: "8px",
        borderRadius: "8px",
    }

    const { onClickComplete, onCLickDelete, incompleteTodos} = props;
    return(
        <div style={style} className = "incomplete-area">
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
    );

};