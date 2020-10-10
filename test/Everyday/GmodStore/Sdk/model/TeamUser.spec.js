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
    instance = new GmodStoreApi.TeamUser();
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

  describe('TeamUser', function() {
    it('should create an instance of TeamUser', function() {
      // uncomment below and update the code to test TeamUser
      //var instane = new GmodStoreApi.TeamUser();
      //expect(instance).to.be.a(GmodStoreApi.TeamUser);
    });

    it('should have the property teamId (base name: "team_id")', function() {
      // uncomment below and update the code to test the property teamId
      //var instane = new GmodStoreApi.TeamUser();
      //expect(instance).to.be();
    });

    it('should have the property primary (base name: "primary")', function() {
      // uncomment below and update the code to test the property primary
      //var instane = new GmodStoreApi.TeamUser();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new GmodStoreApi.TeamUser();
      //expect(instance).to.be();
    });

  });

}));