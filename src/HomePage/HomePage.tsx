import Navbar from "./NavbarHomePage/NavbarHomePage";
import s from "./HomePage.module.css"
import DialogsHomePage from "./DialogsHomePage/DialogsHomePage";
import { Route, Routes } from "react-router-dom";

let task = [
    { id: '0', message: 'test' },
    { id: '1', message: 'So,are you learning react?' },
    { id: '2', message: 'Where is my many Jony?' },
    { id: '3', message: 'I sell snus' },
    { id: '4', message: 'hi i rober' },
    { id: '5', message: ' you website wery nise!' }

]

let taskupgrade = task.map(el => <Route path={el.id} element={<DialogsHomePage message={el.message} />} />)

const HomePage = () => {
    return (

        <div className={s.NavbarWraper}>
            <Navbar />
            <div>
                <Routes>
                    {taskupgrade}
                </Routes>
            </div>
        </div>



    )
}


export default HomePage;