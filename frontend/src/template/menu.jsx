import React from "react";
import './menuStyle.css';

export default props => (
    <nav className="navbarTodo">
        <div className="containerMenu">
            <div className="navbarIcn">
                <a className="icnTodo" href="#/todos">
                    <i className="fa fa-calendar-check-o calendarIcon"></i>
                    <div className="descriptionTodo">TodoApps</div> 
                </a>
            </div>

            <div id="navbar" className="navbarOptions">
                <li><a href="#/todos">Tarefas</a></li>                
                <li><a href="#/about">Sobre</a></li>
            </div>
        </div>
    </nav>
)
