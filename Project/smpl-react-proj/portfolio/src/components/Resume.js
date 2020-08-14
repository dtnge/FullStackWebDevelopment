import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import MouseParticles from "react-mouse-particles";

//stylesheet
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#454545",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #ea6a91",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #ed80a2",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#f6c3d3 #f6c3d3 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#ed80a2",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #f6c3d3 #f6c3d3",
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "15rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#e43d70",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 0.5rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      }
    }
  },
  heading: {
      color: "#e43d70",
      padding: "3rem 0",
      textTransform: "uppercase"
  },
  subHeading: {
      color: "white",
      padding: "0",
      textTransform: "uppercase"
  }
}));

const Resume = () => {
  const styleClass = useStyle();
  return (
    <Fragment>
    <MouseParticles 
                g={5}
                color="random"
                cull="MuiSvgIcon-root,MuiButton-root"
                level={8}
                />
      <Navbar />
      <Box component="header" className={styleClass.mainContainer}>
        <Typography variant="h4" align="center" className={styleClass.heading}>
          Career Timeline
        </Typography>
        <Box component="div" className={styleClass.timeLine}>
          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >2019 - 2020
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Software Developer</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>asBuilt Ltd.</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>1. Front-end development of Paylab, Calander tracking, visualizin car travel (speed, time and no. of trips) using React JS. A payway for the company specific client.</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>2. Scene creation and automation using C# program and Unit Game Engine</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>3.  Quality Assurance (QA) for the JavaScript project using Python library and JEST</Typography>
              <Typography variant="subtitle1" style={{color: "#ed8087"}}>Skills Used: ReactJS, C#, Unity, Python, JavaScript, Docker, Azure cloud</Typography>
          </Box>
          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >August (2019)
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Graduation</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>University of Auckland</Typography>
              <Typography variant="h6" align="center" style={{color: "#f6c3d3"}}>Master of Information Technology</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >March - May (2019)
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Software Developer Intern</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>asBuilt Ltd.</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>1. Scene creation and automation of BIM models using C# programming in unity</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>2. Game programming logic, Unity work flow</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>3. Complete working model viewer (using Unity) like revit to fuel and automate IoT data</Typography>
              <Typography variant="subtitle1" style={{color: "#ed8087"}}>Skills Used: C#, Unity Game Engine, Revit, 3ds max, BIM models</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >2018 - 2019
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Software Engineer Intern</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>Nyriad Ltd.</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>1. 10 weeks internship program. Includes working with different department </Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>2. Week 1-3 (software Development): Challenge to create conway's game of life using CUDA (parallel programming)</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>3. Week 4-6 (Quality Assuarance): Testing  using Selenium and Python library </Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>4. Week 7-10 (Research Project): Create a protocol (way to ) to communicate with different container images using C++ </Typography>
              <Typography variant="subtitle1" style={{color: "#ed8087"}}>Skills Used: CUDA, Docker, Python (Selenium), Gitlab, Jenkins</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >2018
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Block Chain Developer</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>Mannabase</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>1. Qt-wallet Development using C++</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>2. Part-time developer</Typography>
              <Typography variant="subtitle1" style={{color: "#ed8087"}}>Skills Used: C++, Cryptography concepts, Github</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >July 2017
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Start of Master Degree</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>University of Auckland</Typography>
              <Typography variant="h6" align="center" style={{color: "#f6c3d3"}}>Master of Information Technology</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >2016 - 2017
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Front-end Developer</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>BLJ+ Partner</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>1. Project specific front end development using JavaScript</Typography>
              <Typography variant="subtitle1" style={{color: "#f6c3d3"}}>2. Platform to showcase construciton project with contents like video, 3D models of the project and Timeline using Vanilla JS</Typography>
              <Typography variant="subtitle1" style={{color: "#ed8087"}}>Skills Used: HTML, VanillaJS, Adobe Photoshop, stylesheet</Typography>
          </Box>

          <Typography
            variant="h5"
            className={`${styleClass.timeLineYear} ${styleClass.timeLineItem}`}
          >2012 -2016
          </Typography>
          <Box component="div" className={styleClass.timeLineItem}>
              <Typography variant="h5"  align="center" className={styleClass.subHeading}>Bachelor Degree</Typography>
              <Typography variant="h6" align="center" style={{color: "#ed80a2"}}>Anna University</Typography>
              <Typography variant="h6" align="center" style={{color: "#f6c3d3"}}>B.E Computer Science Engineering</Typography>
          </Box>
          
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resume;
