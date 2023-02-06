import React, {Fragment} from "react";
import classes from './Header.module.css'
import foodsImage from '../assets/ghibli-foods-1.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Ghibli Foods</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodsImage} alt="bubur"/>
            </div>
        </Fragment>
    )
}

export default Header