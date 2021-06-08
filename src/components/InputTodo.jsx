import React from "react";

export const InputTodo = (props) => {

    const style = {
        backgroundColor: "aqua",
        width: "400px",
        padding: "7px",
        margin: "8px",
        borderRadius: "8px",
    }

    const { todoText, onChange, onClick, disabled}= props;

    return(
        <div style={style} className = "input-area">
            <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
            <button disabled={disabled}onClick={onClick}>追加</button>
        </div>
    );
};

