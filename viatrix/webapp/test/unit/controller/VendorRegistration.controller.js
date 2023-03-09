/*global QUnit*/

sap.ui.define([
	"viatrix/controller/SearchVendor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SearchVendor Controller");

	QUnit.test("I should test the SearchVendor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
