import React from "react";

export const CompleteTodos = (props) => {

    const style = {
        backgroundColor: "yellow",
        width: "400px",
        minHeight: "200px",
        padding: "5px",
        margin: "8px",
        borderRadius: "8px",
    }

    const { onClickReturn, completeTodos} = props;
    return(
        <div style={style} className = "complete-area">
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
    );

};