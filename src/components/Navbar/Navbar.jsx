import {useContext} from 'react';
import UserContext from "../../context/UserContext";
import NavbarNotLoggedIn from "./NavbarNotLoggedIn/NavbarNotLoggedIn";



const Navbar = () => {
    const user = useContext(UserContext);


return (
    <NavbarNotLoggedIn/>
)
}
export default Navbar;