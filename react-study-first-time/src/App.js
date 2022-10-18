import React, { Component } from 'react';
import './App.css';

import Header from './component/Header';
import CreateToDo from './component/CreateToDo';
import ToDoBox from './component/ToDoBox';
import Footer from './component/Footer';

// import axios from 'axios'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <body>
        <CreateToDo>
          <ToDoBox/>
        </CreateToDo>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
