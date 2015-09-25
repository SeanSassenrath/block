'use strict';

angular.module('blocksCtrl', [])
  .controller('BlocksCtrl', function(Blocks) {
    var ctrl = this;

    ctrl.userInput = {
      textBody: "",
      author: "",
      color: "" || "gray",
    };

    ctrl.submit = function(block) {
      Blocks.createBlock(block)
        .then(function(data) {
          console.log(data);
          ctrl.userForm = {};
        })
    }

    Blocks.getBlocks()
      .then(function(data) {
        ctrl.blocks = data;
        console.log(ctrl.blocks);
      });

    ctrl.test = "TESTING!"
  })