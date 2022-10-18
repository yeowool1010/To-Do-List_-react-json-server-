import React from 'react'
import styled from 'styled-components';
import ToDoList from './ToDoList';

const ToDoListBox = styled.div`
    
    .todo-ul {
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: baseline;
    }
`

const ToDoBox = (data) => {
// console.log(data)
    return (
        <ToDoListBox>
            <ul className='todo-ul' >
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
        </ToDoListBox>
    )
}

export default ToDoBox;