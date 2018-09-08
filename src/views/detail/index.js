import React, { Component } from 'react';
// Needed to allow our component to use store and observe changes to store
import {observer, inject} from 'mobx-react';

import {DetailWrap} from './style';

import { Icon } from 'antd';

@inject('TopicStore')
@observer
class Detail extends Component {
  constructor(props) {
    super(props);
    this.topic = props.location.state.data;
  } 
  backPage(){
    window.history.go(-1);
  }
  render() {
    let topic=this.topic;
    return (
      <DetailWrap>
        <div className="header">
          <Icon type="left" style={{ fontSize: '28px', color: '#fff',cursor:"pointer" }} onClick={this.backPage.bind(this)}/>
        </div>
        <div className="body">
          <h2>{topic.title}</h2>
          <div className="info">{topic.author.loginname} 发表于 {topic.create_at} </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: topic.content }} />
        </div>
      </DetailWrap>
    );
  }
}

export default Detail;
