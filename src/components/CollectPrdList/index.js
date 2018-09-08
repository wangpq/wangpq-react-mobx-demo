import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';


import {Wrapper,HeadTitle,TableWrap} from './style';

import { Button } from 'antd';


@inject('ProductStore')
@observer
class CollectPrdList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      columns: [
        {
          label: '序号',
          prop: "productIndex",
        },
        {
          label: "名称",
          prop: "productName",
          width: 280
        },
        {
          label: "单价",
          prop: "salePrice"
        }, 
        {
          label: "是否有货",
          prop: "count"
        }
      ],
      data: []
    }
  }
  
  componentWillMount(){
    const {ProductStore}=this.props;
    ProductStore.getProductList();
  }

  addSelectedPrdToCar(evt){ 
    let item= JSON.parse( evt.currentTarget.parentNode.getAttribute("data-item") );
    //let index=evt.currentTarget.parentNode.getAttribute("data-index");
    this.props.ProductStore.addProductToCart(item) ;
  }

  render() {
    const {ProductStore}=this.props;

    return (
      <Wrapper>
     
        <HeadTitle>我的收藏商品列表</HeadTitle> 

        <TableWrap>
          <thead>
            <tr>
            {
              this.state.columns.map(item => {  
                return (
                  <th key={item.prop}>{item.label}</th> 
                )
              })
            }
            <th>操作</th> 
            </tr>
          </thead>
          <tbody>
            {
              ProductStore.productList.map((item,index) => { 
                  let disabled=item.count>0 ? false : true;
                  return (
                    <tr key={item.productNo}>
                      <td>{index+1}</td> 
                      <td>{item.productName}</td>
                      <td>{item.salePrice}</td>
                      <td>{item.count>0 ? "有" : "无"}</td>
                      <td><div data-item={JSON.stringify(item)} data-index={index}><Button type="default" icon="plus" size="small" disabled={disabled} onClick={this.addSelectedPrdToCar.bind(this)}>加入购物车</Button></div></td>
                    </tr>
                  )
              })
            }
          </tbody>
        </TableWrap>


      </Wrapper>
    );
  }
}

export default CollectPrdList;
