/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = {
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 50,
  },

  input: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    padding: 20,
  },

  button: {
    width: 100,
    height: 40,
    marginTop: 50,
    backgroundColor: '#282c34',
    borderRadius: 10,
  },

  textLogin: {
    fontWeight: 'bold',
    height: '100%',
    color: '#0BC9FE',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.passwordRef = React.createRef();
  }

  render() {
    return (
      <ImageBackground style={styles.image} source={image} blurRadius={6}>
        <View style={styles.container}>
          <Image style={styles.avatar} source={avatar} />
          <TextInput
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            placeholder="Enter email"
            onSubmitEditing={() => this.passwordRef.current.focus()}
          />
          <TextInput
            ref={this.passwordRef}
            placeholderTextColor="#FFFFFF"
            style={styles.input}
            placeholder="Enter passworld"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const image = {
  uri: 'https://i.picsum.photos/id/1016/3844/2563.jpg',
};

const avatar = {
  uri: 'https://picsum.photos/id/237/200/300',
};

export default App;
