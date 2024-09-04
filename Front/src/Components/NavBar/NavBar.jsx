import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <div className="navbar">
            <img src="src/assets/img/logito.jpeg" alt="" />
            <a href="">Comida fav</a>
            <a href="">Gustos musicales</a>
            <a href="">Habilidades</a>
            <a href="">Hobbies</a>

            <input type="text" name="" id="" placeholder="Buscar.." />

            <button>Iniciar sesion</button>
            </div>
        </>
    );
}

export default NavBar;