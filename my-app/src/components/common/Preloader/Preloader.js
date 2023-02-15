import React from "react";
import PreloaderImage from "../../../assets/images/preloader/preloader.gif";
import s from "./Preloader.module.css"

const Preloader = (props) => {
    return (
        <div className={s.preloader__wrapper}>
            <img src={PreloaderImage}/>
        </div>
    )
}


export default Preloader;