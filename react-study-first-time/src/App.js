import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Header from './component/Header';
import CreateToDo from './component/CreateToDo';
import ToDoBox from './component/ToDoBox';
import Footer from './component/Footer';

import axios from 'axios'



export class App extends Component {
  state = {
    newTodo: '',
    todos: [
      {
        id: '',
        title: '',
        done: false
      }
    ]
  }

  fetchTodos = () => {
    axios.get(`http://localhost:3001/todos`)
      .then(res => {
        const todos = res.data;
        this.setState({
          ...todos,
          todos
        });
      })
  }

  componentDidMount() {
    this.fetchTodos()
  }

  handleOnChange = (event) => {
    console.log(event.target.value)
    this.setState({
      newTodo: event.target.value,
      // id: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post(`http://localhost:3001/todos`, {
      title: this.state.newTodo,
      done: false
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          newTodo: '',
          todos: [
            ...this.state.todos,
            {
              title: res.data.title,
              done: res.data.done,
              id: res.data.id
            }
          ]
        })
      })
  }

  toggleTodoDone = (id, status) => {
    // // Delete data from backend 
    axios.patch(`http://localhost:3001/todos/${id}`, {
      done: !status
    }).then(res => {
      this.fetchTodos()
    })

  };

  removeTodo = id => {
    const todos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos });

    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(res => {
        console.log(res.data);

      })
  };

  allDone = (event) => {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      }
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <body>
        <CreateToDo
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
          newTodoValue={this.state.newTodo}
        />
        <ToDoBox
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          toggleTodoDone={this.toggleTodoDone}
        />
        <Btn>
          <button
            className='button btnPush btnLightBlue'
            onClick={this.allDone}  
          >
            사격 완료!
          </button>
        </Btn>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;

const Btn = styled.div `
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
        /* line-height: 50px; */
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