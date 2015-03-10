angular.module('eggly.models.categories', [

])

.service('CategoriesModel', function() {
  var model = this,
    categories = [
      {"id": 0, name: "Forecasts"},
      {"id": 1, name: "SnowReports"},
      {"id": 2, name: "WebCams"}
    ];
    model.getCategories = function() {
      return categories;
    }
  })
;
