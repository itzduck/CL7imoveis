import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class nav extends React.Component{
    render(){
      return(
        <div className="nav">
              <AnchorLink href='#sobre'>Sobre</AnchorLink>
              <AnchorLink href='#galerias'>Galerias</AnchorLink>
              <AnchorLink href='#contatos'>Contatos</AnchorLink>
        </div>

      );
    }
}
