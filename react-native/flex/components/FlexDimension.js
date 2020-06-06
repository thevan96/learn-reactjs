import React, {Component} from 'react';
import {View} from 'react-native';
export default class FlexDimension extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View style={{flex: 50, backgroundColor: 'yellow'}} />
            <View style={{flex: 50, backgroundColor: '#EEE'}} />
          </View>
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: '#DDD'}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <View style={{height: 50, backgroundColor: 'orange'}} />
      </View>
    );
  }
}
