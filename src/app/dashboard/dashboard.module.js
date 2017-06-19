import angular from 'angular';

import dashboard from './dashboard.component';
import favorites from './favorites/favorites.component';
import dashboardService  from './dashboard.service';
import cacheService from '../shared/cache.service';


export default angular.module('dashboard', [])
  .component('dashboard', dashboard)
  .component('favorites', favorites)
  .service('DashboardService', dashboardService)
  .service('CacheService', cacheService)
  .name;