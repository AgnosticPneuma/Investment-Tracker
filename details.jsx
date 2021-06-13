import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import UseStyle from './style';

const details = ({title}) => {
    const classes=UseStyle();
    if( title==='Large Cap Holdings'){
    return (
        <Card className={classes.largeCap}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant ="h6"> Rs 500</Typography>
                {/* <Doughnut data="DATA"></Doughnut> */}
            </CardContent>
        </Card>
         
    )
}
else if( title==='Small Cap Holdings'){
    return (
        <Card className={classes.smallcap}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant ="h6"> Rs 5000</Typography>
                {/* <Doughnut data="DATA"></Doughnut> */}
            </CardContent>
        </Card>
        
    )
}
else if( title==='Swing Picks'){
    return (
        <Card className={classes.swingPick}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant ="h6"> Rs 503</Typography>
                {/* <Doughnut data="DATA"></Doughnut> */}
            </CardContent>
        </Card>
        
    )
}
}
    


export default details
