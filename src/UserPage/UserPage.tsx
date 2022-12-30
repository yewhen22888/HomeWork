import s from './UserPage.module.css'
import React, { ChangeEvent, useState } from 'react'


export type tasktype = {
  id: number
  Name: string
  disabled: boolean
}

type Propstype = {
  task: Array<tasktype>
  addName: (Name: string) => void
}


const UserPage = (props: Propstype) => {

  const [NewTaskName, setNewTaskName] = useState('');
  const ValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.currentTarget.value)
  }
  const OnClichHandler = () => {
    props.addName(NewTaskName);
    
  }




  return (
    <div className={s.Page}>
      <img className={s.Logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJJSFcWEKr6nqzqWPn1KNSIqWTWJsiICKQLJFYQXIOjunf-nDlblfXPC3NNWGAz8HpsA&usqp=CAU" />
      <ul className={s.Input}>
        <div className={s.item}>
          User Name"{props.task[0].Name}"<button>x</button>
        </div>
        <div>
          <input disabled={props.task[0].disabled}
            placeholder='input to add User Name'
            value={NewTaskName}
            onChange={ValueChange} />
          <button onClick={OnClichHandler}>add</button>
        </div>


        {/* <div className={s.item}>User Number</div>
      <div><input placeholder='input to add User Number'/></div> */}

      </ul>
    </div>
  )
}

export default UserPage