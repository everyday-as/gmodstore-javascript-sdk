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
import AddonVersionReleaseType from './AddonVersionReleaseType';

/**
 * The AddonVersion model module.
 * @module Everyday/GmodStore/Sdk/model/AddonVersion
 * @version 1.3.2
 */
class AddonVersion {
    /**
     * Constructs a new <code>AddonVersion</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonVersion
     * @param name {String} 
     * @param changelog {String} You can pass in markdown here
     */
    constructor(name, changelog) { 
        
        AddonVersion.initialize(this, name, changelog);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, changelog) { 
        obj['name'] = name;
        obj['changelog'] = changelog;
    }

    /**
     * Constructs a <code>AddonVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonVersion} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonVersion} The populated <code>AddonVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonVersion();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], 'String');
            }
            if (data.hasOwnProperty('file_hash')) {
                obj['file_hash'] = ApiClient.convertToType(data['file_hash'], 'String');
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('release_type')) {
                obj['release_type'] = AddonVersionReleaseType.constructFromObject(data['release_type']);
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
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
AddonVersion.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AddonVersion.prototype['name'] = undefined;

/**
 * You can pass in markdown here
 * @member {String} changelog
 */
AddonVersion.prototype['changelog'] = undefined;

/**
 * @member {String} file_hash
 */
AddonVersion.prototype['file_hash'] = undefined;

/**
 * @member {Number} file_size
 */
AddonVersion.prototype['file_size'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonVersionReleaseType} release_type
 */
AddonVersion.prototype['release_type'] = undefined;

/**
 * @member {Date} created_at
 */
AddonVersion.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
AddonVersion.prototype['updated_at'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Addon} addon
 */
AddonVersion.prototype['addon'] = undefined;






export default AddonVersion;

