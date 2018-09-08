import { observable, action, computed } from 'mobx';

import axios from 'axios'

class ProductStore {

  @observable productList = [];
  @observable prdCartList = [];

  @computed get productListLenth() {
    return this.productList.length;
  }

  @computed get prdCartListLenth() {
    return this.prdCartList.length;
  }

  @computed get prdCartTotalPrice() { debugger
    let totalPrice=0;
    this.prdCartList.forEach(item=>{
      totalPrice+=item.totalPrice;
    })
    return totalPrice;
  }


  @action addProductItem = (prdItem) => {
    this.productList.push(prdItem);
  }

  @action addProductToCart= (product) => { 
    let exist=false;

    let index=-1;

    exist=this.prdCartList.filter(item =>item.productNo==product.productNo ).length>0 ? true : false ;
  
    this.productList.forEach((item,idx)=>{
      if(product.productNo==item.productNo){ 
        index=idx;
        return false;
      }
    })

    if(exist){
  
      this.prdCartList.forEach((item,idx)=>{
        if(product.productNo==item.productNo){ 
          item.count+=1;
          item.totalPrice=item.salePrice*item.count;
          return false;
        }
      })

      this.productList[index].count-=1;
    }else{
      let prd=product;
      prd.count=1;
      prd.totalPrice=prd.salePrice*prd.count;
      this.prdCartList.push(prd);
      this.productList[index].count-=1;
    }
  }


  @action deletePrdFromCar= (product) => {
    this.prdCartList.forEach((item,index)=>{
      if(product.productNo==item.productNo){ 
        this.prdCartList.splice(index,1)
        return false;
      }
    })
  }


  @action getProductList = () => {
   
    axios.get('http://localhost:9093/api/getProductList')
    .then( (response)=> { debugger
      if(response.status===200 ){
        this.productList=response.data.data.result;
      }
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
}


const productStore = new ProductStore();

export default productStore;
