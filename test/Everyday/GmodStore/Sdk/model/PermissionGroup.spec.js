/**
 * GmodStore
 * Welcome to the GmodStore API! You can use our API to access Gmodstore API endpoints, which can be used interact with Gmodstore programmatically.
 *
 * The version of the OpenAPI document: 1.0.1
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
    define(['expect.js', process.cwd()+'/src/Everyday\GmodStore\Sdk/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/Everyday\GmodStore\Sdk/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GmodStore);
  }
}(this, function(expect, GmodStore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GmodStore.PermissionGroup();
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

  describe('PermissionGroup', function() {
    it('should create an instance of PermissionGroup', function() {
      // uncomment below and update the code to test PermissionGroup
      //var instane = new GmodStore.PermissionGroup();
      //expect(instance).to.be.a(GmodStore.PermissionGroup);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GmodStore.PermissionGroup();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new GmodStore.PermissionGroup();
      //expect(instance).to.be();
    });

    it('should have the property displayOrder (base name: "display_order")', function() {
      // uncomment below and update the code to test the property displayOrder
      //var instane = new GmodStore.PermissionGroup();
      //expect(instance).to.be();
    });

  });

}));
