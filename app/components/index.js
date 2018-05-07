const app = require('angular').module('angularWebpack');
import DemoCtrl from './controller.demo';
import ReduxCtrl from './controller.redux';

app.controller('DemoCtrl', DemoCtrl);
app.controller('ReduxCtrl', ReduxCtrl);
app.controller('MainCtrl', require('./controller.app'));

