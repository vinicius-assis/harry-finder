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

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <GlobalStorage>
    <GlobalStyles />
    <Menu />
    <Router>
    <MobileMenu />
      <Switch>
        <Route path="/" exact render={() => <About />}/>
        <Route path="/movies" render={() => <Movies />}/>
        <Route path="/characters" render={() => <Characters />}/>
      </Switch> 
    </Router>
  </GlobalStorage>
)


export default App;
