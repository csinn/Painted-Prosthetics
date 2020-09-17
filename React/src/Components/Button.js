import React from 'react'
import './Button.css'
import { Link } from "react-router-dom";

export const Button = ({
    children,
    type,
    onClick,
}) => {
    return(
        <Link to='/login'
            className={'btn btn--primary btn--medium desktop-only'} 
            onClick = {onClick}
            type= {type}
            >
            {children}</Link>
    )
}