import React from 'react';
import { InputNumber, List } from 'antd';
import PropTypes from 'prop-types';

const ListItem = List.Item;

function GoodsItem(props){
  return (
    <ListItem style={{lineHeight: '32px'}}>
      <List.Item.Meta
         title={<a href="javascript:;" style={{ margin: '0 10px'}}>{props.name}:</a>}
       />
      <InputNumber
        style={{textAlign: 'center', width: 180}}
        min={0}
        defaultValue={props.num}
        onChange={(val) => props.handleChange(props.id, val)}
      />
      <div style={{textAlign: 'center', flex: 1}}>
        <span>单价：{props.price}（元）</span>
        {'  '}
        <span>总计：{props.total}</span>
      </div>
    </ListItem>
  );
}

GoodsItem.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default GoodsItem;