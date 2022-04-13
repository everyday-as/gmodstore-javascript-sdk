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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import ProductFilter from '../model/ProductFilter';

/**
* UserProducts service.
* @module Everyday/GmodStore/Sdk/api/UserProductsApi
* @version 3.0.0
*/
export default class UserProductsApi {

    /**
    * Constructs a new UserProductsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/UserProductsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listUserProducts operation.
     * @callback module:Everyday/GmodStore/Sdk/api/UserProductsApi~listUserProductsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all the specified user's products
     * @param {String} user 
     * @param {Object} opts Optional parameters
     * @param {String} opts.cursor The cursor from which to return paginated results starting after
     * @param {module:Everyday/GmodStore/Sdk/model/ProductFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/UserProductsApi~listUserProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    listUserProducts(user, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling listUserProducts");
      }

      let pathParams = {
        'user': user
      };
      let queryParams = {
        'cursor': opts['cursor'],
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['PersonalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v3/users/{user}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
