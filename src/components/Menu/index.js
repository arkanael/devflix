import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a herf="/">
                <img className='Logo' src={Logo} alt="Logo do devflix" />
            </a>

            <Button as="a" className="ButtonLink" herf="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;