import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimension extends Component {
  render () {
    return (
      <View>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: '#9D555D' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: '#282C34' }}></View>
      </View>
    )
  }
}
