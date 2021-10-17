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

import ApiClient from '../ApiClient';
import UserBadgeLegend from './UserBadgeLegend';

/**
 * The BadgeResponse model module.
 * @module Everyday/GmodStore/Sdk/model/BadgeResponse
 * @version 1.2.2
 */
class BadgeResponse {
    /**
     * Constructs a new <code>BadgeResponse</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/BadgeResponse
     */
    constructor() { 
        
        BadgeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BadgeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/BadgeResponse} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/BadgeResponse} The populated <code>BadgeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BadgeResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = UserBadgeLegend.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/UserBadgeLegend} data
 */
BadgeResponse.prototype['data'] = undefined;






export default BadgeResponse;

