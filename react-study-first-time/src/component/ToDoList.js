import React from 'react'
import styled from 'styled-components';

const Done =styled.div `
    .done {
        color: gray;
    }
    .not-done {
        color: black;
        font-weight: 600;
    }

    .delete-btn {
        background-color: beige;
        transition: all ease 0.3s 0s;
        border: 0ch;
        border-radius: 50%;
    }
    .delete-btn:hover {
        background-color: pink;
    }
`

const ToDoList = (data) => {

    return (
        <Done>
            <li key={data.todo.id}>
                <input
                    type="checkbox"
                    onChange={() => data.toggleTodoDone()}
                    checked={data.todo.done}
                    value={data.todo.id}
                />
                <span className={data.todo.done ? "done" : 'not-done'}>
                    {data.todo.title}
                </span>
                <span className="delete-todo">
                    <button
                        className="delete-btn"
                        onClick={(event) => data.removeTodo()}
                    >
                        &#x274E;
                    </button>
                </span>
            </li>

        </Done>
    )
}

export default ToDoList;