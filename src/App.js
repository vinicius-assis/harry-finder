import React from 'react';
// reset css
import GlobalStyles from './styles/GlobalStyles'
import { GlobalStorage } from './context/GlobalContext/index'

//components
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import About from './components/About/index'
import Characters from './components/Characters';
import Movies from './components/Movies';


const App = () => 
<GlobalStorage>
  <GlobalStyles />
  <Menu />
  <MobileMenu />
  {/* <About /> */}
  {/* <Characters /> */}
  <Movies />
</GlobalStorage>


export default App;
