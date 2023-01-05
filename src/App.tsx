
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import UserPage from './UserPage/UserPage';
import { tasktype } from './UserPage/UserPage'


function App() {



  let [TaskForName, setTaskForName] = useState([{ id: 1, Name: '', disabled: false }]);

  function addName(Name: string) {
    let changeTask = [{ id: 1, Name: Name, disabled: true }];
    setTaskForName(changeTask)

  }

  function RemoweName() {
    let RemoweAdd = [{ id: 1, Name: '', disabled: false }];
    setTaskForName(RemoweAdd)
  }




  let [TaskForNumber, setTaskForNumber] = useState([{ id: 1, Name: '', disabled: false }]);

  function addNumber(Name: string) {
    let changeTask = [{ id: 1, Name: Name, disabled: true }];
    setTaskForNumber(changeTask)

  }

  function RemoweNumber() {
    let RemoweAdd = [{ id: 1, Name: '', disabled: false }];
    setTaskForNumber(RemoweAdd)
  }



  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>

          <Route path="/UserPage"
            element={<UserPage
              TaskForName={TaskForName}
              addName={addName}
              addNumber={addNumber}
              RemoweName={RemoweName}
              RemoweNumber={RemoweNumber}
              TaskForNumber={TaskForNumber} />} />

          <Route path="/HomePage/*" element={<HomePage />} />

        </Routes>
      </div>
    </BrowserRouter>

  )
}




export default App;


