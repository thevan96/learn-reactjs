import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native'
const { width }= Dimensions.get('window')

export default class Touchables extends React.Component {
  _onPressButton() {
    alert('You tapped the button!');
  }

  _onLongPressButton() {
    alert('You long-pressed the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor="#DDD"
          ss>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              TouchableNativeFeedback{' '}
              {Platform.OS !== 'android' ? '(Android only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 18,
    fontFamily: 'Source Code Pro'
  },
});
