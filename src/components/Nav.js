import React from 'react';

class Nav extends React.Component {
  render(){
    return(
        <nav className="nav-home">
            <brand>
                Observatório Animal
            </brand>
            <ul>
                <li>Home</li>
                <li>Contato</li>
                <li>Quem Somos</li>
            </ul>
        </nav>
    )
  }
}

export default Nav;