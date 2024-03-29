/**
 * GmodStore API
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddonCoupon from '../model/AddonCoupon';
import AddonCouponListResponse from '../model/AddonCouponListResponse';
import AddonCouponResponse from '../model/AddonCouponResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* AddonCoupons service.
* @module Everyday/GmodStore/Sdk/api/AddonCouponsApi
* @version 3.1.0
*/
export default class AddonCouponsApi {

    /**
    * Constructs a new AddonCouponsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/AddonCouponsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAddonCoupon operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~createAddonCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an addon coupon
     * @param {Number} addonId Id of the addon
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCoupon} addonCoupon 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonCoupon`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~createAddonCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonCouponResponse}
     */
    createAddonCoupon(addonId, addonCoupon, opts, callback) {
      opts = opts || {};
      let postBody = addonCoupon;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling createAddonCoupon");
      }
      // verify the required parameter 'addonCoupon' is set
      if (addonCoupon === undefined || addonCoupon === null) {
        throw new Error("Missing the required parameter 'addonCoupon' when calling createAddonCoupon");
      }

      let pathParams = {
        'addon_id': addonId
      };
      let queryParams = {
        'with': this.apiClient.buildCollectionParam(opts['_with'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddonCouponResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/coupons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAddonCoupon operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~deleteAddonCouponCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroy an addon's coupon
     * @param {Number} addonId Id of the addon
     * @param {Number} couponId Id of the coupon
     * @param {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~deleteAddonCouponCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAddonCoupon(addonId, couponId, callback) {
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling deleteAddonCoupon");
      }
      // verify the required parameter 'couponId' is set
      if (couponId === undefined || couponId === null) {
        throw new Error("Missing the required parameter 'couponId' when calling deleteAddonCoupon");
      }

      let pathParams = {
        'addon_id': addonId,
        'coupon_id': couponId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/addons/{addon_id}/coupons/{coupon_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddonCoupon operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~getAddonCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch an addon's coupon
     * @param {Number} addonId Id of the addon
     * @param {Number} couponId Id of the coupon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonCoupon`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~getAddonCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonCouponResponse}
     */
    getAddonCoupon(addonId, couponId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddonCoupon");
      }
      // verify the required parameter 'couponId' is set
      if (couponId === undefined || couponId === null) {
        throw new Error("Missing the required parameter 'couponId' when calling getAddonCoupon");
      }

      let pathParams = {
        'addon_id': addonId,
        'coupon_id': couponId
      };
      let queryParams = {
        'with': this.apiClient.buildCollectionParam(opts['_with'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AddonCouponResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/coupons/{coupon_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAddonCoupons operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~listAddonCouponsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCouponListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the coupons for an addon
     * @param {Number} addonId Id of the addon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonCoupon`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~listAddonCouponsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonCouponListResponse}
     */
    listAddonCoupons(addonId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling listAddonCoupons");
      }

      let pathParams = {
        'addon_id': addonId
      };
      let queryParams = {
        'with': this.apiClient.buildCollectionParam(opts['_with'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AddonCouponListResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/coupons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAddonCoupon operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~updateAddonCouponCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an addon's coupon
     * @param {Number} addonId Id of the addon
     * @param {Number} couponId Id of the coupon
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCoupon} addonCoupon 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonCoupon`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi~updateAddonCouponCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonCouponResponse}
     */
    updateAddonCoupon(addonId, couponId, addonCoupon, opts, callback) {
      opts = opts || {};
      let postBody = addonCoupon;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling updateAddonCoupon");
      }
      // verify the required parameter 'couponId' is set
      if (couponId === undefined || couponId === null) {
        throw new Error("Missing the required parameter 'couponId' when calling updateAddonCoupon");
      }
      // verify the required parameter 'addonCoupon' is set
      if (addonCoupon === undefined || addonCoupon === null) {
        throw new Error("Missing the required parameter 'addonCoupon' when calling updateAddonCoupon");
      }

      let pathParams = {
        'addon_id': addonId,
        'coupon_id': couponId
      };
      let queryParams = {
        'with': this.apiClient.buildCollectionParam(opts['_with'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AddonCouponResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/coupons/{coupon_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
