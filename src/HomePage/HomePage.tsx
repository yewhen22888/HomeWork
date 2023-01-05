import Navbar from "./NavbarHomePage/NavbarHomePage";
import s from "./HomePage.module.css"
import DialogsHomePage from "./DialogsHomePage/DialogsHomePage";

const HomePage = () => {
    return (
        <div className={s.NavbarWraper}>
            <div className={s.Navbar} ><Navbar /></div>
            <div className={s.Dialogs}><DialogsHomePage   /></div>
        </div>
        
    )
}


export default HomePage;