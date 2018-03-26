import React from 'react';
import { Link } from 'react-router-dom';

//Two thumbnails that use react-router Link to navigate to the SecondScreen component
export default props => (
  <div>
    <div className="row justify-content-center">
      {/* thumbnail, thumbnail-img, and overlay classes used to implement on hover effects */}
      <div className="thumbnail justify-content-center align-items-center d-flex">
        <Link to="/laptops" >
          <img className="thumbnail-img" src="/laptop.jpg" alt="laptops"/>
          <div className="overlay">
            <p style={{transform: 'translateY(100%)'}}>Laptops</p>
          </div>
        </Link>
      </div>
      <div className="thumbnail justify-content-center align-items-center d-flex">
        <Link to="/health+fitness+beauty">
          <img className="thumbnail-img" src="/health.jpg" alt="health, fitness, & beauty"/>
          <div className="overlay">
            <p>Health,<br/>Fitness,<br/>& Beauty</p>
          </div>
        </Link>
      </div>
    </div>
    <h3 className="row justify-content-center">Click to Choose</h3>
  </div>
);
