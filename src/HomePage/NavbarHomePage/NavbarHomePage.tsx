import { NavLink } from 'react-router-dom'
import s from './NavbarHomePage.module.css'


let TaskName = [
    { Name: 'Dimych', id: '1' },
    { Name: 'Rusik', id: '2' },
    { Name: 'Romchik', id: '3' },
    { Name: 'Robert', id: '4' },
    { Name: 'Lyasik', id: '5' }

]

const Navbar = () => {

    return (
        <div>
            {TaskName.map(el => {

                let path = "/HomePage/" + el.id

                return (
                    <div ><NavLink className={s.item} to={path}>
                        <div className={s.logo}>
                            <img src="https://i.pinimg.com/564x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg" />
                        </div>
                        <div className={s.active}>
                            {el.Name}
                        </div></NavLink>
                    </div>

                )
            })}
        </div>
    )
}
export default Navbar;