!function(){"use strict";function e(e){var
  t=this;t.shortName="",t.matchedMenuItems=function(n)
  {e.getMatchedMenuItems(n).then(function(e){e&&e.length>0?(t.message="",t.found=e):
  (t.message="Nothing found!",t.found=[])})},t.removeMenuItem=function(e)
  {t.found.splice(e,1)}}function t(e,t){this.getMatchedMenuItems=function(n){return e
    ({method:"GET",url:t+"/menu_items.json"}).then(function(e)
    {for(var t=[],o=0;o<e.data.menu_items.length;o++)n.length>0&&-1!==e.data.menu_items[o].description.toLowerCase().indexOf(n)
      &&t.push(e.data.menu_items[o]);return t})}}
      angular.module("NarrowItDownApp",[]).controller("NarrowItDownController",e).service("MenuSearchService",t).constant("ApiBasePath","https://davids-restaurant.herokuapp.com").directive("foundItems",function()
      {return{restrict:"E",templateUrl:"foundItems.html",scope:{foundItems:"<",onEmpty:"<",onRemove:"&"},controller:e,controllerAs:"menu",bindToController:!0}}),e.$inject=["MenuSearchService"],t.$inject=["$http","ApiBasePath"]}();
