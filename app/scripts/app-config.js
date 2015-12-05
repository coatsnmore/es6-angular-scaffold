'use strict';

import ExampleController from './ExampleController';

routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/example');

  $stateProvider.state('example', {
    url: '/example',
    views: {
      'content': {
        templateUrl: 'templates/example.html',
        controller: ExampleController,
        controllerAs: 'vm'
      }
    }
  });
}
