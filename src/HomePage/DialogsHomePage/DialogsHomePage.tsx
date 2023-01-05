import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

let task = [
    { id: 1, message: 'So,are you learning react?' },
    { id: 2, message: 'Where is my many Jony?' },
    { id: 3, message: 'I sell snus' },
    { id: 4, message: 'hi i rober' },
    { id: 5, message: 'you website wery nise!' }

]


const DialogsHomePage = () => {
    return (
        <div>
            {task.map((t) => {
                return (
                    <div>
                        {t.message}
                    </div>

                )
            })}
        </div>
    )
}
export default DialogsHomePage