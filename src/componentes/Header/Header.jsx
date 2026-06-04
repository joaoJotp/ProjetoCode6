import React from 'react';
import './Header.css';

function Header(){
    return(
        <>
        <header>
            <div className="container">
                
                {}
                <h1 id="logo"></h1>

                <nav>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Ebooks</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;