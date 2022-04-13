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
 * The ConnectionPaginatedCursors model module.
 * @module Everyday/GmodStore/Sdk/model/ConnectionPaginatedCursors
 * @version 3.0.0
 */
class ConnectionPaginatedCursors {
    /**
     * Constructs a new <code>ConnectionPaginatedCursors</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ConnectionPaginatedCursors
     * @param prev {String} 
     * @param next {String} 
     */
    constructor(prev, next) { 
        
        ConnectionPaginatedCursors.initialize(this, prev, next);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prev, next) { 
        obj['prev'] = prev;
        obj['next'] = next;
    }

    /**
     * Constructs a <code>ConnectionPaginatedCursors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ConnectionPaginatedCursors} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ConnectionPaginatedCursors} The populated <code>ConnectionPaginatedCursors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectionPaginatedCursors();

            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} prev
 */
ConnectionPaginatedCursors.prototype['prev'] = undefined;

/**
 * @member {String} next
 */
ConnectionPaginatedCursors.prototype['next'] = undefined;






export default ConnectionPaginatedCursors;

