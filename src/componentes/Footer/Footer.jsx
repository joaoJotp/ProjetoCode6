import React from 'react';
import './Footer.css';
// 1. Importa o logo que está na mesma pasta do arquivo Footer.jsx
import logoImg from './logo.png'; 

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    
                    <div className="footer-logo">
                        <img src={logoImg} alt="Logo Code6" />
                    </div>
                    <p>&copy; Desenvolvido por: Code6 Ltda. Todos os direitos reservados 2026.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;