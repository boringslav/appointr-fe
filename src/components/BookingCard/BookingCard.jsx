import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const BookingCard = (props) => {

console.log("Props", props)

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
                <Button size="small">Book</Button>
            </CardActions>
        </Card>
    )
}
export default BookingCard;