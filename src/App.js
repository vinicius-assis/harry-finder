import React from 'react';
// reset css
import GlobalStyles from './styles/GlobalStyles'
import { GlobalStorage } from './context/GlobalContext/index'

//components
import About from './components/About/index'
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';


const App = () => 
<GlobalStorage>
  <GlobalStyles />
  <Menu />
  <MobileMenu />
  <About />
</GlobalStorage>


export default App;
