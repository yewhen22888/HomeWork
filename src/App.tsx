
import { useState } from 'react';
import s from './App.module.css';
import Header from './Header/Header';
import UserPage from './UserPage/UserPage';
import { tasktype } from './UserPage/UserPage'

function App() {



  let [Task, setTask] = useState([{ id: 1, Name: '', disabled: false }]);

  function addName(Name: string) {
    let changeTask = { id: 1, Name: Name, disabled: true };
    let Tasks = [changeTask]
    setTask(Tasks)
  }

  return (
    <div>
      <Header />
      <UserPage task={Task} addName={addName}/>
    </div>

  )
}




export default App;
function v1(): any {
  throw new Error('Function not implemented.');
}

