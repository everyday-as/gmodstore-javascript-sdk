/**
 * GmodStore
 * Welcome to the GmodStore API! You can use our API to access Gmodstore API endpoints, which can be used interact with Gmodstore programmatically.
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserBan model module.
 * @module Everyday\GmodStore\Sdk/model/UserBan
 * @version 1.0.1
 */
class UserBan {
    /**
     * Constructs a new <code>UserBan</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/UserBan
     */
    constructor() { 
        
        UserBan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserBan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/UserBan} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/UserBan} The populated <code>UserBan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserBan();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('unban_reason')) {
                obj['unban_reason'] = ApiClient.convertToType(data['unban_reason'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], ['String']);
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} user_id
 */
UserBan.prototype['user_id'] = undefined;

/**
 * @member {String} reason
 */
UserBan.prototype['reason'] = undefined;

/**
 * @member {String} unban_reason
 */
UserBan.prototype['unban_reason'] = undefined;

/**
 * @member {Array.<module:Everyday\GmodStore\Sdk/model/UserBan.PropertiesEnum>} properties
 */
UserBan.prototype['properties'] = undefined;

/**
 * @member {Date} start
 */
UserBan.prototype['start'] = undefined;

/**
 * @member {Date} end
 */
UserBan.prototype['end'] = undefined;





/**
 * Allowed values for the <code>properties</code> property.
 * @enum {String}
 * @readonly
 */
UserBan['PropertiesEnum'] = {

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



export default UserBan;

