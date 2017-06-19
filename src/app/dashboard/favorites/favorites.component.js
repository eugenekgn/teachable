class FavoritesController {

  constructor(CacheService) {
    this.cacheService = CacheService;
    this.favoritesCollection = [];

    this.$onInit = () => {
      this.favoritesCollection = this.cacheService.get();
    }

  }

  remove(gem) {
    const model = this;
    model.cacheService.removeByProperty(gem.name);
  }

}

const favorites = {
  template: require('./favorites.component.html'),
  controller: FavoritesController,
  controllerAs: 'model',
};

export default favorites;