import * as React from 'react';
import Grid from '@mui/material/Grid';
import './styles.scss'

const Hero = () => {
    return (
        <div className="hero-container">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className="content-left">
                        <img src= "https://ressmedia.com/wp-content/uploads/2021/06/ANH-4-5.jpg" width={'100%'} height={'100%'}/>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="content-right">
                        <p>The top of the class in cleather</p>
                        <h2>LT 04 Premium Nappa in white</h2>
                        <p>Buttery soft and ultra-smooth</p>
                        <p>Get the look and make sure you</p>
                        <p>don't miss out on them. Again</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Hero