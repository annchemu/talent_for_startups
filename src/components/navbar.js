import React from "react";
import { useLocation} from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';  

function Navbar(){
    const location = useLocation();
    
    return(
        //display the navgation links in all components except signup
        !location.pathname.includes('/signup')  ? ( 
            <div className="navbar">
                <React.Fragment>
                    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Button size="small">Enroll</Button>
                        <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                        >
                        Talent for Startups
                        </Typography>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                        <Button variant="outlined" size="small" href="/signup">
                        Sign up
                        </Button>
                    </Toolbar>
                    <Toolbar
                        component="nav"
                        variant="dense"
                        sx={{ justifyContent: 'center'}}
                    >
                        <Link
                            color="inherit"
                            noWrap
                            variant="body2"
                            href='/'
                            sx={{ p: 1, flexShrink: 0 }}
                        >
                            Home
                        </Link>
                        <Link
                            color="inherit"
                            noWrap
                            variant="body2"
                            href='/about'
                            sx={{ p: 1, flexShrink: 0 }}
                        >
                            About Us
                        </Link>
                        <Link
                            color="inherit"
                            noWrap
                            variant="body2"
                            href='/contact'
                            sx={{ p: 1, flexShrink: 0 }}
                        >
                            Contact Us
                        </Link>
                    </Toolbar>
                </React.Fragment>
            </div>
        ): null
    )
}

export default Navbar;