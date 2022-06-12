import {alpha, styled} from "@mui/system";
import {AppBar, Button, InputBase, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import StyledLink from "../Navbar/StyledLink/StyledLink";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(236, 236, 236 ,1)",
    '&:hover': {
        backgroundColor: "rgba(236, 236, 236 ,1)",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const BookingsSubBar = (props) => {


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log("Enter Pressed");
        }
    }
    return (
        <>

            <Box sx={{flexGrow: 1}}>
                <AppBar color="inherit" position="static">

                    <Toolbar sx={{justifyContent: "space-between"}}>
                        <Typography>Hello, {props.user.email}</Typography>
                        <Box sx={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                            <Search onKeyDown={handleKeyPress}>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                            <StyledLink to="/bookings/new">
                                <Button color="primary">
                                    Create a Booking
                                </Button>
                            </StyledLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
export default BookingsSubBar;