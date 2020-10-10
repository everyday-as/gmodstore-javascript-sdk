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

/**
 * The PermissionGroup model module.
 * @module Everyday/GmodStore/Sdk/model/PermissionGroup
 * @version 1.1.0
 */
class PermissionGroup {
    /**
     * Constructs a new <code>PermissionGroup</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/PermissionGroup
     */
    constructor() { 
        
        PermissionGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/PermissionGroup} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/PermissionGroup} The populated <code>PermissionGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionGroup();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('display_order')) {
                obj['display_order'] = ApiClient.convertToType(data['display_order'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PermissionGroup.prototype['id'] = undefined;

/**
 * @member {String} title
 */
PermissionGroup.prototype['title'] = undefined;

/**
 * @member {Number} display_order
 */
PermissionGroup.prototype['display_order'] = undefined;






export default PermissionGroup;

