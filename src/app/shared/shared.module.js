import angular from 'angular';

import favorites from './favorites/favorites.component';
import cacheService from './cache.service';

export default angular.module('shared', [])
  .component('favorites', favorites)
  .service('CacheService', cacheService)
  .name;