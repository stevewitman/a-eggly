angular.module('eggly.models.bookmarks', [

])
.service('BookmarksModel', function(){
  var model = this,
    bookmarks = [
      {"id": 0, "title": "Forecast 1", "url": "http://forecast.weather.gov/MapClick.php?lat=40.0149856&lon=-105.27054559999999&site=all&smap=1&searchresult=Boulder%2C%20CO%2C%20USA#.Ukv-HRa5eFI", "category": "Forecasts"},
      {"id": 1, "title": "Forecast 2", "url": "http://forecast.weather.gov/MapClick.php?lat=39.624466054492345&lon=-105.86726188659668&site=bou&unit=0&lg=en&FcstType=text", "category": "Forecasts"},
      {"id": 2, "title": "Forecast 3", "url": "http://forecast.weather.gov/MapClick.php?CityName=Moab&state=UT&site=GJT&textField1=38.5733&textField2=-109.549&e=0#.VPiXFFrN7dk", "category": "Forecasts"},
      {"id": 3, "title": "SnowReport 1", "url": "http://www.coloradoski.com/snow-report", "category": "SnowReports"},
      {"id": 4, "title": "SnowReport 2", "url": "http://forecast.weather.gov/product.php?site=BOU&product=LSR&issuedby=BOU", "category": "SnowReports"},
      {"id": 5, "title": "Web CAM 1", "url": "http://boulderflatironcam.com/boulder/", "category": "WebCams"},
      {"id": 6, "title": "Web CAM 2", "url": "http://www.arapahoebasin.com/ABasin/snow-conditions/web-cams.aspx", "category": "WebCams"},
      {"id": 7, "title": "Web CAM 3", "url": "http://www.winterparkresort.com/media/web-cams.aspx", "category": "WebCams"},
    ];
  model.getBookmarks = function() {
    return bookmarks;
  }
})
;
