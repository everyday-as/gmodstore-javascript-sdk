/**
 * gmodstore
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.  # Rate limits Every request you make to the GmodStore API will count against your rate limit, which at the time of writing this, is 60 requests / minute. An up-to-date value will always provided in the `X-RateLimit-Limit` header The number of requests you have remaining before you must wait is provided in the `X-RateLimit-Remaining` header.  # API SDKs For a list of available API SDKs check the README here: https://github.com/everyday-as/gmodstore-api-docs#client-libraries
 *
 * The version of the OpenAPI document: 3.0.0
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
    factory(root.expect, root.GmodstoreSdk);
  }
}(this, function(expect, GmodstoreSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GmodstoreSdk.UpdatePermissionGroupPayload();
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

  describe('UpdatePermissionGroupPayload', function() {
    it('should create an instance of UpdatePermissionGroupPayload', function() {
      // uncomment below and update the code to test UpdatePermissionGroupPayload
      //var instance = new GmodstoreSdk.UpdatePermissionGroupPayload();
      //expect(instance).to.be.a(GmodstoreSdk.UpdatePermissionGroupPayload);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new GmodstoreSdk.UpdatePermissionGroupPayload();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new GmodstoreSdk.UpdatePermissionGroupPayload();
      //expect(instance).to.be();
    });

  });

}));
