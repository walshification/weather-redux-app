import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    // this element can be referenced via this.refs.map elsewhere in the app (see above)
    return <div ref="map" />;
  }
}

export default GoogleMap;
