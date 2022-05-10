import React, {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import BookingsContext from "../../context/BookingsContext";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

import {Container, CssBaseline, Box, Typography, TextField} from "@mui/material";

import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDateTimePicker} from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import {editBookingRequest} from "../../services/api";

const EditBooking = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState(new Date());
    const {user} = useContext(UserContext);
    const {bookings} = useContext(BookingsContext)
    const navigate = useNavigate();
    const {bookingId} = useParams();


    useEffect(() => {
        const booking = bookings.filter(booking => booking.id == bookingId);
        setTitle(booking.title);
        setDateTime(booking.bookingDate);
        setDescription(booking.description);

    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await editBookingRequest(bookingId, {title, description, bookingDate: dateTime} ,user.access_token);
            navigate('/bookings');

        }catch (err) {
            console.error("Error updating a booking: ", err.message);
        }


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
                    label="Description"
                    name="Description"
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