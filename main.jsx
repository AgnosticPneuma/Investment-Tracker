import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import UseStyles from './style'
 
const main = () => {
    const classes=UseStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Add Investment"/>
            <CardContent>
                <Typography align ='center' variant='h5'>Total Balance Rs 500</Typography>
                <Divider/>
                {/* FORM */}
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    {/* LIST */}
                    </Grid>
                </Grid>
            
            </CardContent>
        </Card>
    )
}

export default main
