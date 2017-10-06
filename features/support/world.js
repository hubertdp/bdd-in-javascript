'use strict';

var {defineSupportCode} = require('cucumber');

var application = require(process.cwd() + '/script/app');

function CustomWorld() {
	
  this.groceryListApplication = undefined;
  
  this.openGroceryList = function() {
    return application.newSession();
  };

  this.createGroceryItem = function() {
    return 'apple';
  };

}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld);
});
