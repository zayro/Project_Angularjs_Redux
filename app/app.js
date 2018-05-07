require('babel-register');

import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessages  from 'angular-messages';
import ngAria from 'angular-aria';

import ngRedux from 'ng-redux';

const app = angular.module('angularWebpack', ['ngRedux', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages','ngRoute']);

/**
 * Config Route
 */
require('./config/route.app');
/**
 * Config Route
 */
require('./config/config.app');
/**
* Config Route
*/
require('./config/config.http');
/**
 * Config Route
 */
require('./components/');
