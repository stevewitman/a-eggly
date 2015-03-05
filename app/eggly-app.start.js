angular.module('Eggly', [

])
.controller('MainCtrl', function($scope) {
    $scope.categories = [
      {"id": 0, name: "Forecasts"},
      {"id": 1, name: "SnowReports"},
      {"id": 2, name: "WebCams"}
    ];
    $scope.bookmarks = [
      {"id": 0, "title": "NWS - Boulder", "url": "http://forecast.weather.gov/MapClick.php?lat=40.0149856&lon=-105.27054559999999&site=all&smap=1&searchresult=Boulder%2C%20CO%2C%20USA#.Ukv-HRa5eFI", "category": "Forecasts"},
      {"id": 0, "title": "NWS - ABasin", "url": "http://forecast.weather.gov/MapClick.php?lat=39.624466054492345&lon=-105.86726188659668&site=bou&unit=0&lg=en&FcstType=text", "category": "Forecasts"},
      {"id": 0, "title": "NWS - Moab", "url": "http://forecast.weather.gov/MapClick.php?CityName=Moab&state=UT&site=GJT&textField1=38.5733&textField2=-109.549&e=0#.VPiXFFrN7dk", "category": "Forecasts"},
      {"id": 0, "title": "CSCUSA", "url": "http://www.coloradoski.com/snow-report", "category": "SnowReports"},
      {"id": 0, "title": "NWS reports", "url": "http://forecast.weather.gov/product.php?site=BOU&product=LSR&issuedby=BOU", "category": "SnowReports"},
      {"id": 0, "title": "CAM - Galvanize", "url": "http://boulderflatironcam.com/boulder/", "category": "WebCams"},
      {"id": 0, "title": "CAM - ABasin", "url": "http://www.arapahoebasin.com/ABasin/snow-conditions/web-cams.aspx", "category": "WebCams"},
      {"id": 0, "title": "CAM - Winter Park", "url": "http://www.winterparkresort.com/media/web-cams.aspx", "category": "WebCams"},
    ];

    $scope.currentCategory  = null;

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;


  })
;
