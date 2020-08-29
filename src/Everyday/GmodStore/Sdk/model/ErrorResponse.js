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
import Error from './Error';

/**
 * The ErrorResponse model module.
 * @module Everyday\GmodStore\Sdk/model/ErrorResponse
 * @version 1.0.1
 */
class ErrorResponse {
    /**
     * Constructs a new <code>ErrorResponse</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/ErrorResponse
     */
    constructor() { 
        
        ErrorResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/ErrorResponse} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Error.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Everyday\GmodStore\Sdk/model/Error} data
 */
ErrorResponse.prototype['data'] = undefined;






export default ErrorResponse;

