import { remove, find } from 'lodash';

class CacheService {
  constructor($localStorage) {
    this.localStorage = $localStorage;
    //This can be in a config file
    this.GEM_STORAGE_NAME = 'gemCollection';
    this.localCollection = this.localStorage[this.GEM_STORAGE_NAME];
    if (!this.localCollection) {
      this.localCollection = this.localStorage[this.GEM_STORAGE_NAME] = [];
    }
  }

  get() {
    const self = this;
    return self.localCollection;
  }

  save(item) {
    const self = this;
    self.localCollection.push(item);
    return self.get();
  }

  isCached(item) {
    const self = this;
    return find(self.localCollection, (fav) => {
      return fav.name === item.name;
    })
  }

  removeByProperty(name) {
    const self = this;
    remove(self.localCollection, (item) => {
      return item.name === name;
    });
  }
}

export default CacheService;


//TODO: make this method more generic