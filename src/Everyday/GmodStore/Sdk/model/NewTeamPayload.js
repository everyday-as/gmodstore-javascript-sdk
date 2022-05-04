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
 * The NewTeamPayload model module.
 * @module Everyday/GmodStore/Sdk/model/NewTeamPayload
 * @version 3.1.0
 */
class NewTeamPayload {
    /**
     * Constructs a new <code>NewTeamPayload</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/NewTeamPayload
     * @param name {String} 
     */
    constructor(name) { 
        
        NewTeamPayload.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>NewTeamPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/NewTeamPayload} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/NewTeamPayload} The populated <code>NewTeamPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewTeamPayload();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewTeamPayload.prototype['name'] = undefined;

/**
 * @member {String} description
 */
NewTeamPayload.prototype['description'] = undefined;






export default NewTeamPayload;
