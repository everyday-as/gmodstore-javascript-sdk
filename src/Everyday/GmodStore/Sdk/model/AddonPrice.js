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
 * The AddonPrice model module.
 * @module Everyday/GmodStore/Sdk/model/AddonPrice
 * @version 1.2.1
 */
class AddonPrice {
    /**
     * Constructs a new <code>AddonPrice</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonPrice
     */
    constructor() { 
        
        AddonPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPrice} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonPrice} The populated <code>AddonPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonPrice();

            if (data.hasOwnProperty('original')) {
                obj['original'] = Money.constructFromObject(data['original']);
            }
            if (data.hasOwnProperty('purchase')) {
                obj['purchase'] = Money.constructFromObject(data['purchase']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} original
 */
AddonPrice.prototype['original'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} purchase
 */
AddonPrice.prototype['purchase'] = undefined;






export default AddonPrice;

