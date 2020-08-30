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


import ApiClient from "../ApiClient";
import AddonStatsListResponse from '../model/AddonStatsListResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* AddonStats service.
* @module Everyday\GmodStore\Sdk/api/AddonStatsApi
* @version 1.1.0
*/
export default class AddonStatsApi {

    /**
    * Constructs a new AddonStatsApi. 
    * @alias module:Everyday\GmodStore\Sdk/api/AddonStatsApi
    * @class
    * @param {module:Everyday\GmodStore\Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday\GmodStore\Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAddonStats operation.
     * @callback module:Everyday\GmodStore\Sdk/api/AddonStatsApi~getAddonStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonStatsListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the stats for an addon
     * @param {Number} addonId Id of the addon
     * @param {module:Everyday\GmodStore\Sdk/api/AddonStatsApi~getAddonStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday\GmodStore\Sdk/model/AddonStatsListResponse}
     */
    getAddonStats(addonId, callback) {
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddonStats");
      }

      let pathParams = {
        'addon_id': addonId
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
      let returnType = AddonStatsListResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
