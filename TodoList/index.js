/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TodoList from './TodoList'

AppRegistry.registerComponent(appName, () => TodoList);
