import React from 'react';
// reset css
import GlobalStyles from './styles/GlobalStyles'

//components
import About from './components/About/index'
import Menu from './components/Menu';


const App = () => 
<>
  <GlobalStyles />
  <Menu />
  <About />
  <h1>Harry Finder!</h1>
</>


export default App;
