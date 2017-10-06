'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');
var GroceryList = require(process.cwd() + '/script/model/grocery-list');

defineSupportCode(function({Given, When, Then}) {

	var myList;
	var listItem = 'apple';

  Given(/^I have an empty grocery list$/, function() {
		myList = GroceryList.create();
  });

  When(/^I add an item to the list$/, function() {
		myList.add(listItem);
  });

  Then(/^The grocery list contains a single item$/, function() {
		assert.equal(myList.getAll().length, 1, 'Grocery List should grow by one item.');
  });

  Then(/^I can access that item from the grocery list$/, function() {
		assert.notEqual(myList.getItemIndex(listItem), -1, 'Added item should be found at non-negative index.');
  });
});
