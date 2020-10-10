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

import ApiClient from '../ApiClient';
import UserBadgeLegend from './UserBadgeLegend';

/**
 * The BadgeListResponse model module.
 * @module Everyday/GmodStore/Sdk/model/BadgeListResponse
 * @version 1.1.0
 */
class BadgeListResponse {
    /**
     * Constructs a new <code>BadgeListResponse</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/BadgeListResponse
     */
    constructor() { 
        
        BadgeListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BadgeListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/BadgeListResponse} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/BadgeListResponse} The populated <code>BadgeListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BadgeListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UserBadgeLegend]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Everyday/GmodStore/Sdk/model/UserBadgeLegend>} data
 */
BadgeListResponse.prototype['data'] = undefined;






export default BadgeListResponse;

