import React, { Component } from 'react';
import SingleImage from './SingleImage';
import {bestBuy as apiKey} from '../secrets.json';

class Laptops extends Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
      position: 0
    }

    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  //Fetching api data before the react component mounts
  componentWillMount() {
    //Setting the categoryId based on what path was used to route to this component from /laptops or /health+fitness+beauty
    var categoryId = this.props.match.path === '/laptops' ? 'abcat0502000' : 'pcmcat242800050021';

    var apiReq = 'https://api.bestbuy.com/beta/products/mostViewed(categoryId=' + categoryId + ')?apiKey=' + apiKey;

    //Fetching the products data from the API
    fetch(apiReq)
    .then(response => {
      return response.json();
    })
    .then(data => {
      var results = data.results;
      var products = [];

      //Looping over the first 5 mostViewed products and pushing all the info needed to render the gallery into a products array that will be set as the new state
      for (var i = 0; i < 5; i++) {
        var product = results[i];

        products.push({
          image: product.images.standard,
          name: product.names.title,
          price: product.prices.current,
          description: product.descriptions.short,
          link: product.links.web
        })
      }

      this.setState({products: products});
    })
  }

  //When clicking left or right through product gallery, re-set position property in local state
  leftClick (event) {
    event.preventDefault();
    if (this.state.position === 0) {
      this.setState({position: 4})
    } else {
      this.setState({position: this.state.position - 1})
    }
  }

  rightClick (event) {
    event.preventDefault();
    if (this.state.position === 4) {
      this.setState({position: 0})
    } else {
      this.setState({position: this.state.position + 1})
    }
  }

  render() {
    return (
      <div className="mt-4">
        {
          this.state.products.length > 0
            ? <div className = "row" style={{height: '45vh'}}>

                <div className="col-2 justify-content-center align-items-center d-flex">
                  <img src="/left1.png" className="arrow" onClick={this.leftClick} alt="left" />
                </div>

                {/* Products info array and gallery position are passed to the SingleImage component, when left or right arrows are clicked the position in state changes thus re-rendering both the SecondScreen and SingleImage components */}
                <SingleImage products={this.state.products} position={this.state.position}/>

                <div className="col-2 justify-content-center align-items-center d-flex">
                  <img src="/right1.png" className="arrow" onClick={this.rightClick} alt="right" />
                </div>

              </div>
            // If product data from the api isn't in the products array render a spining preloader
            : <div className="row justify-content-center align-items-center d-flex m-5">
                <div className="preloader"></div>
              </div>

        }
      </div>
    );
  }
}

export default Laptops;
