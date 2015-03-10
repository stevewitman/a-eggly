angular.module('Eggly', [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('eggly', {
            url: '',
            abstract: true
        })
    ;
    $urlRouterProvider.otherwise('/');
})

.controller('MainCtrl', function($scope, $state) {
    $scope.categories = [
      {"id": 0, name: "Forecasts"},
      {"id": 1, name: "SnowReports"},
      {"id": 2, name: "WebCams"}
    ];
    $scope.bookmarks = [
      {"id": 0, "title": "Forecast 1", "url": "http://forecast.weather.gov/MapClick.php?lat=40.0149856&lon=-105.27054559999999&site=all&smap=1&searchresult=Boulder%2C%20CO%2C%20USA#.Ukv-HRa5eFI", "category": "Forecasts"},
      {"id": 1, "title": "Forecast 2", "url": "http://forecast.weather.gov/MapClick.php?lat=39.624466054492345&lon=-105.86726188659668&site=bou&unit=0&lg=en&FcstType=text", "category": "Forecasts"},
      {"id": 2, "title": "Forecast 3", "url": "http://forecast.weather.gov/MapClick.php?CityName=Moab&state=UT&site=GJT&textField1=38.5733&textField2=-109.549&e=0#.VPiXFFrN7dk", "category": "Forecasts"},
      {"id": 3, "title": "SnowReport 1", "url": "http://www.coloradoski.com/snow-report", "category": "SnowReports"},
      {"id": 4, "title": "SnowReport 2", "url": "http://forecast.weather.gov/product.php?site=BOU&product=LSR&issuedby=BOU", "category": "SnowReports"},
      {"id": 5, "title": "Web CAM 1", "url": "http://boulderflatironcam.com/boulder/", "category": "WebCams"},
      {"id": 6, "title": "Web CAM 2", "url": "http://www.arapahoebasin.com/ABasin/snow-conditions/web-cams.aspx", "category": "WebCams"},
      {"id": 7, "title": "Web CAM 3", "url": "http://www.winterparkresort.com/media/web-cams.aspx", "category": "WebCams"},
    ];

    $scope.currentCategory  = null;

    function setCurrentCategory(category) {
      $scope.currentCategory = category;

      // $state.go('eggly.categories.bookmarks', {category:category.name});

      cancelCreating();
      cancelEditing();
    }

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;

    // CRUD

    function resetCreateForm() {
      $scope.newBookmark = {
        title: '',
        url: '',
        category: $scope.currentCategory
      };
    }

    function createBookmark(bookmark) {
      bookmark.id = $scope.bookmarks.length;
      $scope.bookmarks.push(bookmark);

      resetCreateForm();
    }

    $scope.createBookmark = createBookmark;

    $scope.editedBookmark = null;

    function setEditedBookmark(bookmark) {
      $scope.editedBookmark = angular.copy(bookmark);
    }

    $scope.setEditedBookmark = setEditedBookmark;

    function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function (b) {
        return b.id == bookmark.id
      });
      $scope.bookmarks[index] = bookmark;

      $scope.editedBookmark = null;
      $scope.isEditing = false;
    }

    $scope.updateBookmark = updateBookmark;

    function isSelectedBookmark(bookmarkId) {
      return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
    }

    $scope.isSelectedBookmark = isSelectedBookmark;

    function deleteBookmark(bookmark) {
      _.remove($scope.bookmarks, function (b) {
        return b.id == bookmark.id;
      });
    }

    $scope.deleteBookmark = deleteBookmark

    // CREATING AND EDITING STATES

    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating() {
      $scope.isCreating = true;
      $scope.isEditing = false;

      resetCreateForm();
    }

    function cancelCreating() {
      $scope.isCreating = false;
    }

    function startEditing() {
      $scope.isCreating = false;
      $scope.isEditing = true;
    }

    function cancelEditing() {
      $scope.isEditing = false;
      $scope.editedBookmark = null;
    }

    function shouldShowCreating() {
      return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing() {
      return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

  })
;
