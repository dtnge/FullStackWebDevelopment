import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core"
import avatar from "../avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";


//CSS Styles
const useStyles= makeStyles(theme => ({
    avatar:{
        width: theme.spacing(50),
        height: theme.spacing(35),
        margin: theme.spacing(1)
    },
    title:{
        color: "#00a0a0",
        fontSize: 45
    },
    subtitle:{
        color: "#00a0a0",
        marginBottom: "3rem",
        fontSize: 30
    },
    typedContainer:{
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        zIndex: "1",
    }
}))

const Header = () => {
    const styleClass = useStyles()
    return (
        <Box className={styleClass.typedContainer} >
            <Grid container justify="center" >
                <Avatar className={styleClass.avatar} src={avatar} alt="Sindu Sridharan" />
            </Grid>
            <Typography className={styleClass.title}  variant="h4">
                <Typed strings={["Sindu Sridharan"]} typeSpeed={40}/>
            </Typography>
            <br />
            <Typography className={styleClass.subtitle}  variant="h5">
                <Typed strings={["Web Development", "ReactJS", "Django", "MERN Stack", "C#"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}
export default Header;

//react-typed: npm library