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

/**
 * The AdventCalendarStats model module.
 * @module Everyday/GmodStore/Sdk/model/AdventCalendarStats
 * @version 1.3.0
 */
class AdventCalendarStats {
    /**
     * Constructs a new <code>AdventCalendarStats</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AdventCalendarStats
     */
    constructor() { 
        
        AdventCalendarStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdventCalendarStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AdventCalendarStats} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AdventCalendarStats} The populated <code>AdventCalendarStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdventCalendarStats();

            if (data.hasOwnProperty('squares_opened')) {
                obj['squares_opened'] = ApiClient.convertToType(data['squares_opened'], 'Number');
            }
            if (data.hasOwnProperty('addons_awarded')) {
                obj['addons_awarded'] = ApiClient.convertToType(data['addons_awarded'], 'Number');
            }
            if (data.hasOwnProperty('coupons_awarded')) {
                obj['coupons_awarded'] = ApiClient.convertToType(data['coupons_awarded'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} squares_opened
 */
AdventCalendarStats.prototype['squares_opened'] = undefined;

/**
 * @member {Number} addons_awarded
 */
AdventCalendarStats.prototype['addons_awarded'] = undefined;

/**
 * @member {Number} coupons_awarded
 */
AdventCalendarStats.prototype['coupons_awarded'] = undefined;






export default AdventCalendarStats;

