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
import CreateProductPurchaseResponse from '../model/CreateProductPurchaseResponse';
import Error from '../model/Error';
import GetProductPurchaseResponse from '../model/GetProductPurchaseResponse';
import NewProductPurchasePayload from '../model/NewProductPurchasePayload';
import ProductPurchaseFilter from '../model/ProductPurchaseFilter';
import UpdateProductPurchasePayload from '../model/UpdateProductPurchasePayload';
import UpdateProductPurchaseResponse from '../model/UpdateProductPurchaseResponse';

/**
* ProductPurchases service.
* @module Everyday/GmodStore/Sdk/api/ProductPurchasesApi
* @version 3.1.0
*/
export default class ProductPurchasesApi {

    /**
    * Constructs a new ProductPurchasesApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createProductPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~createProductPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/CreateProductPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a purchase for a product
     * @param {String} product 
     * @param {Object} opts Optional parameters
     * @param {module:Everyday/GmodStore/Sdk/model/NewProductPurchasePayload} opts.newProductPurchasePayload 
     * @param {module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~createProductPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/CreateProductPurchaseResponse}
     */
    createProductPurchase(product, opts, callback) {
      opts = opts || {};
      let postBody = opts['newProductPurchasePayload'];
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling createProductPurchase");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateProductPurchaseResponse;
      return this.apiClient.callApi(
        '/api/v3/products/{product}/purchases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~getProductPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/GetProductPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Show the specified purchase for a product
     * @param {String} product 
     * @param {String} purchase 
     * @param {Object} opts Optional parameters
     * @param {module:Everyday/GmodStore/Sdk/model/ProductPurchaseFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~getProductPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/GetProductPurchaseResponse}
     */
    getProductPurchase(product, purchase, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling getProductPurchase");
      }
      // verify the required parameter 'purchase' is set
      if (purchase === undefined || purchase === null) {
        throw new Error("Missing the required parameter 'purchase' when calling getProductPurchase");
      }

      let pathParams = {
        'product': product,
        'purchase': purchase
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
      let returnType = GetProductPurchaseResponse;
      return this.apiClient.callApi(
        '/api/v3/products/{product}/purchases/{purchase}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listProductPurchases operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~listProductPurchasesCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all purchases for a product
     * @param {String} product 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.perPage  (default to 24)
     * @param {String} opts.cursor The cursor from which to return paginated results starting after
     * @param {module:Everyday/GmodStore/Sdk/model/ProductPurchaseFilter} opts.filter Filter the results
     * @param {module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~listProductPurchasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    listProductPurchases(product, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling listProductPurchases");
      }

      let pathParams = {
        'product': product
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
        '/api/v3/products/{product}/purchases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProductPurchase operation.
     * @callback module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~updateProductPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/UpdateProductPurchaseResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the specified purchase for a product
     * @param {String} product 
     * @param {String} purchase 
     * @param {Object} opts Optional parameters
     * @param {module:Everyday/GmodStore/Sdk/model/UpdateProductPurchasePayload} opts.updateProductPurchasePayload 
     * @param {module:Everyday/GmodStore/Sdk/api/ProductPurchasesApi~updateProductPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/UpdateProductPurchaseResponse}
     */
    updateProductPurchase(product, purchase, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateProductPurchasePayload'];
      // verify the required parameter 'product' is set
      if (product === undefined || product === null) {
        throw new Error("Missing the required parameter 'product' when calling updateProductPurchase");
      }
      // verify the required parameter 'purchase' is set
      if (purchase === undefined || purchase === null) {
        throw new Error("Missing the required parameter 'purchase' when calling updateProductPurchase");
      }

      let pathParams = {
        'product': product,
        'purchase': purchase
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['PersonalAccessToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateProductPurchaseResponse;
      return this.apiClient.callApi(
        '/api/v3/products/{product}/purchases/{purchase}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}