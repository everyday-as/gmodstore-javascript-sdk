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
import Addon from './Addon';

/**
 * The AddonResponse model module.
 * @module Everyday/GmodStore/Sdk/model/AddonResponse
 * @version 1.2.0
 */
class AddonResponse {
    /**
     * Constructs a new <code>AddonResponse</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonResponse
     */
    constructor() { 
        
        AddonResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonResponse} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonResponse} The populated <code>AddonResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Addon.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Addon} data
 */
AddonResponse.prototype['data'] = undefined;






export default AddonResponse;

