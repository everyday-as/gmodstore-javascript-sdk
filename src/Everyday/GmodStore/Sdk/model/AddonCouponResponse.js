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
import AddonCoupon from './AddonCoupon';

/**
 * The AddonCouponResponse model module.
 * @module Everyday/GmodStore/Sdk/model/AddonCouponResponse
 * @version 1.2.3
 */
class AddonCouponResponse {
    /**
     * Constructs a new <code>AddonCouponResponse</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonCouponResponse
     */
    constructor() { 
        
        AddonCouponResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonCouponResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse} The populated <code>AddonCouponResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonCouponResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = AddonCoupon.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonCoupon} data
 */
AddonCouponResponse.prototype['data'] = undefined;






export default AddonCouponResponse;

