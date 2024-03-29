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
import AddonStatsViewsCurrent from './AddonStatsViewsCurrent';

/**
 * The AddonStatsViews model module.
 * @module Everyday/GmodStore/Sdk/model/AddonStatsViews
 * @version 3.1.0
 */
class AddonStatsViews {
    /**
     * Constructs a new <code>AddonStatsViews</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonStatsViews
     */
    constructor() { 
        
        AddonStatsViews.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonStatsViews</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonStatsViews} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonStatsViews} The populated <code>AddonStatsViews</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonStatsViews();

            if (data.hasOwnProperty('current')) {
                obj['current'] = AddonStatsViewsCurrent.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = AddonStatsViewsCurrent.constructFromObject(data['previous']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStatsViewsCurrent} current
 */
AddonStatsViews.prototype['current'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStatsViewsCurrent} previous
 */
AddonStatsViews.prototype['previous'] = undefined;

/**
 * @member {String} total
 */
AddonStatsViews.prototype['total'] = undefined;






export default AddonStatsViews;

