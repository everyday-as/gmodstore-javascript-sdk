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
import AddonListResponse from '../model/AddonListResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* UserAddons service.
* @module Everyday\GmodStore\Sdk/api/UserAddonsApi
* @version 1.1.0
*/
export default class UserAddonsApi {

    /**
    * Constructs a new UserAddonsApi. 
    * @alias module:Everyday\GmodStore\Sdk/api/UserAddonsApi
    * @class
    * @param {module:Everyday\GmodStore\Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday\GmodStore\Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listUserAddons operation.
     * @callback module:Everyday\GmodStore\Sdk/api/UserAddonsApi~listUserAddonsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the addons authored / co-authored by a user
     * @param {Number} userId Id of the user
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday\GmodStore\Sdk/model/String>} opts._with The relations you want to fetch with the `Addon`
     * @param {module:Everyday\GmodStore\Sdk/api/UserAddonsApi~listUserAddonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday\GmodStore\Sdk/model/AddonListResponse}
     */
    listUserAddons(userId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listUserAddons");
      }

      let pathParams = {
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
      let returnType = AddonListResponse;
      return this.apiClient.callApi(
        '/users/{user_id}/addons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
