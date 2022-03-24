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
import ErrorResponse from '../model/ErrorResponse';
import PermissionGroupListResponse from '../model/PermissionGroupListResponse';

/**
* PermissionGroups service.
* @module Everyday/GmodStore/Sdk/api/PermissionGroupsApi
* @version 1.3.1
*/
export default class PermissionGroupsApi {

    /**
    * Constructs a new PermissionGroupsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/PermissionGroupsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listPermissionGroups operation.
     * @callback module:Everyday/GmodStore/Sdk/api/PermissionGroupsApi~listPermissionGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/PermissionGroupListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches all available permission groups
     * @param {module:Everyday/GmodStore/Sdk/api/PermissionGroupsApi~listPermissionGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/PermissionGroupListResponse}
     */
    listPermissionGroups(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = PermissionGroupListResponse;
      return this.apiClient.callApi(
        '/permission-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
