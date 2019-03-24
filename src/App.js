import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
/**
 * COMPONENTS
 */
import Menu from './components/Menu/MenuContainer';
import Container from './components/Container/Container';
import Error from './components/Error/Error';
import ErrorContainer from './components/Error/ErrorContainer';
import Productos from './components/Productos/ProductosContainer';
import UpdateProd from './components/ProductosForm/ProductosFormContainer'
import InsertProd from './components/ProductosForm/ProductosFormContainer'

const Categorias = () => <h1>Categorias</h1>
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorContainer>
          <Menu />
          <Container>
            <Switch>
              <Route exact path="/productos" component={Productos} />
              <Redirect exact from="/" to="/productos" />
              <Route path="/productos/create" component={InsertProd} />
              <Route path="/productos/update/:id" component={UpdateProd} />
              <Route path="/categorias" component={Categorias} />
              <Route component={Error} />
            </Switch>
          </Container>
        </ErrorContainer>
      </div>
    );
  }
}

export default App;
