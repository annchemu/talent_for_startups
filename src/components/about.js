import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function About(){
    return(
    <div className="about">
        <Grid container spacing={4} align='center'>
            <Grid item >
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                        Who we are
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Talent for Startups is your one-stop destination for startups to acquire essential digital skills and business management knowledge. Whether you're just launching your venture or seeking to scale it up, we have the resources you need to succeed in today's competitive landscape.
                        </Typography>
                    </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
            <Grid item >
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>

                    <CardContent sx={{ flex: 1 }}>
                    <img src="images/christina-wocintechchat-com-rCyiK4_aaWw-unsplash.jpg" alt="Aerial view of a workstation with laptops" width="450" height="300"/>
                        <Typography component="h2" variant="h5">
                        What we do
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        In addition to courses, we provide a wealth of practical resources to support your startup journey. From templates and toolkits for business planning and financial analysis to curated articles, podcasts, and webinars featuring industry trends and success stories, we equip you with the knowledge and tools you need to thrive.
                        </Typography>
                    </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
            <Grid item >
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                        Our impact
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Join a vibrant community of like-minded entrepreneurs who share your passion for innovation and growth. Connect with fellow members, ask questions, seek advice, and celebrate milestones together. Our community forums and networking events provide valuable opportunities to expand your professional network and forge meaningful partnerships.
                        </Typography>
                    </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        </Grid>
    </div>
    )
}

export default About;
