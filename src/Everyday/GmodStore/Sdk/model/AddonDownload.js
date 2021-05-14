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
 * The AddonDownload model module.
 * @module Everyday/GmodStore/Sdk/model/AddonDownload
 * @version 1.2.1
 */
class AddonDownload {
    /**
     * Constructs a new <code>AddonDownload</code>.
     * **NOTE:** The url is valid for a single use within 24 hours **ONLY**!
     * @alias module:Everyday/GmodStore/Sdk/model/AddonDownload
     */
    constructor() { 
        
        AddonDownload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonDownload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonDownload} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonDownload} The populated <code>AddonDownload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonDownload();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
AddonDownload.prototype['url'] = undefined;






export default AddonDownload;

