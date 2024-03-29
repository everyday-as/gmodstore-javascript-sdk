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
    instance = new GmodstoreSdk.ProductCouponsApi();
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

  describe('ProductCouponsApi', function() {
    describe('createProductCoupon', function() {
      it('should call createProductCoupon successfully', function(done) {
        //uncomment below and update the code to test createProductCoupon
        //instance.createProductCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductCoupon', function() {
      it('should call deleteProductCoupon successfully', function(done) {
        //uncomment below and update the code to test deleteProductCoupon
        //instance.deleteProductCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductCoupon', function() {
      it('should call getProductCoupon successfully', function(done) {
        //uncomment below and update the code to test getProductCoupon
        //instance.getProductCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listProductCoupons', function() {
      it('should call listProductCoupons successfully', function(done) {
        //uncomment below and update the code to test listProductCoupons
        //instance.listProductCoupons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductCoupon', function() {
      it('should call updateProductCoupon successfully', function(done) {
        //uncomment below and update the code to test updateProductCoupon
        //instance.updateProductCoupon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
