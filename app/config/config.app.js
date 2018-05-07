import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import promise from "redux-promise-middleware";
import thunkMiddleware from 'redux-thunk';
import angular from 'angular';
//import { devTools, persistState } from 'redux-devtools';

const loggerMiddleware = createLogger();
const app = angular.module('angularWebpack');

// import the root reducer
import rootReducer from '../redux/reducer/';
app.config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [],[applyMiddleware(thunkMiddleware, loggerMiddleware, promise())]
   //   [devTools()],
      );
  }).name;
