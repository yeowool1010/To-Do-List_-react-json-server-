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
    // console.log(data)
    return (
        <ToDoFrom>
            <div className='to-do-from'
                onSubmit={(event) => data.handleSubmit(event)}
            >
                <div>
                    <label htmlFor="">Enter Todo</label>
                    <input 
                        className=''
                        type="text"
                        name='todo'
                        id='todo'
                        value={data.newTodoValue}
                        onChange={(event) => data.handleOnChange(event)}
                        />
                </div>
                <button className="submit-btn" type="submit">ToDo 장전</button>
            </div>
        </ToDoFrom>
    )
}

export default CreateToDo;