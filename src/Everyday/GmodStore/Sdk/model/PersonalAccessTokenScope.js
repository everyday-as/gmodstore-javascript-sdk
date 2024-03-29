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
* Enum class PersonalAccessTokenScope.
* @enum {}
* @readonly
*/
export default class PersonalAccessTokenScope {
    
        /**
         * value: "permission-groups:read"
         * @const
         */
        "permission-groups:read" = "permission-groups:read";

    
        /**
         * value: "permission-groups:write"
         * @const
         */
        "permission-groups:write" = "permission-groups:write";

    
        /**
         * value: "personal-access-tokens:read"
         * @const
         */
        "personal-access-tokens:read" = "personal-access-tokens:read";

    
        /**
         * value: "personal-access-tokens:write"
         * @const
         */
        "personal-access-tokens:write" = "personal-access-tokens:write";

    
        /**
         * value: "teams:read"
         * @const
         */
        "teams:read" = "teams:read";

    
        /**
         * value: "teams:write"
         * @const
         */
        "teams:write" = "teams:write";

    
        /**
         * value: "team-users:read"
         * @const
         */
        "team-users:read" = "team-users:read";

    
        /**
         * value: "team-users:write"
         * @const
         */
        "team-users:write" = "team-users:write";

    
        /**
         * value: "products:read"
         * @const
         */
        "products:read" = "products:read";

    
        /**
         * value: "products:write"
         * @const
         */
        "products:write" = "products:write";

    
        /**
         * value: "product-coupons:read"
         * @const
         */
        "product-coupons:read" = "product-coupons:read";

    
        /**
         * value: "product-coupons:write"
         * @const
         */
        "product-coupons:write" = "product-coupons:write";

    
        /**
         * value: "product-purchases:read"
         * @const
         */
        "product-purchases:read" = "product-purchases:read";

    
        /**
         * value: "product-purchases:write"
         * @const
         */
        "product-purchases:write" = "product-purchases:write";

    
        /**
         * value: "product-reviews:read"
         * @const
         */
        "product-reviews:read" = "product-reviews:read";

    
        /**
         * value: "product-reviews:write"
         * @const
         */
        "product-reviews:write" = "product-reviews:write";

    
        /**
         * value: "product-versions:read"
         * @const
         */
        "product-versions:read" = "product-versions:read";

    
        /**
         * value: "product-versions:write"
         * @const
         */
        "product-versions:write" = "product-versions:write";

    
        /**
         * value: "product-versions:download"
         * @const
         */
        "product-versions:download" = "product-versions:download";

    
        /**
         * value: "users:read"
         * @const
         */
        "users:read" = "users:read";

    
        /**
         * value: "users:write"
         * @const
         */
        "users:write" = "users:write";

    
        /**
         * value: "user-badges:read"
         * @const
         */
        "user-badges:read" = "user-badges:read";

    
        /**
         * value: "user-badges:write"
         * @const
         */
        "user-badges:write" = "user-badges:write";

    
        /**
         * value: "user-bans:read"
         * @const
         */
        "user-bans:read" = "user-bans:read";

    
        /**
         * value: "user-purchases:read"
         * @const
         */
        "user-purchases:read" = "user-purchases:read";

    
        /**
         * value: "*"
         * @const
         */
        "STAR" = "*";

    

    /**
    * Returns a <code>PersonalAccessTokenScope</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Everyday/GmodStore/Sdk/model/PersonalAccessTokenScope} The enum <code>PersonalAccessTokenScope</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

