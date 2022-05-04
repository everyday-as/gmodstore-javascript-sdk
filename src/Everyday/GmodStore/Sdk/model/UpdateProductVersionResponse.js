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

import ApiClient from '../ApiClient';
import ProductVersion from './ProductVersion';

/**
 * The UpdateProductVersionResponse model module.
 * @module Everyday/GmodStore/Sdk/model/UpdateProductVersionResponse
 * @version 3.1.0
 */
class UpdateProductVersionResponse {
    /**
     * Constructs a new <code>UpdateProductVersionResponse</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/UpdateProductVersionResponse
     * @param data {module:Everyday/GmodStore/Sdk/model/ProductVersion} 
     */
    constructor(data) { 
        
        UpdateProductVersionResponse.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>UpdateProductVersionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/UpdateProductVersionResponse} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/UpdateProductVersionResponse} The populated <code>UpdateProductVersionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductVersionResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ProductVersion.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/ProductVersion} data
 */
UpdateProductVersionResponse.prototype['data'] = undefined;






export default UpdateProductVersionResponse;
