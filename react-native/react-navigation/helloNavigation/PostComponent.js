import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 5,
  },
  text: {
    color: 'blue',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    width: '80%',
    height: '50%',
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 25,
  },
});

class Home extends Component {
  render() {
    const {navigation, route} = this.props;
    const content = route.params?.content;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Post');
          }}
          style={styles.button}>
          <Text style={styles.text}>Create post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handerOnChange(text) {
    this.setState({content: text});
  }

  render() {
    const {navigation} = this.props;
    const {content} = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={text => this.handerOnChange(text)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {
              content,
            });
          }}
          style={styles.button}>
          <Text style={styles.text}>Create post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class PostComponent extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'My Home',
              headerStyle: {
                backgroundColor: 'green',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white'
              }
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
