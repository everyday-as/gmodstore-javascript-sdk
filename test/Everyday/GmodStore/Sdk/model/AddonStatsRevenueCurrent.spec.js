/**
 * GmodStore API
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/Everyday/GmodStore/Sdk/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/Everyday/GmodStore/Sdk/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GmodStoreApi);
  }
}(this, function(expect, GmodStoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GmodStoreApi.AddonStatsRevenueCurrent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddonStatsRevenueCurrent', function() {
    it('should create an instance of AddonStatsRevenueCurrent', function() {
      // uncomment below and update the code to test AddonStatsRevenueCurrent
      //var instane = new GmodStoreApi.AddonStatsRevenueCurrent();
      //expect(instance).to.be.a(GmodStoreApi.AddonStatsRevenueCurrent);
    });

    it('should have the property day (base name: "day")', function() {
      // uncomment below and update the code to test the property day
      //var instane = new GmodStoreApi.AddonStatsRevenueCurrent();
      //expect(instance).to.be();
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new GmodStoreApi.AddonStatsRevenueCurrent();
      //expect(instance).to.be();
    });

  });

}));
