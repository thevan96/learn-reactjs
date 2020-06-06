import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          marginVertical: 20,
        }}>
        Navigation
      </Text>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#61AFEF',
        }}
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 1,
          })
        }>
        <Text
          style={{
            fontSize: 20,
          }}>
          Navigation
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Details = ({route, navigation}) => {
  const {itemId} = route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 40,
          marginVertical: 20,
        }}>
        Details
      </Text>
      <TouchableOpacity
        style={{
          widht: 100,
          heigh: 50,

          padding: 8,
          borderRadius: 10,
          backgroundColor: '#61AFEF',
        }}
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100) + 1,
          })
        }>
        <Text
          style={{
            fontSize: 20,
          }}>
          Details: {JSON.stringify(itemId)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          widht: 100,
          heigh: 50,
          padding: 8,
          marginTop: 10,

          backgroundColor: '#61AFEF',
          borderRadius: 10,
        }}
        onPress={() => navigation.pop()}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Go back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: 'orange',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
