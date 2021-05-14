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
import Addon from './Addon';
import User from './User';

/**
 * The AddonCoupon model module.
 * @module Everyday/GmodStore/Sdk/model/AddonCoupon
 * @version 1.2.1
 */
class AddonCoupon {
    /**
     * Constructs a new <code>AddonCoupon</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonCoupon
     * @param id {Number} 
     * @param code {String} 
     * @param percent {Number} 
     * @param maxUses {Number} 
     * @param expiresAt {Date} A future date less than 2 weeks from today
     */
    constructor(id, code, percent, maxUses, expiresAt) { 
        
        AddonCoupon.initialize(this, id, code, percent, maxUses, expiresAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, code, percent, maxUses, expiresAt) { 
        obj['id'] = id;
        obj['code'] = code;
        obj['percent'] = percent;
        obj['max_uses'] = maxUses;
        obj['expires_at'] = expiresAt;
    }

    /**
     * Constructs a <code>AddonCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonCoupon} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonCoupon} The populated <code>AddonCoupon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonCoupon();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
            }
            if (data.hasOwnProperty('max_uses')) {
                obj['max_uses'] = ApiClient.convertToType(data['max_uses'], 'Number');
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Date');
            }
            if (data.hasOwnProperty('bound_user_id')) {
                obj['bound_user_id'] = ApiClient.convertToType(data['bound_user_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('addon')) {
                obj['addon'] = Addon.constructFromObject(data['addon']);
            }
            if (data.hasOwnProperty('bound_user')) {
                obj['bound_user'] = User.constructFromObject(data['bound_user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
AddonCoupon.prototype['id'] = undefined;

/**
 * @member {String} code
 */
AddonCoupon.prototype['code'] = undefined;

/**
 * @member {Number} percent
 */
AddonCoupon.prototype['percent'] = undefined;

/**
 * @member {Number} max_uses
 */
AddonCoupon.prototype['max_uses'] = undefined;

/**
 * A future date less than 2 weeks from today
 * @member {Date} expires_at
 */
AddonCoupon.prototype['expires_at'] = undefined;

/**
 * @member {Number} bound_user_id
 */
AddonCoupon.prototype['bound_user_id'] = undefined;

/**
 * @member {Date} created_at
 */
AddonCoupon.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
AddonCoupon.prototype['updated_at'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Addon} addon
 */
AddonCoupon.prototype['addon'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/User} bound_user
 */
AddonCoupon.prototype['bound_user'] = undefined;






export default AddonCoupon;

