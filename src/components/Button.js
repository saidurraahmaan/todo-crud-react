import React from "react";

const Button = ({color,text,onclick})=>{
    return (
        <button
            onClick={onclick}
            style={{backgroundColor:color}}
            className='btn'
        >
            {text}
        </button>
    );
}
Button.defaultProps ={
    color:"steelblue",
}


export default Button;