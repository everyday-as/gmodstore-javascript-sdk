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
    instance = new GmodStore.AddonStatsApi();
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

  describe('AddonStatsApi', function() {
    describe('getAddonStats', function() {
      it('should call getAddonStats successfully', function(done) {
        //uncomment below and update the code to test getAddonStats
        //instance.getAddonStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
