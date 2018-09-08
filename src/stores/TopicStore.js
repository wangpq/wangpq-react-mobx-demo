import { observable, action, computed } from 'mobx';

import axios from 'axios'

class TopicStore {

  @observable topicList = [];

  @computed get topicListLenth() {
    return this.topicList.length;
  }

  @action addTopicItem = (prdItem) => {
    this.topicList.push(prdItem);
  }

  @action queryTopicByKeyWord = (keyword) => { 
    return this.topicList.filter(topic =>topic.title.indexOf(keyword)>-1 );
  }

  @action getTopicList = (fn) => {
    axios.get('https://cnodejs.org/api/v1/topics')
    .then( (response)=> { 
      if(response.status===200){ 
        this.topicList=response.data.data;
        fn && fn();
      }
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

}


const topicStore = new TopicStore();

export default topicStore;
