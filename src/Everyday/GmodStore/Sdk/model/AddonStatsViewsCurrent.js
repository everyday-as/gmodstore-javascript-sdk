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

/**
 * The AddonStatsViewsCurrent model module.
 * @module Everyday\GmodStore\Sdk/model/AddonStatsViewsCurrent
 * @version 1.1.0
 */
class AddonStatsViewsCurrent {
    /**
     * Constructs a new <code>AddonStatsViewsCurrent</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/AddonStatsViewsCurrent
     */
    constructor() { 
        
        AddonStatsViewsCurrent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonStatsViewsCurrent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonStatsViewsCurrent} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/AddonStatsViewsCurrent} The populated <code>AddonStatsViewsCurrent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonStatsViewsCurrent();

            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} day
 */
AddonStatsViewsCurrent.prototype['day'] = undefined;

/**
 * @member {Number} month
 */
AddonStatsViewsCurrent.prototype['month'] = undefined;






export default AddonStatsViewsCurrent;

