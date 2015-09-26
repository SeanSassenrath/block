'use strict';

angular.module('blocksCtrl', [])
  .controller('BlocksCtrl', function(Blocks) {
    var ctrl = this;

    ctrl.color = "blue";

    ctrl.newBlock = {
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

    ctrl.resetForm = function() {
      ctrl.newBlock = {
        textBody: "",
        author: "",
        color: "" || "gray",
      };
    };

    ctrl.getBlocks = function(){
      Blocks.getBlocks()
      .then(function(data) {
        ctrl.blocks = data;
        console.log(ctrl.blocks);
      });
    }

    ctrl.getBlocks();
  })