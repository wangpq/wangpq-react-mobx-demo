import React, { Component } from 'react';
// Needed to allow our component to use store and observe changes to store
import {observer, inject} from 'mobx-react';

import {Link} from 'react-router-dom';

import {HeaderWrap} from './style';

/*
We will "inject" the ShoeStore into this component. It arrives as a prop,
so you can access it with this.props.ShoeStore
there are examples below in the handleSubmit and the render functions
of how to use the store

it is important to also include @observer, as this makes sure our
component re-renders when the data inside the store (observable properties) change
*/
@inject('TopicStore')
@observer
class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </HeaderWrap>
    );
  }
}


export default Header;