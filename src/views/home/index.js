import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import Header from '../../components/Header';
import PrdCartList from '../../components/PrdCartList';
import CollectPrdList from '../../components/CollectPrdList';

import {Wrapper} from './style';

@inject('ProductStore')
@observer
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header></Header>
        <CollectPrdList></CollectPrdList>
        <PrdCartList></PrdCartList>
      </Wrapper>
    );
  }
}

export default Home;
