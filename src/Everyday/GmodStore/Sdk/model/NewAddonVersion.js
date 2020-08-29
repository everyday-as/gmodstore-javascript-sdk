/**
 * GmodStore API
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
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
import AddonVersionReleaseType from './AddonVersionReleaseType';

/**
 * The NewAddonVersion model module.
 * @module Everyday\GmodStore\Sdk/model/NewAddonVersion
 * @version 1.0.1
 */
class NewAddonVersion {
    /**
     * Constructs a new <code>NewAddonVersion</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/NewAddonVersion
     * @param name {String} 
     * @param changelog {String} You can pass in markdown here
     * @param file {File} 
     */
    constructor(name, changelog, file) { 
        
        NewAddonVersion.initialize(this, name, changelog, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, changelog, file) { 
        obj['name'] = name;
        obj['changelog'] = changelog;
        obj['file'] = file;
    }

    /**
     * Constructs a <code>NewAddonVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/NewAddonVersion} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/NewAddonVersion} The populated <code>NewAddonVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewAddonVersion();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('release_type')) {
                obj['release_type'] = AddonVersionReleaseType.constructFromObject(data['release_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
NewAddonVersion.prototype['name'] = undefined;

/**
 * You can pass in markdown here
 * @member {String} changelog
 */
NewAddonVersion.prototype['changelog'] = undefined;

/**
 * @member {File} file
 */
NewAddonVersion.prototype['file'] = undefined;

/**
 * @member {module:Everyday\GmodStore\Sdk/model/AddonVersionReleaseType} release_type
 */
NewAddonVersion.prototype['release_type'] = undefined;






export default NewAddonVersion;

