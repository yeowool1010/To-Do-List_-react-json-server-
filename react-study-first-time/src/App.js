import React, { Component } from 'react';
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
        />
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
