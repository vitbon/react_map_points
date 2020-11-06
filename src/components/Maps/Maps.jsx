import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './maps.css';
import logo from './ATB.svg';

const AnyReactComponent = ({text}) => 
  <div className="marker">
    <img src={logo} className="marker"></img>    
    {text}
  </div>;

export default class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 50.512507,
      lng: 30.514350,
    },
    zoom: 14.5,
  };

  render() {
    const ATB = [{lat: 50.525079, lng: 30.499972, text: "АТБ (Оболонський проспект, 52-А)"},
                 {lat: 50.522167, lng: 30.508648, text: "АТБ (вул. Героїв Дніпра, 40)"},
                 {lat: 50.519866, lng: 30.499761, text: "АТБ (Оболонський проспект, 36)"},
                 {lat: 50.516234, lng: 30.485635, text: "АТБ (вул. Богатирська, 2)"},
                 {lat: 50.515454, lng: 30.516123, text: "АТБ (вул. Прирічна, 11)"},
                 {lat: 50.512744, lng: 30.502266, text: "АТБ (вул. Маршала Тимошенка, 29-Б)"},
                 {lat: 50.505366, lng: 30.490746, text: "АТБ (вул. Маршала Малиновського, 5)"},
                ];
    return (
      <div className="whole__window">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9h-J01sZufH70VzvTajoGjz26YITIZFE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          { ATB.map(point =>             
            <AnyReactComponent lat={point.lat} lng={point.lng} text={point.text} />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}