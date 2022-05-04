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
 * The UpdatePermissionGroupPayload model module.
 * @module Everyday/GmodStore/Sdk/model/UpdatePermissionGroupPayload
 * @version 3.1.0
 */
class UpdatePermissionGroupPayload {
    /**
     * Constructs a new <code>UpdatePermissionGroupPayload</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/UpdatePermissionGroupPayload
     */
    constructor() { 
        
        UpdatePermissionGroupPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePermissionGroupPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/UpdatePermissionGroupPayload} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/UpdatePermissionGroupPayload} The populated <code>UpdatePermissionGroupPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePermissionGroupPayload();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
UpdatePermissionGroupPayload.prototype['title'] = undefined;

/**
 * @member {String} permissions
 */
UpdatePermissionGroupPayload.prototype['permissions'] = undefined;






export default UpdatePermissionGroupPayload;
