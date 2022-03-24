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
import AddonPurchase from '../model/AddonPurchase';
import AddonPurchaseListResponse from '../model/AddonPurchaseListResponse';
import AddonPurchaseResponse from '../model/AddonPurchaseResponse';
import ErrorResponse from '../model/ErrorResponse';
import NewAddonPurchase from '../model/NewAddonPurchase';

/**
* AddonPurchases service.
* @module Everyday/GmodStore/Sdk/api/AddonPurchasesApi
* @version 1.3.2
*/
export default class AddonPurchasesApi {

    /**
    * Constructs a new AddonPurchasesApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAddonPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~createAddonPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a purchase for an addon
     * @param {Number} addonId Id of the addon
     * @param {module:Everyday/GmodStore/Sdk/model/NewAddonPurchase} newAddonPurchase 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonPurchase`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~createAddonPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse}
     */
    createAddonPurchase(addonId, newAddonPurchase, opts, callback) {
      opts = opts || {};
      let postBody = newAddonPurchase;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling createAddonPurchase");
      }
      // verify the required parameter 'newAddonPurchase' is set
      if (newAddonPurchase === undefined || newAddonPurchase === null) {
        throw new Error("Missing the required parameter 'newAddonPurchase' when calling createAddonPurchase");
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
      let returnType = AddonPurchaseResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/purchases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddonPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~getAddonPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a purchase of an addon by user
     * @param {Number} addonId Id of the addon
     * @param {Number} userId Id of the user
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonPurchase`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~getAddonPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse}
     */
    getAddonPurchase(addonId, userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddonPurchase");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAddonPurchase");
      }

      let pathParams = {
        'addon_id': addonId,
        'user_id': userId
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
      let returnType = AddonPurchaseResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/purchases/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAddonPurchases operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~listAddonPurchasesCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchaseListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all purchases of an addon
     * @param {Number} addonId Id of the addon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonPurchase`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~listAddonPurchasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonPurchaseListResponse}
     */
    listAddonPurchases(addonId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling listAddonPurchases");
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
      let returnType = AddonPurchaseListResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/purchases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAddonPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~updateAddonPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a purchase for an addon
     * @param {Number} addonId Id of the addon
     * @param {Number} userId Id of the user
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchase} addonPurchase 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonPurchase`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi~updateAddonPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse}
     */
    updateAddonPurchase(addonId, userId, addonPurchase, opts, callback) {
      opts = opts || {};
      let postBody = addonPurchase;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling updateAddonPurchase");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateAddonPurchase");
      }
      // verify the required parameter 'addonPurchase' is set
      if (addonPurchase === undefined || addonPurchase === null) {
        throw new Error("Missing the required parameter 'addonPurchase' when calling updateAddonPurchase");
      }

      let pathParams = {
        'addon_id': addonId,
        'user_id': userId
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
      let returnType = AddonPurchaseResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/purchases/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
