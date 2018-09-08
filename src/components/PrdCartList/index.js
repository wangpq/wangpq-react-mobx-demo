import React, { Component } from 'react';

import {observer, inject} from 'mobx-react';

import {Wrapper,HeadTitle,TableWrap,CarTotalResult} from './style';

import { Button } from 'antd';


@inject('ProductStore')
@observer
class PrdCartList extends Component {
  
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
          label: "商品数量",
          prop: "count"
        }
      ],
      data: props.ProductStore.prdCartList
    }
  }
  
  deletePrdFromCar(evt){ 
    let item= JSON.parse( evt.currentTarget.parentNode.getAttribute("data-item") );
    this.props.ProductStore.deletePrdFromCar(item) ;
  }
  
  render() {
    const {ProductStore}=this.props;

    return (
      <Wrapper>

        <HeadTitle>我的购物车列表</HeadTitle> 

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
            <th>总价</th>   
            <th>操作</th> 
            </tr>
          </thead>
          <tbody>
            {
              ProductStore.prdCartList.map((item,index) => { 
                return (
                  <tr key={item.productNo}>
                    <td>{index+1}</td> 
                    <td>{item.productName}</td>
                    <td>{item.salePrice}</td>
                    <td>{item.count}</td>
                    <td>{item.totalPrice}</td>
                    <td><div data-item={JSON.stringify(item)} data-index={index}><Button type="danger" icon="minus" size="small" onClick={this.deletePrdFromCar.bind(this)}>删除</Button></div></td>
                  </tr>
                )
              })
            }
          </tbody>
        </TableWrap>

        <CarTotalResult>共{ProductStore.prdCartListLenth}类商品，总价{ProductStore.prdCartTotalPrice}元</CarTotalResult>

      </Wrapper>
    );
  }
}

export default PrdCartList;
