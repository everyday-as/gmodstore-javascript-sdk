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
import BadgeListResponse from '../model/BadgeListResponse';
import BadgeResponse from '../model/BadgeResponse';
import ErrorResponse from '../model/ErrorResponse';
import UserBadge from '../model/UserBadge';

/**
* UserBadges service.
* @module Everyday/GmodStore/Sdk/api/UserBadgesApi
* @version 1.2.1
*/
export default class UserBadgesApi {

    /**
    * Constructs a new UserBadgesApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/UserBadgesApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createUserBadge operation.
     * @callback module:Everyday/GmodStore/Sdk/api/UserBadgesApi~createUserBadgeCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/BadgeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Give a user a badge
     * @param {Number} userId Id of the user
     * @param {module:Everyday/GmodStore/Sdk/model/UserBadge} userBadge 
     * @param {module:Everyday/GmodStore/Sdk/api/UserBadgesApi~createUserBadgeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/BadgeResponse}
     */
    createUserBadge(userId, userBadge, callback) {
      let postBody = userBadge;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserBadge");
      }
      // verify the required parameter 'userBadge' is set
      if (userBadge === undefined || userBadge === null) {
        throw new Error("Missing the required parameter 'userBadge' when calling createUserBadge");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BadgeResponse;
      return this.apiClient.callApi(
        '/users/{user_id}/badges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserBadge operation.
     * @callback module:Everyday/GmodStore/Sdk/api/UserBadgesApi~deleteUserBadgeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Destroy a users's badge
     * @param {Number} userId Id of the user
     * @param {String} badgeId Id of the badge
     * @param {module:Everyday/GmodStore/Sdk/api/UserBadgesApi~deleteUserBadgeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUserBadge(userId, badgeId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserBadge");
      }
      // verify the required parameter 'badgeId' is set
      if (badgeId === undefined || badgeId === null) {
        throw new Error("Missing the required parameter 'badgeId' when calling deleteUserBadge");
      }

      let pathParams = {
        'user_id': userId,
        'badge_id': badgeId
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
        '/users/{user_id}/badges/{badge_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listUserBadges operation.
     * @callback module:Everyday/GmodStore/Sdk/api/UserBadgesApi~listUserBadgesCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/BadgeListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the badges a user has
     * @param {Number} userId Id of the user
     * @param {module:Everyday/GmodStore/Sdk/api/UserBadgesApi~listUserBadgesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/BadgeListResponse}
     */
    listUserBadges(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listUserBadges");
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
      let returnType = BadgeListResponse;
      return this.apiClient.callApi(
        '/users/{user_id}/badges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
