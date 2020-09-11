import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useNavigate  } from 'react-router';
import { GlobalContext } from '../context/GlobalState';
import {Category} from './../API/FetchAPI';
import { url } from 'inspector';
import vehicles from './../images/vehicles.jpg';
import gk from './../images/gk.jpg';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Opacity } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  div: {
    opacity: 0.5,    
    '&:hover': {
      opacity: 1.0,
   },
  },
  
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 155,
    //height: 220,
  },
  paperSelect: {
    padding: theme.spacing(1),       
    width: 155,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MainGrid() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [cat, setCat] = useState('cat1');
  const { updateCategory } = useContext(GlobalContext);


  return (
    <div className={classes.root}
    style={{ backgroundImage: `url(${require("./../images/quiz.jpg")})` , backgroundSize: '1000px 350px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 id="category">select a category</h2>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={2}>
          <Paper className={(cat === 'cat1') ? classes.paperSelect : classes.paper}>

          <div className={classes.div}
            style={{ backgroundImage: `url(${require("./../images/gk.jpg")})` }}
            id="cat1" 
            onClick={ () => {setCat('cat1'); updateCategory(Category.GK)}} > 
            <h2 style={{ color: 'purple', marginBottom:'120px'}}> General Knowledge </h2>
           </div>  
          </Paper>
          <br/>
          <br/>
        </Grid>
        <Grid item xs={2}>
          <Paper className={(cat === 'cat2') ? classes.paperSelect : classes.paper}>
          <div className={classes.div}
            style={{ 
                    backgroundImage: `url(${require("./../images/science.jpg")})` ,
                    backgroundSize: '150px 200px'
                  }}
            id="cat2" 
            onClick={ () => {setCat('cat2'); updateCategory(Category.SN)}} >  
            <h2 style={{ color: 'maroon', marginBottom:'120px'}}> Science and Nature </h2>
          </div>  
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={(cat === 'cat3') ? classes.paperSelect : classes.paper}>
          <div  className={classes.div}
          style={{ backgroundImage: `url(${require("./../images/sports.jpg")})` , backgroundSize: '150px 200px' }}  
                id="cat3" onClick={ () => {setCat('cat3'); updateCategory(Category.SP)}}><h2>   </h2></div>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={(cat === 'cat4') ? classes.paperSelect : classes.paper}>
          <div className={classes.div}
          style={{ backgroundImage: `url(${require("./../images/vehicles.jpg")})` , backgroundSize: '220px 200px', backgroundRepeat: 'no-repeat'  }}  
          id="cat4" onClick={ () => {setCat('cat4'); updateCategory(Category.VH)}}> <h2 style={{ color: 'orange', marginBottom:'140px'}}> Vehicles </h2></div>
          </Paper>
        </Grid>
       {/*  <Grid item xs={2}>
        <Paper className={(cat === 'cat4') ? classes.paperSelect : classes.paper}>
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            4
          </Avatar>
        }
        
        title="Vehicles"
        
      />
      <CardMedia
        className={classes.media}
        image={gk}
        title="Paella dish"
      />
      
     
      </Card>
      </Paper>
        </Grid> */}
        <Grid item xs={2}>
         <div 
          style={{ backgroundImage: `url(${require("./../images/next.jpg")})` , backgroundSize: '60px 60px' }}  
         id="divround" onClick={() => {	navigate("/level");	}} />  
        </Grid>
      </Grid>
    </div>
  );
}
