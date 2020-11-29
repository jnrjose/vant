import React from 'react'
import {useWindowSize} from "react-use";
import ReusableHero from "../ReusableHero";



const desktopImages = {
    imageUrl: "url('/clientHero.png') top center / cover no-repeat",
    top: "0px",
    right: "190px",
    width: "100%",
    height: "100%",
    backgroundSize: "100%",
    header: "Our Client",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    gradient:
      "linear-gradient(90deg, #000000 13.96%, rgba(0, 0, 0, 0.95) 23.82%, rgba(0, 0, 0, 0.8) 35.21%, rgba(0, 0, 0, 0.6) 46.35%, rgba(0, 0, 0, 0.4) 65.21%, rgba(0, 0, 0, 0.3) 84.24%, rgba(46, 46, 56, 0) 100%); left  / contain no-repeat padding-box border-box",
};

const mobileImages = {
    imageUrl: "url('/clientHeroMobile.png') top center / cover no-repeat",
    top: "0px",
    right: "190px",
    width: "100%",
    height: "100%",
    backgroundSize: "100%",
    header: "Our Client",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    gradient: "rgba(0, 0, 0, 0.5)",
  };
const ClientsPage = () => {
    const {width} = useWindowSize();

    const images = width < "1025" ? mobileImages : desktopImages;
    

    
    
    
    return (
        <div className="client-container">
            <ReusableHero image={images} height="54rem"/>
        </div>
    )
}

export default ClientsPage

