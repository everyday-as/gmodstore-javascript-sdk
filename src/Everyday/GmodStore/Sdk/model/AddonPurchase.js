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
import OrderItem from './OrderItem';
import User from './User';

/**
 * The AddonPurchase model module.
 * @module Everyday/GmodStore/Sdk/model/AddonPurchase
 * @version 3.1.0
 */
class AddonPurchase {
    /**
     * Constructs a new <code>AddonPurchase</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonPurchase
     * @param revoked {Boolean} 
     */
    constructor(revoked) { 
        
        AddonPurchase.initialize(this, revoked);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, revoked) { 
        obj['revoked'] = revoked;
    }

    /**
     * Constructs a <code>AddonPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonPurchase} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonPurchase} The populated <code>AddonPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonPurchase();

            if (data.hasOwnProperty('revoked')) {
                obj['revoked'] = ApiClient.convertToType(data['revoked'], 'Boolean');
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
            if (data.hasOwnProperty('order_item')) {
                obj['order_item'] = OrderItem.constructFromObject(data['order_item']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} revoked
 */
AddonPurchase.prototype['revoked'] = undefined;

/**
 * @member {Date} created_at
 */
AddonPurchase.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
AddonPurchase.prototype['updated_at'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Addon} addon
 */
AddonPurchase.prototype['addon'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/OrderItem} order_item
 */
AddonPurchase.prototype['order_item'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/User} user
 */
AddonPurchase.prototype['user'] = undefined;






export default AddonPurchase;

