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
    instance = new GmodStoreApi.AddonVersionsApi();
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

  describe('AddonVersionsApi', function() {
    describe('createAddonVersion', function() {
      it('should call createAddonVersion successfully', function(done) {
        //uncomment below and update the code to test createAddonVersion
        //instance.createAddonVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadAddonVersion', function() {
      it('should call downloadAddonVersion successfully', function(done) {
        //uncomment below and update the code to test downloadAddonVersion
        //instance.downloadAddonVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddonVersion', function() {
      it('should call getAddonVersion successfully', function(done) {
        //uncomment below and update the code to test getAddonVersion
        //instance.getAddonVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAddonVersions', function() {
      it('should call listAddonVersions successfully', function(done) {
        //uncomment below and update the code to test listAddonVersions
        //instance.listAddonVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAddonVersion', function() {
      it('should call updateAddonVersion successfully', function(done) {
        //uncomment below and update the code to test updateAddonVersion
        //instance.updateAddonVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
