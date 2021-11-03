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
import Money from './Money';

/**
 * The AddonStatsRevenueCurrent model module.
 * @module Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent
 * @version 1.2.3
 */
class AddonStatsRevenueCurrent {
    /**
     * Constructs a new <code>AddonStatsRevenueCurrent</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent
     */
    constructor() { 
        
        AddonStatsRevenueCurrent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonStatsRevenueCurrent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent} The populated <code>AddonStatsRevenueCurrent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonStatsRevenueCurrent();

            if (data.hasOwnProperty('day')) {
                obj['day'] = Money.constructFromObject(data['day']);
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = Money.constructFromObject(data['month']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} day
 */
AddonStatsRevenueCurrent.prototype['day'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} month
 */
AddonStatsRevenueCurrent.prototype['month'] = undefined;






export default AddonStatsRevenueCurrent;

