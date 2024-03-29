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

/**
 * The UpdateProductVersionPayload model module.
 * @module Everyday/GmodStore/Sdk/model/UpdateProductVersionPayload
 * @version 3.1.0
 */
class UpdateProductVersionPayload {
    /**
     * Constructs a new <code>UpdateProductVersionPayload</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/UpdateProductVersionPayload
     */
    constructor() { 
        
        UpdateProductVersionPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProductVersionPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/UpdateProductVersionPayload} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/UpdateProductVersionPayload} The populated <code>UpdateProductVersionPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductVersionPayload();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], 'String');
            }
            if (data.hasOwnProperty('release_type')) {
                obj['release_type'] = ApiClient.convertToType(data['release_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UpdateProductVersionPayload.prototype['name'] = undefined;

/**
 * @member {String} changelog
 */
UpdateProductVersionPayload.prototype['changelog'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/UpdateProductVersionPayload.ReleaseTypeEnum} release_type
 */
UpdateProductVersionPayload.prototype['release_type'] = undefined;





/**
 * Allowed values for the <code>release_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateProductVersionPayload['ReleaseTypeEnum'] = {

    /**
     * value: "stable"
     * @const
     */
    "stable": "stable",

    /**
     * value: "beta"
     * @const
     */
    "beta": "beta",

    /**
     * value: "alpha"
     * @const
     */
    "alpha": "alpha",

    /**
     * value: "private"
     * @const
     */
    "private": "private",

    /**
     * value: "demo"
     * @const
     */
    "demo": "demo"
};



export default UpdateProductVersionPayload;

