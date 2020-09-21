import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={()=> (props.clickHandler(props.stonk))}>
      <div className="card-body">
        <h5 className="card-title">{props.stonk.name}</h5>
        <p className="card-text">{props.stonk.ticker}: {props.stonk.price}</p>
      </div>
    </div>


  </div>
);

export default Stock
