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

/**
 * The ProductImages model module.
 * @module Everyday/GmodStore/Sdk/model/ProductImages
 * @version 3.0.0
 */
class ProductImages {
    /**
     * Constructs a new <code>ProductImages</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ProductImages
     */
    constructor() { 
        
        ProductImages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductImages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ProductImages} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ProductImages} The populated <code>ProductImages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductImages();

            if (data.hasOwnProperty('bigspot')) {
                obj['bigspot'] = ApiClient.convertToType(data['bigspot'], 'String');
            }
            if (data.hasOwnProperty('listing')) {
                obj['listing'] = ApiClient.convertToType(data['listing'], 'String');
            }
            if (data.hasOwnProperty('listingSmall')) {
                obj['listingSmall'] = ApiClient.convertToType(data['listingSmall'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bigspot
 */
ProductImages.prototype['bigspot'] = undefined;

/**
 * @member {String} listing
 */
ProductImages.prototype['listing'] = undefined;

/**
 * @member {String} listingSmall
 */
ProductImages.prototype['listingSmall'] = undefined;






export default ProductImages;

