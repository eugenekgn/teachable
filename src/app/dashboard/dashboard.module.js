import angular from 'angular';

import dashboard from './dashboard.component';
import dashboardService  from './dashboard.service';
import shared from '../shared/shared.module';

export default angular.module('dashboard', ['shared'])
  .component('dashboard', dashboard)
  .service('DashboardService', dashboardService)
  .name;