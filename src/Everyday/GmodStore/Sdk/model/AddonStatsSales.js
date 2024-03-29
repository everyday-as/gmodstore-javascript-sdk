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
import AddonStatsSalesCurrent from './AddonStatsSalesCurrent';

/**
 * The AddonStatsSales model module.
 * @module Everyday/GmodStore/Sdk/model/AddonStatsSales
 * @version 3.1.0
 */
class AddonStatsSales {
    /**
     * Constructs a new <code>AddonStatsSales</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonStatsSales
     */
    constructor() { 
        
        AddonStatsSales.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonStatsSales</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonStatsSales} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonStatsSales} The populated <code>AddonStatsSales</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonStatsSales();

            if (data.hasOwnProperty('current')) {
                obj['current'] = AddonStatsSalesCurrent.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStatsSalesCurrent} current
 */
AddonStatsSales.prototype['current'] = undefined;

/**
 * @member {String} total
 */
AddonStatsSales.prototype['total'] = undefined;






export default AddonStatsSales;

