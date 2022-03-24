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
import TeamResponse from '../model/TeamResponse';

/**
* Teams service.
* @module Everyday/GmodStore/Sdk/api/TeamsApi
* @version 1.3.1
*/
export default class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/TeamsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTeam operation.
     * @callback module:Everyday/GmodStore/Sdk/api/TeamsApi~getTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/TeamResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a single team
     * @param {Number} teamId Id of the team
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `Team`
     * @param {module:Everyday/GmodStore/Sdk/api/TeamsApi~getTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/TeamResponse}
     */
    getTeam(teamId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeam");
      }

      let pathParams = {
        'team_id': teamId
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
      let returnType = TeamResponse;
      return this.apiClient.callApi(
        '/teams/{team_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
