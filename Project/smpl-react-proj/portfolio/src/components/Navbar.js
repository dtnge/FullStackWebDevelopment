import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, ListItem, ListItemIcon, IconButton, ListItemText, Avatar, Divider, List, Box } from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import avatar from "../avatar.png";
import burger from "../burger.png";
import RightMenuSlider from "@material-ui/core/Drawer"

//css styles

const useStyles = makeStyles(theme=>({
    mSliderContainer:{
        width: 300,
        background: "#2F363D",
        height: "100%"
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    listItems:{
        color: "#00a0a0"
    },
    avatarButton:{
        display: "block",
        width: theme.spacing(6),
        height: theme.spacing(6)
    }
}));

//array for icons and lists
const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

 const Navbar = () => {
     //hook for sidebar initialize with false
     const [state, setState] = useState({
         right: false
     })
     //side bar state 
     const toggleMenu = (slider, open) => () =>{
         setState({...state, [slider]: open});
     }
     const styleClass = useStyles()

     //side bar
     const sideMenu = slider =>(
     <Box className={styleClass.mSliderContainer} component="div" onClick={toggleMenu(slider, false)}>
        <Avatar className={styleClass.avatar} src={avatar} alt="Sindu Sridharan"/>
        <Divider />
        <List>
            {menuItems.map((lstItem, key) =>(
                <ListItem button key={key} component={Link} to={lstItem.listPath}>
                    <ListItemIcon className={styleClass.listItems}>
                        {lstItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={styleClass.listItems} primary={lstItem.listText} />
                </ListItem>
             ))}
         
        </List>
 </Box>);
    return (
        <Fragment>
        
        <Box component="nav">
            <AppBar position="static" style={{background: "transparent"}}>
                <Toolbar>
                    <IconButton 
                    //to open sidebar
                    onClick={toggleMenu("right", true)}>
                    <Avatar className={styleClass.avatarButton} src={burger} alt="Sindu Sridharan"/>
                    </IconButton>
                    <RightMenuSlider anchor="left" 
                    open={state.right}
                    //to close sidebar
                    onClose={toggleMenu("right", false)}>   
                        {sideMenu("right")}
                    </RightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    </Fragment>
    )
}
export default Navbar

// all the material and icons except the logos are used from material-UI
// material-ui documentation: https://material-ui.com/api/accordion/

