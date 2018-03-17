import React, { Component } from 'react';
import Item from './Item';
import NewItem from './NewItem';
import './ItemList.css';

export default class ItemList extends Component {
  render() {
    const list = this.props.store.getState()
      .map(item =>
        <Item
          store={this.props.store}
          key={item.id}
          item={item}
        />
      );

    return (
      <section className="ItemList">
        <NewItem store={this.props.store} />
        <section>
          {list}
        </section>
      </section>
    );
  }
}