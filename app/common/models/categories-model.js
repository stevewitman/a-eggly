angular.module('eggly.models.categories', [

])

.service('CategoriesModel', function($http, $q) {
  var model = this,
    URLS = {
      FETCH: 'data/categories.json'
    },
    categories;

    function extract(result) {
      return result.data
    }

    function cacheCategories(result) {
      categories = extract(result);
      return categories;
    }

    model.getCategories = function() {
      return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    };

    model.getCategoryByName = function() {
      var deffered = $q.defer();

      function findCategory(c) {
        return _.find(categories, function(c){
          return c.name == categoryName;
        })
      }

      if(categories){
        deferred.resolve(findCategory());
      } else {
        model.getCategories()
        .then(function(result){
          deferred.resolve(findCategory());
        })
      }

      return deferred.promise;
    };
  })
;
