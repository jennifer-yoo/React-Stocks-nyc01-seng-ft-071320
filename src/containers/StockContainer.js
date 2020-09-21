import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  filteredStonks = () => {
    return this.props.searchedStonks().map(el => 
      <Stock stonk={el} clickHandler={this.props.clickHandler}/>)
  }

  // listStonks = () => {
  //   return this.props.stonks.map(el => 
  //     <Stock key={el.id} stonk={el} clickHandler={this.props.clickHandler}/>  
  //   )
  // }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.filteredStonks()}
        </div>
    );
  }

}

export default StockContainer;
