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
import PermissionGroup from './PermissionGroup';

/**
 * The User model module.
 * @module Everyday/GmodStore/Sdk/model/User
 * @version 1.1.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/User} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('reputation')) {
                obj['reputation'] = ApiClient.convertToType(data['reputation'], 'Number');
            }
            if (data.hasOwnProperty('team_reputation')) {
                obj['team_reputation'] = ApiClient.convertToType(data['team_reputation'], 'Number');
            }
            if (data.hasOwnProperty('ban_properties')) {
                obj['ban_properties'] = ApiClient.convertToType(data['ban_properties'], ['String']);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = PermissionGroup.constructFromObject(data['group']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} name
 */
User.prototype['name'] = undefined;

/**
 * @member {String} avatar
 */
User.prototype['avatar'] = undefined;

/**
 * @member {String} country_code
 */
User.prototype['country_code'] = undefined;

/**
 * @member {String} slug
 */
User.prototype['slug'] = undefined;

/**
 * @member {Number} reputation
 */
User.prototype['reputation'] = undefined;

/**
 * @member {Number} team_reputation
 */
User.prototype['team_reputation'] = undefined;

/**
 * @member {Array.<module:Everyday/GmodStore/Sdk/model/User.BanPropertiesEnum>} ban_properties
 */
User.prototype['ban_properties'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/PermissionGroup} group
 */
User.prototype['group'] = undefined;





/**
 * Allowed values for the <code>banProperties</code> property.
 * @enum {String}
 * @readonly
 */
User['BanPropertiesEnum'] = {

    /**
     * value: "everything"
     * @const
     */
    "everything": "everything",

    /**
     * value: "addon.create"
     * @const
     */
    "addon.create": "addon.create",

    /**
     * value: "addon.purchase"
     * @const
     */
    "addon.purchase": "addon.purchase",

    /**
     * value: "addon.download"
     * @const
     */
    "addon.download": "addon.download",

    /**
     * value: "addon.review"
     * @const
     */
    "addon.review": "addon.review",

    /**
     * value: "addon.comment"
     * @const
     */
    "addon.comment": "addon.comment",

    /**
     * value: "job.create"
     * @const
     */
    "job.create": "job.create",

    /**
     * value: "job.apply"
     * @const
     */
    "job.apply": "job.apply",

    /**
     * value: "job.review"
     * @const
     */
    "job.review": "job.review",

    /**
     * value: "job.comment"
     * @const
     */
    "job.comment": "job.comment",

    /**
     * value: "ban.appeal"
     * @const
     */
    "ban.appeal": "ban.appeal"
};



export default User;

