import React, { Component } from 'react';

class Laptops extends Component {

  render() {
    var currProduct = this.props.products[this.props.position];

    return (
      <div className="col gallery-container">
        <div className="row mb-2 justify-content-center align-items-center text-center d-flex" style={{height: '7em'}}>
          <h3 className="font-weight-bold">{currProduct.name}</h3>
        </div>
        <div className="row" style={{height: '17em'}}>
          <div className="col" style={{textAlign: 'center'}}>
            <img className="img-fluid mh-100" src={currProduct.image} alt="product" />
          </div>
          <span className="border-right border-warning"></span>
          <div className="col">
            <h1 className="font-weight-bold">{'$' + currProduct.price}</h1>
            <p>{currProduct.description}</p>
            <a href={currProduct.link} className="btn btn-warning btn-lg">SHOP NOW</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Laptops;
