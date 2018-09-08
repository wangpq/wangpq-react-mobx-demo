import React, { PureComponent } from 'react';

import {observer, inject} from 'mobx-react';

import {SearchWraper,SearchTopics,SearchTips} from '../style';

import { Link } from 'react-router-dom';

import { Input,Button } from 'antd';


@inject('TopicStore')
@observer
class SearchBar extends PureComponent {
  constructor(props){
    super(props);
    this.searchKeyWord= "";
    this.state={
      topics : []
    }
  }

  searchInfo(){  
    if(this.searchKeyWord){  debugger
      let arr=this.props.TopicStore.queryTopicByKeyWord(this.searchKeyWord);
      this.setState({
        topics : arr
      })
    }else{
      //alert('请输入关键词哦~')
      this.setState({
        topics : this.props.TopicStore.topicList
      })
    }
  }

  onKeyDown(e){
    if(e.keyCode === 13){
      this.searchInfo();
    }
  }

  onChange(evt){
    
    this.searchKeyWord=evt.currentTarget.value.trim()
  }

  componentDidMount() {

    const {TopicStore} = this.props

    TopicStore.getTopicList(()=>{  
      this.setState({
        topics : TopicStore.topicList
      })
    });

  }


  render() {

   /*
    <input type="text" ref={(input) => {this.keywordInput = input}}></input>
    <button type="button" onClick={this.handleSubmit.bind(this)}>Add Shoe</button>
    */




    return (
      <div>
        <SearchWraper>
          <div className="item">
              <Input placeholder="请输入搜索关键字" onChange={this.onChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)}/>
          </div>
          <div className="item">
            <Button type="primary" icon="search" onClick={this.searchInfo.bind(this)}>搜索</Button>
          </div>

          </SearchWraper>
          {
            this.searchKeyWord ? 
              <div>
              <SearchTips>
                <h2 className="title">
                  关键词《<b className="keyword">{this.searchKeyWord}</b>》的搜索结果：
                </h2>
              </SearchTips>
          
              </div>
              :
            null
          }
    
          <SearchTopics>
          {
            this.state.topics.map(item => { 
                return (
                  <li key={item.id}>
                    <div className="search-container">
                      <Link to={{ pathname: `/detail/${item.id}/`, state: { data: item } }} key={item.id}>
                        <img className="search-item-pic" src={item.author.avatar_url} alt="" style={{display:"inline-block","maxWidth":"100%"}}/>
                        <p className="cartoon-title">{item.title}</p>
                      </Link>
                    </div>
                    <div>
                      作者：{item.author.loginname} &nbsp;&nbsp;
                      被浏览：{item.visit_count}次
                    </div>
                  </li>
                )
            })
          }
          
        </SearchTopics>
       
      </div>    

    );
  }
}

export default SearchBar;
