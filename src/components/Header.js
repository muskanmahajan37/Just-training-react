import React from "react";
import Li from'./Li';
import "./Header.css";

import MenuIcon from './MenuIcon';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="./logo.png" alt="facebook logo"></img>
                <input type="search" placeholder="Pesquise no Facebook"></input>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <Li img="./logo.png" alt="logo">Página Inicial</Li>
                        <Li img="./logo.png" alt="logo">Amigos</Li>
                        <Li img="./logo.png" alt="logo">Watch</Li>
                        <Li img="./logo.png" alt="logo"></Li>
                    </ul>
                </nav>
            </div>
            <div className="currentUser">
                <div className="user">
                    <img src="./perfil.JPG" alt="perfil"></img>
                    <span>Victor</span>
                </div>
                <MenuIcon img="./logo.png"/>
                <MenuIcon img="./logo.png"/>
                <MenuIcon img="./logo.png"/>
                <MenuIcon img="./logo.png"/>
            </div>
        </header>
    );
};

export default Header;
