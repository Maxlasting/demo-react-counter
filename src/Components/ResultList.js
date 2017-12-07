import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const css_grid = {width: '100%', padding: 12};

function ResultList(props){
  return (
    <Card>
      <Card.Grid style={css_grid}>商品的总个数是：{props.nums}个</Card.Grid>
      <Card.Grid style={css_grid}>商品的总价格是：{props.totals}元</Card.Grid>
      <Card.Grid style={css_grid}>最贵的商品单价是：{props.expensive}元</Card.Grid>
    </Card>
  );
}

ResultList.propTypes = {
  nums: PropTypes.number.isRequired,
  totals: PropTypes.number.isRequired,
  expensive: PropTypes.number.isRequired
};

export default ResultList;