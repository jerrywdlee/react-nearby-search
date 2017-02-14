import React, { Component } from 'react';
import { Button, ButtonGroup, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import { initMap, getAreaName, nearbySearch } from '../helpers/GoogleMapHelper'

// const initPoint = {lat: 35.6795253, lng: 139.7589926}; // 東京駅

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
  constructor(props) {
    super(props);
    this.state = {
      mapLoadingMsg: "現在地を取得してください",
      locationName : '現在地を取得しています',
      placeType: ""
    };
    this.initMap = this.initMap.bind(this)
    this.nearbySearch = this.nearbySearch.bind(this)
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = {lat:position.coords.latitude, lng:position.coords.longitude}
      initMap(document.getElementById('map'), location)
      getAreaName(location, (addr) => {
        console.log(addr);
        this.setState({locationName: addr.formatted_address});
      })
    }, () => { alert("位置情報はご利用できません。") })
  }
  nearbySearch(e) {
    // alert(e.currentTarget.getAttribute('data-type'))
    let locationTypes = e.currentTarget.getAttribute('data-type')
    nearbySearch([locationTypes], 800)
    placeTypes.forEach((placeType, i)=>{
      if (placeType.id === locationTypes) {
        this.setState({placeType: `付近の${placeType.name}`});
      }
    })
  }
  componentDidMount() {
   // 現在のコンポネートの描画が成功して、DOMにアクセス可能になる時、マップを描画
   this.initMap()
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
        <p className='location-name' style={{paddingBottom:'10px'}}>
          {this.state.locationName}{this.state.placeType}
        </p>
        <div id="map" style={{}}></div>
      </div>
    );
  }
}

export default GoogleMap;
