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
import AddonReviewListResponse from '../model/AddonReviewListResponse';
import AddonReviewResponse from '../model/AddonReviewResponse';
import ErrorResponse from '../model/ErrorResponse';

/**
* AddonReviews service.
* @module Everyday/GmodStore/Sdk/api/AddonReviewsApi
* @version 1.1.0
*/
export default class AddonReviewsApi {

    /**
    * Constructs a new AddonReviewsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/AddonReviewsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAddonReview operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonReviewsApi~getAddonReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonReviewResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a review of an addon
     * @param {Number} addonId Id of the addon
     * @param {Number} reviewId Id of the review
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonReview`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonReviewsApi~getAddonReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonReviewResponse}
     */
    getAddonReview(addonId, reviewId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddonReview");
      }
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling getAddonReview");
      }

      let pathParams = {
        'addon_id': addonId,
        'review_id': reviewId
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
      let returnType = AddonReviewResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/reviews/{review_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAddonReviews operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonReviewsApi~listAddonReviewsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonReviewListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the reviews of an addon
     * @param {Number} addonId Id of the addon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonReview`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonReviewsApi~listAddonReviewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonReviewListResponse}
     */
    listAddonReviews(addonId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling listAddonReviews");
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
      let returnType = AddonReviewListResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/reviews', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
