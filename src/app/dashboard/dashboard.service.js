class DashboardService {
  constructor($http) {
    this.http = $http;
  }

  getGems(gemName) {
    const self = this;

    return self.http.get(`api/${gemName}`)
      .then((response) => {
        return response.data;
      })
  }
}

export default DashboardService;
