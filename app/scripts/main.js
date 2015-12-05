'use strict';

import routing from './app-config';

// need this to inject templates into cache
angular.module('templates', []);

angular.module('example', [ 'ui.router', 'templates']).config(routing);
