import React, { Component } from 'react';
import Container from './components/Container/Container';

import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Counter/>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
