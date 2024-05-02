import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Contact(){
    return(
        <div className="contact">
            <Grid align='center'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="images/mathyas-kurmann-fb7yNPbT0l8-unsplash.jpg"
                    title="green iguana"
                />
                <CardContent align="left">
                    <Typography gutterBottom variant="h5" component="div">
                    Reach us on
                    </Typography>
                        <LocalPhoneIcon/>
                    <Typography variant="body2" color="text.secondary" >
                         254720987123
                    </Typography>
                    <EmailIcon/>
                    <Typography variant="body2" color="text.secondary" align="left">
                        t4sprogram@t4s.com
                    </Typography>
                    <FmdGoodIcon/>
                    <Typography variant="body2" color="text.secondary" align="left">
                        Sample Building, Sample Road, Nairobi, Kenya
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Enroll</Button>
                    <Button size="small" href="/signup">Sign Up</Button>
                </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default Contact;
