import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {



  favStonks = () => {
    return this.props.myStonks.map(el =>
      <Stock key={el.id} stonk={el} clickHandler={this.props.clickHandler}/>  
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.favStonks()}
      </div>
    );
  }

}

export default PortfolioContainer;
