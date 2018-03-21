import React, { Component } from 'react';
import Button from './Button';
import './Item.css'

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.increase = this.increase.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  render() {
    let className = 'Item';
    if (this.props.item.status === this.props.item.count) {
      className += ' Item-done'
    }
    return(
      <section className={className}>
        <section>
          {this.props.item.name}
        </section>
        <section className="Item-stats">
          <section className="Item-count">
            <section>
              {this.props.item.status}
            </section>
            /
            <section>
              {this.props.item.count}
            </section>
          </section>
          <section className="Item-actions">
            <Button text='up' click={this.increase}/>
            <Button text='remove' click={this.onRemove}/>
          </section>
        </section>
      </section>
    );
  }

  increase() {
    if (this.props.item.status <  this.props.item.count) {
      this.props.store.dispatch({ type: 'UP_NUMBER', id: this.props.item.id});
    }
  }

  onRemove() {
    this.props.store.dispatch({ type: 'REMOVE_ITEM', id: this.props.item.id});
  }
}