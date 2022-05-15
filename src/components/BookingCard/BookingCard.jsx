import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import {bookBookingRequest, deleteBookingRequest} from "../../services/api";
import Grid from "@mui/material/Grid";
import {useNavigate} from "react-router-dom";
import BookingsContext from "../../context/BookingsContext";

const BookingCard = (props) => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const makeABooking = async e => {
        e.preventDefault();

        bookBookingRequest(props.data.id, user.access_token).then(res => {
            props.setAreBookingsChanged(true);
        }).catch(e => {
            console.error("Error: ", e.message);
        })
    }
    const deleteBooking = async e => {
        e.preventDefault();

        deleteBookingRequest(props.data.id, user.access_token).then(response => {
            props.setAreBookingsChanged(true);
        }).catch(e => {console.error("Error: ", e.message)})


    }
    return (
        <Card sx={{
            maxWidth: 275,
            margin: "2rem"
        }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography sx={{fontSize: 12}} color="text.secondary" gutterBottom>
                            Company
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{fontSize: 14}} color="secondary.main" gutterBottom>
                            {props.data.creator.name}
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="h5" color="primary.dark">
                    {props.data.title}
                </Typography>

                <Typography variant="body2" color="secondary.light">
                    {props.data.description}
                </Typography>

                <Typography variant="body2">
                    {props.data.bookingDate}
                </Typography>

                {props.data.customer && (
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                customer:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{fontSize: 14}} color="text.primary">
                                {props.data.customer?.email}
                            </Typography>
                        </Grid>

                    </Grid>
                )}


            </CardContent>
            <CardActions>
                <Button onClick={makeABooking} size="small">Book</Button>
                {user.email == props.data.creator.email ? <>
                    <Button onClick={() => {navigate(`/bookings/edit/${props.data.id}`)}} size="small" color="warning">Edit</Button>
                    <Button onClick={deleteBooking} size="small" color="error">Delete</Button>
                </> : <> </>}
            </CardActions>
        </Card>
    )
}
export default BookingCard;