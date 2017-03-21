var beerComponent = {
        template: `
        <div class="beer-box col-sm-3">
          <div class="panel panel-default">
            <div class="beer-name">
                {{$ctrl.data.name}}
              </div> 
            <div class="panel-body">
              <div class="beer-image col-sm-12"> 
                <img class="img-responsive" src="{{$ctrl.data.image_url}}"> 
              </div>
            </div>
            <div class="panel-footer col-sm-12">
              <div class="col-sm-12">
                 <div class="row">
                  ABV: {{$ctrl.data.abv}}
                 </div>
              </div>
              <div class="col-sm-12">
                 <div class="row">
                  IBU: {{$ctrl.data.ibu}}
                 </div>
              </div>
            </div>
          </div>
        </div>`,
        bindings: {
          data: '='
        }
      };
      angular.module('PankApi', [])
        .controller('MainController',
          function($scope, $http) {
            $scope.beerList = []
            // $http
            //   .get('https://api.punkapi.com/v2/beers')
            //   .then( function(response){
            //     $scope.beerList = response.data
            //   })
        $scope.sortObj = {
          ibu: 'id',
          abv: 'abv'
        }
        $scope.sortOption = {
          name: 'abv',
          reverse: true
        }
        $scope.orderBy = function (sortByName) {
          $scope.sortOption.reverse = (sortByName !== null && $scope.sortOption.name === sortByName) ? !$scope.sortOption.reverse : false;
          $scope.sortOption.name = sortByName
        }
          })
        .component('beer', beerComponent,
          function($scope, $http) {
            $http
              .get('https://api.punkapi.com/v2/beers')
              .then( function(response){
                 this.beerList = response.data
              })
          });