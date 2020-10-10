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
    instance = new GmodStoreApi.AddonVersion();
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

  describe('AddonVersion', function() {
    it('should create an instance of AddonVersion', function() {
      // uncomment below and update the code to test AddonVersion
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be.a(GmodStoreApi.AddonVersion);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property changelog (base name: "changelog")', function() {
      // uncomment below and update the code to test the property changelog
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property fileHash (base name: "file_hash")', function() {
      // uncomment below and update the code to test the property fileHash
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "file_size")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property releaseType (base name: "release_type")', function() {
      // uncomment below and update the code to test the property releaseType
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

    it('should have the property addon (base name: "addon")', function() {
      // uncomment below and update the code to test the property addon
      //var instane = new GmodStoreApi.AddonVersion();
      //expect(instance).to.be();
    });

  });

}));
