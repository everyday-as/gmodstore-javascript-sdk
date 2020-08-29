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
import AddonVersion from './AddonVersion';

/**
 * The AddonVersionListResponse model module.
 * @module Everyday\GmodStore\Sdk/model/AddonVersionListResponse
 * @version 1.0.1
 */
class AddonVersionListResponse {
    /**
     * Constructs a new <code>AddonVersionListResponse</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/AddonVersionListResponse
     */
    constructor() { 
        
        AddonVersionListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonVersionListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/AddonVersionListResponse} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/AddonVersionListResponse} The populated <code>AddonVersionListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonVersionListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [AddonVersion]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:Everyday\GmodStore\Sdk/model/AddonVersion>} data
 */
AddonVersionListResponse.prototype['data'] = undefined;






export default AddonVersionListResponse;

