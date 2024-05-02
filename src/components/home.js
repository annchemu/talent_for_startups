import React from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Home(){
    return(
 
    <Box>
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#827DB9',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'images/marvin-meyer-SYTO3xs06fU-unsplash.jpg',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Welcome to Talent for Startups
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            This is a one-stop destination for startups to acquire essential digital skills and business management knowledge. Whether you're just launching your venture or seeking to scale it up, we have the resources you need to succeed in today's competitive landscape.
            </Typography>
            <Link variant="subtitle1" href="#">
            Kickstart your journey with us!
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    {/* FIRST GRID */}
    <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                    Courses for Every Stage
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    Our platform offers a diverse range of courses tailored to suit startups at various stages of their journey. From foundational courses covering digital marketing, website development, and social media management to advanced modules on financial planning, leadership, and growth hacking, we have something for everyone
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                    Continue reading...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image='images/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
                    alt="aother people"
                />
                </Card>
            </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                    Expert Instructors
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    Learn from industry experts and seasoned entrepreneurs who have successfully navigated the challenges of building and growing startups. Our instructors bring real-world experience and practical insights to the table, ensuring that you receive high-quality education that is directly applicable to your business.
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                    Continue reading...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image='images/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
                    alt="aother people"
                />
                </Card>
            </CardActionArea>
        </Grid>
    </Grid>
    {/* SECOND GRID */}
    <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                    Digital Marketing Essentials: Mastering the Online Landscape
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    A comprehensive course designed to equip learners with the fundamental skills needed to excel in the digital marketing realm. Covering topics such as search engine optimization (SEO), social media marketing, email marketing, and content strategy, this course offers a holistic understanding of key digital marketing channels. 
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                    Continue reading...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image='images/shridhar-gupta-dZxQn4VEv2M-unsplash.jpg'
                    alt="aother people"
                />
                </Card>
            </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                    Mastering Software Development: From Basics to Best Practices
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    A comprehensive course designed for aspiring software engineers. Covering fundamental concepts such as programming languages, data structures, and algorithms, the course provides a solid foundation for building robust and scalable applications. 
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                    Continue reading...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image='images/myhq-workspaces-VCoh27vHEh0-unsplash.jpg'
                    alt="aother people"
                />
                </Card>
            </CardActionArea>
        </Grid>
    </Grid>
    </Box>
)
}

export default Home;
