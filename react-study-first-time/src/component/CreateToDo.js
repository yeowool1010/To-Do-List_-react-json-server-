import React from 'react'
import styled from 'styled-components';

const ToDoFrom =styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: aqua;

    .to-do-from {
        width : 100%;
        height: 100%;
    }
`

const CreateToDo = (data) => {

    return (
        <ToDoFrom>
            <div className='to-do-from'>
                투두 리스트 폼 들어가는 곳
            </div>
        </ToDoFrom>
    )
}

export default CreateToDo;