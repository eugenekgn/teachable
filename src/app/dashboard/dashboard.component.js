import { find } from 'lodash';

class DashboardController {
  constructor(DashboardService, CacheService) {
    this.searchTerm = '';
    this.isLoading = false;
    this.dashboardService = DashboardService;
    this.gemsCollection = [];
    this.cachService = CacheService;
    this.favoritesCollection = [];
    
  }

  findGems() {
    const model = this;

    model.isLoading = true;
    model.dashboardService.getGems(model.searchTerm)
      .then((gemsInfoCollection) => {
        model.gemsCollection = gemsInfoCollection;
        model.isLoading = false;
      })
  }

  favoriteGem(gem) {
    const model = this;
    model.cachService.save(gem);
  }

  isSearchDisabled() {
    const model = this;
    return model.isLoading || !model.searchTerm;
  }

  truncate(text) {
    if (text.length > 20) {
      text = `${text.substr(0, 20)}...`;
    }
    return text;
  }

  isFavored(gem) {
    const model = this;
    const isCached = model.cachService.isCached(gem);
    return isCached;
  }
}

const dashboard = {
  template: require('./dashboard.component.html'),
  controller: DashboardController,
  controllerAs: 'model',
};

export default dashboard;