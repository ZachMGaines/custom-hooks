import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../details/CharacterDetail';
import Header from './Header';


export default function App() {
  return <section className="App">
    <Router>

      <Header />
      <Switch>
        <Route path="/" exact={true}
          render={routerProps => (
            <CharacterList {...routerProps} />
          )}
        />
        <Route path="/character/:id" exact={true}
          render={routerProps => (
            <CharacterDetails {...routerProps} />
          )}
        />
        <Redirect to="/" />
      </Switch>


    </Router>
  </section>;
}
