import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useContext} from "react";
import UserContext from "../../context/UserContext";
import {bookBookingRequest} from "../../services/api";

const BookingCard = (props) => {
    const {user} = useContext(UserContext);

    const makeABooking = async  e => {
        e.preventDefault();

        bookBookingRequest(props.data.id, user.access_token).then(response => {
            console.log("Response: ", response);
        }).catch(e => {
            console.log("Error: ", e);
        })

    }

    return (
        <Card sx={{
            maxWidth: 275,
            margin: "2rem"
        }}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {props.data.creator.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.data.title}
                </Typography>

                <Typography variant="body2">
                    {props.data.description}
                </Typography>

                <Typography variant="body2">
                    {props.data.bookingDate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={makeABooking} size="small">Book</Button>
            </CardActions>
        </Card>
    )
}
export default BookingCard;