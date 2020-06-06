import React, {Component} from 'react';

import {View} from 'react-native';

export default class FlexExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#282C34',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#DDD'}} />
        <View style={{width: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
      </View>
    );
  }
}
