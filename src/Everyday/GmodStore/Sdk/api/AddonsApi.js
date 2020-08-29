/**
 * GmodStore API
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddonListResponse from '../model/AddonListResponse';
import AddonResponse from '../model/AddonResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* Addons service.
* @module Everyday\GmodStore\Sdk/api/AddonsApi
* @version 1.0.1
*/
export default class AddonsApi {

    /**
    * Constructs a new AddonsApi. 
    * @alias module:Everyday\GmodStore\Sdk/api/AddonsApi
    * @class
    * @param {module:Everyday\GmodStore\Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday\GmodStore\Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAddon operation.
     * @callback module:Everyday\GmodStore\Sdk/api/AddonsApi~getAddonCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a single addon
     * @param {Number} addonId Id of the addon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday\GmodStore\Sdk/model/String>} opts._with The relations you want to fetch with the `Addon`
     * @param {module:Everyday\GmodStore\Sdk/api/AddonsApi~getAddonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday\GmodStore\Sdk/model/AddonResponse}
     */
    getAddon(addonId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddon");
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
      let returnType = AddonResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSelfAddons operation.
     * @callback module:Everyday\GmodStore\Sdk/api/AddonsApi~listSelfAddonsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the addons that you have access to
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday\GmodStore\Sdk/model/String>} opts._with The relations you want to fetch with the `Addon`
     * @param {module:Everyday\GmodStore\Sdk/api/AddonsApi~listSelfAddonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday\GmodStore\Sdk/model/AddonListResponse}
     */
    listSelfAddons(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = AddonListResponse;
      return this.apiClient.callApi(
        '/addons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
