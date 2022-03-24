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
import User from './User';

/**
 * The ApiKey model module.
 * @module Everyday/GmodStore/Sdk/model/ApiKey
 * @version 1.3.2
 */
class ApiKey {
    /**
     * Constructs a new <code>ApiKey</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ApiKey
     */
    constructor() { 
        
        ApiKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ApiKey} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ApiKey} The populated <code>ApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKey();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Everyday/GmodStore/Sdk/model/ApiKey.PermissionsEnum>} permissions
 */
ApiKey.prototype['permissions'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/User} user
 */
ApiKey.prototype['user'] = undefined;





/**
 * Allowed values for the <code>permissions</code> property.
 * @enum {String}
 * @readonly
 */
ApiKey['PermissionsEnum'] = {

    /**
     * value: "addons.read"
     * @const
     */
    "addons.read": "addons.read",

    /**
     * value: "addons.coupons.read"
     * @const
     */
    "addons.coupons.read": "addons.coupons.read",

    /**
     * value: "addons.coupons.write"
     * @const
     */
    "addons.coupons.write": "addons.coupons.write",

    /**
     * value: "addons.purchases.read"
     * @const
     */
    "addons.purchases.read": "addons.purchases.read",

    /**
     * value: "addons.purchases.write"
     * @const
     */
    "addons.purchases.write": "addons.purchases.write",

    /**
     * value: "addons.reviews.read"
     * @const
     */
    "addons.reviews.read": "addons.reviews.read",

    /**
     * value: "teams.read"
     * @const
     */
    "teams.read": "teams.read",

    /**
     * value: "users.read"
     * @const
     */
    "users.read": "users.read",

    /**
     * value: "users.write"
     * @const
     */
    "users.write": "users.write",

    /**
     * value: "addons.versions.read"
     * @const
     */
    "addons.versions.read": "addons.versions.read",

    /**
     * value: "addons.versions.write"
     * @const
     */
    "addons.versions.write": "addons.versions.write",

    /**
     * value: "addons.versions.download"
     * @const
     */
    "addons.versions.download": "addons.versions.download"
};



export default ApiKey;

