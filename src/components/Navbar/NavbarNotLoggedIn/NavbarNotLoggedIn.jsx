import Box from "@mui/material/Box";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import StyledLink from "../StyledLink/StyledLink";
const NavbarNotLoggedIn = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Appointr
                    </Typography>
                    <StyledLink to='/sign-in'>
                        <Button color="inherit">Sign In</Button>
                    </StyledLink>
                    <StyledLink to='/sign-up'>
                        <Button color="inherit">Sign Up</Button>
                    </StyledLink>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavbarNotLoggedIn;