import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';

import Header from '../../components/Header';

import SearchBar from './components/SearchBar';

import {Link} from 'react-router-dom';

import {Wrapper,HeadTitle} from './style';


@inject('TopicStore')
@observer
class Topics extends Component {
  constructor(props){
    super(props);
    this.state={
      topics : []
    }
  }

  handleSubmit  () {
    const keyword = this.keywordInput.value;
    let arr=this.props.TopicStore.queryTopicByKeyWord(keyword);
    this.setState({
      topics :  arr
    })
  }
  componentDidMount(){
    this.props.TopicStore.getTopicList();
  }
  render() {

    let topics=this.state.topics;
    
    /*
    <input type="text" ref={(input) => {this.keywordInput = input}}></input>
    <button type="button" onClick={this.handleSubmit.bind(this)}>Add Shoe</button>

    <h2>总共{topics.length}篇文档</h2>
    */


    return (
      <Wrapper>
        <Header/>

        <HeadTitle>
          cnode社区文章查询
        </HeadTitle>

        <SearchBar/>
        <ul>
          {topics.map((topic, index) => {
            return (
              <li key={topic.id}>
              {index}<Link to="/detail/{topic.id}">{topic.title}</Link>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    );
  }
}

export default Topics;
