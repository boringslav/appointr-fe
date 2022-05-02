import {useContext} from "react";
import Box from "@mui/material/Box";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import StyledLink from "../StyledLink/StyledLink";
import UserContext from "../../../context/UserContext";

const NavbarLoggedIn = () => {
    const {setUser} = useContext(UserContext);

    const logout = (e) => {
        e.preventDefault();
        setUser(null);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Appointr
                    </Typography>
                    <StyledLink to='/bookings'>
                        <Button color="inherit">Bookings</Button>
                    </StyledLink>
                        <Button onClick={logout} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavbarLoggedIn