import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';

class App extends Component {
  constructor(props) {
    super(props);

    props.store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <section className="App">
        <ItemList store={this.props.store} />
      </section>
    );
  }
}

export default App;
