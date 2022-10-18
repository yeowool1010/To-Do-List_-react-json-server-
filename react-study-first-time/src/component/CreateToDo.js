import React from 'react'
import styled from 'styled-components';

const ToDoFrom =styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* background-color: aqua; */

    .to-do-from {
        cursor: pointer;
        display: flex;
        width : 100%;
        height: 100%;
    }


    .input {
        width: 90%;
    }

    .button {
        /* display: block; */
        /* position: relative; */
        /* float: left; */
        border: 0ch;
        cursor: pointer;
        width: 120px;
        padding: 0;
        margin: 10px 20px 10px 0;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        color: #FFF;
        border-radius: 5px;
        transition: all 0.2s ;
    }
    .btnLightBlue {
      background: #5DC8CD;
    }
    .btnLightBlue.btnPush {
         box-shadow: 0px 5px 0px 0px #1E8185;
    }
    .btnPush:hover {
        margin-top: 15px;
        margin-bottom: 5px;
    }
    .btnLightBlue.btnPush:hover {
  box-shadow: 0px 0px 0px 0px #1E8185;
}
`

const CreateToDo = (data) => {
    // console.log(data)
    return (
        <ToDoFrom>
            <from className='to-do-from'>
                <div>
                    <label htmlFor="">오늘의 총알</label>
                    <input 
                        className='input'
                        type="text"
                        name='todo'
                        id='todo'
                        value={data.newTodoValue}
                        onChange={(event) => data.handleOnChange(event)}
                        />
                </div>
                <button 
                    className="button btnPush btnLightBlue" 
                    type="submit"
                    onClick={(event) => data.handleSubmit(event)}
                    >
                        ToDo 장전
                </button>
            </from>
        </ToDoFrom>
    )
}

export default CreateToDo;