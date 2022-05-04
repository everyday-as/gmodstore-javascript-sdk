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
 * The ProductReviewVotes model module.
 * @module Everyday/GmodStore/Sdk/model/ProductReviewVotes
 * @version 3.1.0
 */
class ProductReviewVotes {
    /**
     * Constructs a new <code>ProductReviewVotes</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ProductReviewVotes
     * @param helpful {Number} 
     * @param total {Number} 
     */
    constructor(helpful, total) { 
        
        ProductReviewVotes.initialize(this, helpful, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, helpful, total) { 
        obj['helpful'] = helpful;
        obj['total'] = total;
    }

    /**
     * Constructs a <code>ProductReviewVotes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ProductReviewVotes} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ProductReviewVotes} The populated <code>ProductReviewVotes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductReviewVotes();

            if (data.hasOwnProperty('helpful')) {
                obj['helpful'] = ApiClient.convertToType(data['helpful'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} helpful
 */
ProductReviewVotes.prototype['helpful'] = undefined;

/**
 * @member {Number} total
 */
ProductReviewVotes.prototype['total'] = undefined;






export default ProductReviewVotes;

