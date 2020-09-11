import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useNavigate  } from 'react-router';
import {DifficultyLevel} from './../API/FetchAPI';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 155,
    
  },
  paperSelect: {
    padding: theme.spacing(1),   
    width: 155,
   
  },
  
}));

export default function MainGrid() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [level, setLevel] = useState(DifficultyLevel.EASY);
  const { levelQuiz } = useContext(GlobalContext);
  const { updateLevel } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 id="category">Difficulty Level</h2>
        </Grid>
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={2}>
          <Paper className={(level === DifficultyLevel.EASY) ? classes.paperSelect : classes.paper}>

          <div id="cat1" onClick={ () => {setLevel(DifficultyLevel.EASY); updateLevel(DifficultyLevel.EASY)}} style={{ backgroundImage: `url(${require("./../images/easy.png")})` , backgroundSize: '150px 200px' }}  /> 
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={(level  === DifficultyLevel.MEDIUM) ? classes.paperSelect : classes.paper}>
          <div id="cat2" onClick={ () => {setLevel(DifficultyLevel.MEDIUM); updateLevel(DifficultyLevel.MEDIUM) }}  style={{ backgroundImage: `url(${require("./../images/med.png")})` , backgroundSize: '150px 200px' }}  />           
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={(level  === DifficultyLevel.HARD) ? classes.paperSelect : classes.paper}>
          <div id="cat3" onClick={ () => {setLevel(DifficultyLevel.HARD); updateLevel(DifficultyLevel.HARD); }}  style={{ backgroundImage: `url(${require("./../images/hard.png")})` , backgroundSize: '150px 200px' }} />           
          </Paper>
        </Grid>
       
        <Grid item xs={3}>
        <div id="divround" 
        style={{ backgroundImage: `url(${require("./../images/next.jpg")})` , backgroundSize: '60px 60px' }}
        onClick={() => {	navigate("/quiz");	}}>  </div>

        <div id="divround2"
        style={{ backgroundImage: `url(${require("./../images/back.jpg")})` , backgroundSize: '60px 60px' }}
        onClick={() => {	navigate("/");	}}>  </div>
        </Grid>
      </Grid>
    </div>
  );
}
