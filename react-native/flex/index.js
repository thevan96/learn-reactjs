/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import App from './App';
// import FixedDimension from './components/FixedDimension';
// import  FlexDimension from './components/FlexDimension';
import  FlexExample from './components/FlexExample';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexExample);
