/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, TextInput, Keyboard} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textStatus: '',
      email: '',
      password: '',
      description: ''
    };

    this.passwordRef = React.createRef();
    this.descriptionRef = React.createRef();
  }


  componentDidMount () {
    this.keyBoardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({
        textStatus: 'Keyboard open'
      })
    })
    this.keyBoardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({
        textStatus: 'Keyboard close'
      })
    })
  }

  componentWillUnmount () {
    this.keyBoardShowListener.remove();
    this.keyBoardHideListener.remove();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>

        <TextInput
          style={{
            height: 40,
            margin: 20,
            fontSize: 20,
            color: 'white',

            borderColor: '#282C34',
            borderWidth: 2,
            borderRadius: 10,

            paddingHorizontal: 20,
            backgroundColor: '#282C34',
          }}
          placeholder="Enter your email"
          placeholderTextColor="white"
          keyboardType="email-address"
          onChangeText={email => {
            this.setState({email});
          }}
          onSubmitEditing={() => {
            this.passwordRef.current.focus();
          }}
        />
        <TextInput
          ref={this.passwordRef}
          style={{
            height: 40,
            margin: 20,
            fontSize: 20,
            color: 'white',
            borderColor: '#282C34',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 20,
            backgroundColor: '#282C34',
          }}
          placeholder="Enter your password"
          placeholderTextColor="white"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={password => {
            this.setState({password});
          }}

          onSubmitEditing={() => {
            this.descriptionRef.current.focus();
          }}
        />

        <TextInput
          ref={this.descriptionRef}
          style={{
            height: 300,
            margin: 20,
            fontSize: 20,
            color: 'white',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: '#282C34',
            textAlign:'left'
          }}
          placeholder="Description"
          placeholderTextColor="white"
          returnKeyType="done"
          textAlignVertical='top'
          multiline={true}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={description => {
            this.setState({description});
          }}
        />
      </View>
    );
  }
}
