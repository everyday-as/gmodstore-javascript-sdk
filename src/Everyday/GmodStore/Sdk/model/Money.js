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
 * The Money model module.
 * @module Everyday/GmodStore/Sdk/model/Money
 * @version 1.2.0
 */
class Money {
    /**
     * Constructs a new <code>Money</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/Money
     */
    constructor() { 
        
        Money.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/Money} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/Money} The populated <code>Money</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Money();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Amount as a string specified in cents
 * @member {Number} amount
 */
Money.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
Money.prototype['currency'] = undefined;






export default Money;

