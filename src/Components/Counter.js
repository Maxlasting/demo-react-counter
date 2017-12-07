import React, { Component } from 'react';
import axios from 'axios';
import { Card, List } from 'antd';
import GoodsItem from './GoodsItem.js';
import ResultList from './ResultList.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsData: [],
      loading: true,
      nums: 0,
      totals: 0,
      expensive: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('/goods.json')
      .then((res) => {
        if(res.status === 200 && res.data.code === 0){
          this.setState({
            goodsData: res.data.data,
            loading: false
          })
        }
      })
    }, 2000);
  }
  handleChange(id, val){
    this.setState((prevState) => {
      let {goodsData} = prevState;
      goodsData = goodsData.map((item) => {
        if(item.id === id){
          let num = item.num = val;
          let total = num * item.price;
          item.total = total ? total : 0;
        }
        return item;
      });
      return {goodsData};
    }, this.handleComputed);
  }
  handleComputed(){
    let [nums, totals, expensive] = [0, 0, 0];
    let {goodsData} = this.state;
    for(let item of goodsData){
      if(!item.num) continue;
      nums += item.num;
      totals += item.total;
      if(expensive < item.price){
        expensive = item.price;
      }
    }
    this.setState({nums, totals, expensive});
  }
  render() {
    let {goodsData, loading, ...result} = this.state;
    let goodsItems = goodsData.map((item) => {
      return <GoodsItem key={item.id} {...item} handleChange={this.handleChange}/>
    });
    
    return (
      <Card title="商品计价" style={{ width: 480, margin: '30px auto' }} loading={loading}>
        <List>
          {goodsItems}
        </List>
        <ResultList {...result}/>
      </Card>
    );
  }

}

export default Counter;