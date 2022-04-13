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
 * The NewPermissionGroupPayload model module.
 * @module Everyday/GmodStore/Sdk/model/NewPermissionGroupPayload
 * @version 3.0.0
 */
class NewPermissionGroupPayload {
    /**
     * Constructs a new <code>NewPermissionGroupPayload</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/NewPermissionGroupPayload
     * @param title {String} 
     * @param permissions {String} 
     */
    constructor(title, permissions) { 
        
        NewPermissionGroupPayload.initialize(this, title, permissions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, permissions) { 
        obj['title'] = title;
        obj['permissions'] = permissions;
    }

    /**
     * Constructs a <code>NewPermissionGroupPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/NewPermissionGroupPayload} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/NewPermissionGroupPayload} The populated <code>NewPermissionGroupPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewPermissionGroupPayload();

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
NewPermissionGroupPayload.prototype['title'] = undefined;

/**
 * @member {String} permissions
 */
NewPermissionGroupPayload.prototype['permissions'] = undefined;






export default NewPermissionGroupPayload;

