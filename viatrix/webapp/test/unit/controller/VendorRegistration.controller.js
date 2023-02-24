/*global QUnit*/

sap.ui.define([
	"viatrix/controller/VendorRegistration.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VendorRegistration Controller");

	QUnit.test("I should test the VendorRegistration controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
