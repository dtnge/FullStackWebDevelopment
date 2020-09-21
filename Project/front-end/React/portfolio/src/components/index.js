import React, { Fragment }from 'react'
import Navbar from "./Navbar";
import Header from './Header';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles";
import MouseParticles from "react-mouse-particles";

const useStyles= makeStyles({
    pCanvas:{ position: "absolute", opacity:"0.4"}
})

 const Home = () => {

    const styleClass = useStyles()

    return (
        <div>
            <Fragment> 
                <Navbar />
                <Header />
                <MouseParticles 
                g={5}
                color="random"
                cull="MuiSvgIcon-root,MuiButton-root"
                level={8}
                />
                <Particles
                canvasClassName={styleClass.pCanvas}
                params={{
                    particles:{
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke:{
                                width:1,
                                color: "#D4AF37"
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                ebnable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity:{
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.5,
                                sync: false
                            }
                        }
                    }
                }}/>
            </Fragment>
        </div>
    )
}

export default Home


//react-typed: npm ()