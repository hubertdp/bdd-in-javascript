'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {

	var listItem;

  Given(/^I have an empty grocery list$/, function() {
		this.groceryListApplication.list.empty();
  });

  When(/^I add an item to the list$/, function() {
    listItem = this.createGroceryItem();
		this.groceryListApplication.list.add(listItem);
  });

  Then(/^The grocery list contains a single item$/, function() {
		assert.equal(this.groceryListApplication.list.getAll().length, 1, 'Grocery List should grow by one item.');
  });

  Then(/^I can access that item from the grocery list$/, function() {
		assert.notEqual(this.groceryListApplication.list.getItemIndex(listItem), -1, 'Added item should be found at non-negative index.');
  });
});
