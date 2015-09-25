'use strict';

angular.module('blocksService', [])

.factory('Blocks', function($http, $q) {

  var blockFactory = {};

  var url = 'http://localhost:4444/api/';

  function extract(result) {
    return result.data;
  };

  //get all the blocks
  blockFactory.getBlocks = function() {
    return $http.get(url + 'blocks').then(extract);
  };

  blockFactory.createBlock = function(block) {
    return $http.post(url + 'blocks', block).then(extract)
  };

  return blockFactory;

});