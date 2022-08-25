import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import InputForm from './features/task/InputForm';
import TaskList from './features/task/TaskList';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />
      <InputForm/>
      <TaskList />
    </div>
  );
}

export default App;
