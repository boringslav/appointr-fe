import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import NavbarNotLoggedIn from "./NavbarNotLoggedIn/NavbarNotLoggedIn";
import NavbarLoggedIn from "./NavbarLoggedIn/NavbarLoggedIn";


const Navbar = () => {
    const {user, setUser} = useContext(UserContext);


    return (
        <>
            {user ? <NavbarLoggedIn/>
                : <NavbarNotLoggedIn/>}
        </>
    )
}
export default Navbar;