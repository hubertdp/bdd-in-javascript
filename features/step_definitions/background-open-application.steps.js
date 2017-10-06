'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {

	Given('I have opened the grocery list application', function () {
    this.groceryListApplication = this.openGroceryList();
    assert(this.groceryListApplication, 'Grocery List Application is required to be open for editability.');
	});

});
