/**
 * gmodstore
 * Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.  # Rate limits Every request you make to the GmodStore API will count against your rate limit, which at the time of writing this, is 60 requests / minute. An up-to-date value will always provided in the `X-RateLimit-Limit` header The number of requests you have remaining before you must wait is provided in the `X-RateLimit-Remaining` header.  # API SDKs For a list of available API SDKs check the README here: https://github.com/everyday-as/gmodstore-api-docs#client-libraries
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Money from './Money';

/**
 * The ProductPrice model module.
 * @module Everyday/GmodStore/Sdk/model/ProductPrice
 * @version 3.1.0
 */
class ProductPrice {
    /**
     * Constructs a new <code>ProductPrice</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ProductPrice
     */
    constructor() { 
        
        ProductPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ProductPrice} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ProductPrice} The populated <code>ProductPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductPrice();

            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], 'Number');
            }
            if (data.hasOwnProperty('original')) {
                obj['original'] = Money.constructFromObject(data['original']);
            }
            if (data.hasOwnProperty('purchase')) {
                obj['purchase'] = Money.constructFromObject(data['purchase']);
            }
        }
        return obj;
    }


}

/**
 * Value of the money in smallest denomination of `currency` (e.g cents for USD)
 * @member {Number} raw
 */
ProductPrice.prototype['raw'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} original
 */
ProductPrice.prototype['original'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Money} purchase
 */
ProductPrice.prototype['purchase'] = undefined;






export default ProductPrice;
