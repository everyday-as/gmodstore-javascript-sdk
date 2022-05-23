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
import UserBanListResponse from '../model/UserBanListResponse';

/**
* UserBans service.
* @module Everyday/GmodStore/Sdk/api/UserBansApi
* @version 3.1.0
*/
export default class UserBansApi {

    /**
    * Constructs a new UserBansApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/UserBansApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listUserBans operation.
     * @callback module:Everyday/GmodStore/Sdk/api/UserBansApi~listUserBansCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/UserBanListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all active bans associated with this user
     * @param {Number} userId Id of the user
     * @param {module:Everyday/GmodStore/Sdk/api/UserBansApi~listUserBansCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/UserBanListResponse}
     */
    listUserBans(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listUserBans");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = UserBanListResponse;
      return this.apiClient.callApi(
        '/users/{user_id}/bans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
