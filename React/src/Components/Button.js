import React from 'react'
import './Button.css'

export const Button = ({
    children,
    type,
    onClick,
}) => {
    return(
        <button 
            className={'btn btn--primary btn--medium'} 
            onClick = {onClick}
            type= {type}
            >
            {children}</button>
    )
}