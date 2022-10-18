import React from 'react'
import styled from 'styled-components';

const ToDoList = (data) => {

    return (
        <div>
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
                        className="btn btn-danger btn-sm"
                        onClick={(event) => data.removeTodo()}
                    >
                        x
                    </button>
                </span>
            </li>

        </div>
    )
}

export default ToDoList;