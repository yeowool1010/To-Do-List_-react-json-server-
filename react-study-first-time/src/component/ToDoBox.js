import React from 'react'
import styled from 'styled-components';
import ToDoList from './ToDoList';

const ToDoBox = (data) => {
console.log(data)
    return (
        <div>
            < ul >
                {data.todos.map((todo) => (

                    <ToDoList
                        key={todo.id}
                        todo={todo}
                        toggleTodoDone={() => data.toggleTodoDone(todo.id, todo.done)}
                        removeTodo={() => data.removeTodo(todo.id)}
                    />
                ))
                }
            </ul>
        </div>
    )
}

export default ToDoBox;