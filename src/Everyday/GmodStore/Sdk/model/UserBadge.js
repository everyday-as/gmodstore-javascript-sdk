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

/**
 * The UserBadge model module.
 * @module Everyday/GmodStore/Sdk/model/UserBadge
 * @version 3.1.0
 */
class UserBadge {
    /**
     * Constructs a new <code>UserBadge</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/UserBadge
     * @param badge {String} 
     */
    constructor(badge) { 
        
        UserBadge.initialize(this, badge);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, badge) { 
        obj['badge'] = badge;
    }

    /**
     * Constructs a <code>UserBadge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/UserBadge} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/UserBadge} The populated <code>UserBadge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserBadge();

            if (data.hasOwnProperty('badge')) {
                obj['badge'] = ApiClient.convertToType(data['badge'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} badge
 */
UserBadge.prototype['badge'] = undefined;






export default UserBadge;

