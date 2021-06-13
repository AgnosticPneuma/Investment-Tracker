import React from 'react'
import Main from './components/Main/main'
import Details from './components/details/details'
import {Grid} from '@material-ui/core'
import UseStyles from './style'  

const App = () => {
    const classes=UseStyles();
    return (
        <div>
            <div className='heading'>Investments.</div>
            <Grid  container spacing={0} alignItems='center' justify='center' style={{height:'100vh'}}>
            <Main/>
            </Grid>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height:'100vh'}}>
            <Grid className='largeCap'><Details title="Large Cap Holdings"/></Grid>
            <Grid className='smallCap'><Details title="Small Cap Holdings"/></Grid>
            <Grid className='swingPick'><Details title="Swing Picks"/></Grid>
            </Grid>
        </div>
    )
}

export default App
