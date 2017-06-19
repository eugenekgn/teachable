
class DashboardController {
  constructor(DashboardService) {
    this.searchTerm = 'test';
    this.dashboardService = DashboardService;
  }

  findGems(){
    const model = this;
    model.dashboardService.getGems();
  }
}

const dashboard = {
  template: require('./dashboard.component.html'),
  controller: DashboardController,
  controllerAs: 'model',
};

export default dashboard;