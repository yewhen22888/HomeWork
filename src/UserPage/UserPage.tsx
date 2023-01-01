import s from './UserPage.module.css'
import React, { ChangeEvent, useState } from 'react'


export type tasktype = {
  id: number
  Name: string
  disabled: boolean
}

type Propstype = {
  TaskForName: Array<tasktype>
  TaskForNumber: Array<tasktype>
  addName: (Name: string) => void
  addNumber: (Name: string) => void
  RemoweName: () => void
  RemoweNumber: () => void
}


const UserPage = (props: Propstype) => {

  const [NewTaskName, setNewTaskName] = useState('');

  const ValueNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.currentTarget.value)
  }

  const [NewTaskNumber, setNewTaskNumber] = useState('')

  const ValueNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskNumber(e.currentTarget.value)
  }

  const OnClichNameHandler = () => {
    props.addName(NewTaskName);
    setNewTaskName('')
  }

  const OnClichNumberHandler = () => {
    props.addNumber(NewTaskNumber);
    setNewTaskNumber('')
  }



  return (
    <div className={s.Page}>
      <img className={s.Logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" />
      <ul className={s.Input}>
        <div className={s.item}>
          User Name"{props.TaskForName[0].Name}"<button onClick={props.RemoweName}>x</button>
        </div>
        <div>
          <input disabled={props.TaskForName[0].disabled}
            placeholder='input to add User Name'
            value={NewTaskName}
            onChange={ValueNameChange} />
          <button onClick={OnClichNameHandler} disabled={props.TaskForName[0].disabled}>add</button>
        </div>


        <div className={s.item}>User Number"{props.TaskForNumber[0].Name}"<button onClick={props.RemoweNumber}>x</button></div>
        <div><input disabled={props.TaskForNumber[0].disabled}
          placeholder='input to add User Name'
          value={NewTaskNumber}
          onChange={ValueNumberChange} />
          <button onClick={OnClichNumberHandler} disabled={props.TaskForNumber[0].disabled}>add</button>
        </div>

      </ul>
    </div>
  )
}

export default UserPage