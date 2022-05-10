import React, {useContext, useState} from "react";
import UserContext from "../../context/UserContext";
import BookingsContext from "../../context/BookingsContext";
import {useNavigate} from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDateTimePicker} from "@mui/x-date-pickers";
import Button from "@mui/material/Button";

const EditBooking = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(new Date());
    const {user} = useContext(UserContext);
    const {bookings} = useContext(BookingsContext)
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();


    }


    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Edit Booking
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    autoFocus
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField
                    multiline
                    margin="normal"
                    required
                    fullWidth
                    name="Description"
                    label="Description"
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDateTimePicker
                        minDate={new Date()}
                        renderInput={(props) => <TextField sx={{mt: 1}} fullWidth {...props} />}
                        label="Date"
                        value={dateTime}
                        onChange={dateTime => setDateTime(dateTime)}
                    />
                </LocalizationProvider>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Update
                </Button>

            </Box>
        </Box>
    </Container>;
}
export default EditBooking;