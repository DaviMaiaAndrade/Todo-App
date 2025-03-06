import React from "react";
import './pageHeaderStyle.css';

export default props => (
    <div>
        <header className="title">
            <h2>{props.name}</h2>            
        </header>
        <div  className="subtitle">
            <small>{props.small}</small>
        </div>        
    </div> 
)
