import React, { Component, Fragment } from "react";

export class Workouts extends Component {
  render() {
    let map = (
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/search?q=basketball%20gyms%20nearby&key=AIzaSyCQdKY1r1nd8pSt4d_JujlicbTm-4Ieazs"
      ></iframe>
    );
    return (
      <Fragment>
        <h3>Gyms Nearby</h3>
        {map}
      </Fragment>
    );
  }
}

export default Workouts;
