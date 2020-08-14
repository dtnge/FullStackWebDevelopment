import React from 'react';
import Navbar from './Navbar';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../images/html-css-javascript.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/react.png';
import MouseParticles from "react-mouse-particles";

const useStyles = makeStyles({
  mainContainer: {
    background: 'transparent',
    heigth: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem',
    margin: '5rem auto',
    borderRadius: "0.5rem",
  },
});

const Portfolio = () => {
  const styleClass = useStyles();
  return (
    
    <Box component="div" className={styleClass.mainContainer}>
      <Navbar />
      <MouseParticles 
                g={5}
                color="random"
                cull="MuiSvgIcon-root,MuiButton-root"
                level={8}
                />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={styleClass.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project information
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={styleClass.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project information
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            
          </Card>
        </Grid>
        {/* Project 3 */}

        <Grid item xs={12} sm={8} md={6}>
          <Card className={styleClass.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project information
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            
          </Card>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Portfolio;
