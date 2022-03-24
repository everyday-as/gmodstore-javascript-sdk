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
import AddonDownloadResponse from '../model/AddonDownloadResponse';
import AddonVersion from '../model/AddonVersion';
import AddonVersionListResponse from '../model/AddonVersionListResponse';
import AddonVersionResponse from '../model/AddonVersionResponse';
import ErrorResponse from '../model/ErrorResponse';
import NewAddonVersion from '../model/NewAddonVersion';

/**
* AddonVersions service.
* @module Everyday/GmodStore/Sdk/api/AddonVersionsApi
* @version 1.3.1
*/
export default class AddonVersionsApi {

    /**
    * Constructs a new AddonVersionsApi. 
    * @alias module:Everyday/GmodStore/Sdk/api/AddonVersionsApi
    * @class
    * @param {module:Everyday/GmodStore/Sdk/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:Everyday/GmodStore/Sdk/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAddonVersion operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~createAddonVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new version for an addon
     * @param {Number} addonId Id of the addon
     * @param {module:Everyday/GmodStore/Sdk/model/NewAddonVersion} newAddonVersion 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonVersion`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~createAddonVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonVersionResponse}
     */
    createAddonVersion(addonId, newAddonVersion, opts, callback) {
      opts = opts || {};
      let postBody = newAddonVersion;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling createAddonVersion");
      }
      // verify the required parameter 'newAddonVersion' is set
      if (newAddonVersion === undefined || newAddonVersion === null) {
        throw new Error("Missing the required parameter 'newAddonVersion' when calling createAddonVersion");
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
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AddonVersionResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadAddonVersion operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~downloadAddonVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonDownloadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a download token for a specific version of an addon
     * @param {Number} addonId Id of the addon
     * @param {Number} versionId Id of the version
     * @param {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~downloadAddonVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonDownloadResponse}
     */
    downloadAddonVersion(addonId, versionId, callback) {
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling downloadAddonVersion");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling downloadAddonVersion");
      }

      let pathParams = {
        'addon_id': addonId,
        'version_id': versionId
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
      let returnType = AddonDownloadResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/versions/{version_id}/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddonVersion operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~getAddonVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a specific version of an addon
     * @param {Number} addonId Id of the addon
     * @param {Number} versionId Id of the version
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonVersion`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~getAddonVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonVersionResponse}
     */
    getAddonVersion(addonId, versionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling getAddonVersion");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getAddonVersion");
      }

      let pathParams = {
        'addon_id': addonId,
        'version_id': versionId
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
      let returnType = AddonVersionResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/versions/{version_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAddonVersions operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~listAddonVersionsCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersionListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch all the versions of an addon
     * @param {Number} addonId Id of the addon
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonVersion`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~listAddonVersionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonVersionListResponse}
     */
    listAddonVersions(addonId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling listAddonVersions");
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
      let returnType = AddonVersionListResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAddonVersion operation.
     * @callback module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~updateAddonVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a version of an addon
     * @param {Number} addonId Id of the addon
     * @param {Number} versionId Id of the version
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersion} addonVersion 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Everyday/GmodStore/Sdk/model/String>} opts._with The relations you want to fetch with the `AddonVersion`
     * @param {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi~updateAddonVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Everyday/GmodStore/Sdk/model/AddonVersionResponse}
     */
    updateAddonVersion(addonId, versionId, addonVersion, opts, callback) {
      opts = opts || {};
      let postBody = addonVersion;
      // verify the required parameter 'addonId' is set
      if (addonId === undefined || addonId === null) {
        throw new Error("Missing the required parameter 'addonId' when calling updateAddonVersion");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateAddonVersion");
      }
      // verify the required parameter 'addonVersion' is set
      if (addonVersion === undefined || addonVersion === null) {
        throw new Error("Missing the required parameter 'addonVersion' when calling updateAddonVersion");
      }

      let pathParams = {
        'addon_id': addonId,
        'version_id': versionId
      };
      let queryParams = {
        'with': this.apiClient.buildCollectionParam(opts['_with'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AddonVersionResponse;
      return this.apiClient.callApi(
        '/addons/{addon_id}/versions/{version_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
