import {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/system";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Navbar = () => {

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
                    <Button href="/sign-up" color="inherit">Sign Up</Button>
                </StyledLink>
            </Toolbar>
        </AppBar>
    </Box>
)

}
export default Navbar;