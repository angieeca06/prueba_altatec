import React from "react";
import logo from '../Logo.png';

export class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid margenes">
                    <a  href='#' class="navbar-brand">
                        <img src={logo} width="100" height="50" alt='logo' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Historia</a>
                        </li>
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Capitulos</a>
                        </li>
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Personajes</a>
                        </li>
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Objetos</a>
                        </li>
                        <li class="nav-item">
                            <a  href='#'class="nav-link">Dimensiones</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;
