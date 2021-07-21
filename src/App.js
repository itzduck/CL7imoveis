import Routes from './routes'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function App() {
  return (
    
    <Routes>
      
              <AnchorLink href='#home'>Home</AnchorLink>
              <AnchorLink href='#galeria'>Galerias</AnchorLink>
              <AnchorLink href='#contatos'>Contatos</AnchorLink>
      
    </Routes>
  );
}

export default App;
