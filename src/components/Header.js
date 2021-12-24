import React from "react";
import Button from "./Button";

const Header=({title})=>{
    const onClick = (e)=>{
        console.log(e.target)
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text = "Add" onclick={onClick}/>
        </header>
    );
}


Header.defaultProps={
    title: 'Tasks Tracker',
};

// const headStyle = {
//     color:'red',
//     backgroundColor:'black'
// }


export default Header;