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
import GetProductResponse from '../model/GetProductResponse';
import GetProductsResponse from '../model/GetProductsResponse';
import ProductFilter from '../model/ProductFilter';

/**
* Products service.
* @module Everyday/GmodStore/Sdk/api/ProductsApi
* @version 3.1.0
*/
export default class ProductsApi {

    /**
    * Constructs a new ProductsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/ProductsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductsApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/GetProductResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the specified product
     * @param {String} product 
     * @param {Object} opts Optional parameters
     * @param {module:Everyday/GmodStore/Sdk/model/ProductFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/ProductsApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/GetProductResponse}
     */
    getProduct(product, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling getProduct");
      }

      let pathParams = {
        'product': product
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['PersonalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductResponse;
      return this.apiClient.callApi(
        '/api/v3/products/{product}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductsApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/GetProductsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a batch of products by id
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {module:Everyday/GmodStore/Sdk/model/ProductFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/ProductsApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/GetProductsResponse}
     */
    getProducts(ids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getProducts");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids[]': this.apiClient.buildCollectionParam(ids, 'multi'),
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['PersonalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProductsResponse;
      return this.apiClient.callApi(
        '/api/v3/products/batch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProducts operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductsApi~listProductsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all products for a team
     * @param {String} team 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage  (default to 24)
     * @param {String} opts.cursor The cursor from which to return paginated results starting after
     * @param {module:Everyday/GmodStore/Sdk/model/ProductFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/ProductsApi~listProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    listProducts(team, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling listProducts");
      }

      let pathParams = {
        'team': team
      };
      let queryParams = {
        'perPage': opts['perPage'],
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
        '/api/v3/teams/{team}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the specified product
     * @param {String} product 
     * @param {module:Everyday/GmodStore/Sdk/api/ProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateProduct(product, callback) {
      let postBody = null;
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling updateProduct");
      }

      let pathParams = {
        'product': product
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['PersonalAccessToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v3/products/{product}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}