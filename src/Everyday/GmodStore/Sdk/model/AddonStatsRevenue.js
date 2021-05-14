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
import AddonStatsRevenueCurrent from './AddonStatsRevenueCurrent';
import Money from './Money';

/**
 * The AddonStatsRevenue model module.
 * @module Everyday/GmodStore/Sdk/model/AddonStatsRevenue
 * @version 1.2.0
 */
class AddonStatsRevenue {
    /**
     * Constructs a new <code>AddonStatsRevenue</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonStatsRevenue
     */
    constructor() { 
        
        AddonStatsRevenue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonStatsRevenue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenue} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenue} The populated <code>AddonStatsRevenue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonStatsRevenue();

            if (data.hasOwnProperty('current')) {
                obj['current'] = AddonStatsRevenueCurrent.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = AddonStatsRevenueCurrent.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = Money.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent} current
 */
AddonStatsRevenue.prototype['current'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent} previous
 */
AddonStatsRevenue.prototype['previous'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} total
 */
AddonStatsRevenue.prototype['total'] = undefined;






export default AddonStatsRevenue;

