import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Landscape from './pages/Landscape';
import Macro from './pages/Macro';
import Header from './components/Header';
import store from './store/store';
import './App.css';
import Footer from './components/Footer';
import Nature from "./pages/Nature";

class App extends Component {
  render() {
    const containerStyle = {
      padding: '10px',
      maxWidth: '1200px'
    };
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Router>
              <div>
                <Header/>
                <Container style={containerStyle}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/macro" component={Macro}/>
                  <Route path="/landscape" component={Landscape}/>
                  <Route path="/nature" component={Nature}/>
                </Container>
              </div>
              <Footer/>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
