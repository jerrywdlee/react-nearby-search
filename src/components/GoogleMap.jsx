import React, { Component } from 'react';
import { Button, ButtonGroup, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import { initMap, getAreaName, nearbySearch } from '../helpers/GoogleMapHelper'

const initPoint = {lat: 35.6795253, lng: 139.7589926}; // 東京駅

// https://developers.google.com/places/supported_types?hl=ja
const placeTypes = [
  {
    name : 'ATM',
    id : 'atm'
  },
  {
    name : '銀行',
    id : 'bank'
  },
  {
    name : '喫茶店',
    id : 'cafe'
  },
  {
    name : 'コンビニ',
    id : 'convenience_store'
  },
  {
    name : '薬局',
    id : 'pharmacy'
  },
  {
    name : '郵便局',
    id : 'post_office'
  },
  {
    name : '飲食店',
    id : 'restaurant'
  }
];

class GoogleMap extends Component {
  initMap() {
    let location = initPoint
    initMap(document.getElementById('map'), location)
    getAreaName(location, (addr) => {
      console.log(addr);
    })
  }
  nearbySearch(e) {
    alert(e.currentTarget.getAttribute('data-type'))
    /*let locationTypes = e.currentTarget.getAttribute('data-type')
    nearbySearch([locationTypes])
    placeTypes.forEach((placeType, i)=>{
      if (placeType.id === locationTypes) {
        this.setState({placeTypeComments: ' 付近の '+placeType.name});
      }
    })*/
  }
  componentDidMount() {
   // 描画が成功して、DOMにアクセス可能になる
   console.log("componentDidMount");
  }
  
  render() {
    return (
      <div className='Google-map-wrapper'>
        <ButtonGroup className='Map-button-group' style={{marginBottom:'20px'}}>
          <Button bsStyle="primary" bsSize="large" onClick={this.initMap}>
            <Glyphicon glyph="screenshot" />
            &nbsp;現在位置
          </Button>
          <DropdownButton bsSize="large" title="施設を選ぶ" id="dropdown">
            {
              placeTypes.map((place_type, i)=>{
                return <MenuItem data-type={place_type.id} key={i} onClick={this.nearbySearch} >{place_type.name}</MenuItem>
              })
            }
          </DropdownButton>
        </ButtonGroup>
        <div id="map" style={{height:'100vh',width:'100vw',marginLeft:'-19px'}}></div>
      </div>
    );
  }
}

export default GoogleMap;
