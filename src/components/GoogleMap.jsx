import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const initPoint = {lat: 35.6795253, lng: 139.7589926}; // 東京駅

class GoogleMap extends Component {
  initMap() {
    // eslint-disable-next-line
    let map = new google.maps.Map(document.getElementById('map'), {
      center: initPoint,
      zoom: 15
    });
  }
  render() {
    return (
      <div className='Google-map-wrapper'>
        <p className='Map-button-group'>
          <Button bsSize="large" onClick={this.initMap}>Bootstrapボタン</Button>
        </p>
        <div id="map" style={{height:'50vh',width:'calc(100vw-19px)'}}></div>
      </div>
    );
  }
}

export default GoogleMap;
