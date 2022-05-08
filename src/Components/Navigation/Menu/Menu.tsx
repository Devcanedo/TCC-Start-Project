import React from 'react';
import styled from 'styled-components';

/*const Nav = styled.nav`

`;*/

const Ul = styled.ul`
 align-items: center;
 display: flex;
`;

const Li = styled.li`
 list-style-type: none;
  padding: 0 20px;
   a {
    color: $dark;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    transition: .2s ease;
     &:hover {
       color: $dark-grey;
     }
    }
`;

function Menu() {
  const rotas = [{
   label: 'Home',
   to: '/'
 }, {
   label: 'Aplicacoes',
   to: '/applications'
 }, {
   label: 'Sobre Nós',
   to: '/sobre'
 }];
 return(
    <nav>
     {/* <Logo /> */}
     <Ul>
      {rotas.map((rota, index) => (
       <li key={index}>
        <a href={rota.to}>
          {rota.label}
        </a>
       </li>
      ))}
     </Ul>
    </nav>
 );
}

export default Menu;