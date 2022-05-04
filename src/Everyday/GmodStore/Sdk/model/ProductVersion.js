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
 * The ProductVersion model module.
 * @module Everyday/GmodStore/Sdk/model/ProductVersion
 * @version 3.1.0
 */
class ProductVersion {
    /**
     * Constructs a new <code>ProductVersion</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/ProductVersion
     * @param id {String} 
     * @param name {String} 
     * @param changelog {String} 
     * @param releaseType {module:Everyday/GmodStore/Sdk/model/ProductVersion.ReleaseTypeEnum} 
     * @param fileSize {Number} 
     * @param fileHash {String} 
     */
    constructor(id, name, changelog, releaseType, fileSize, fileHash) { 
        
        ProductVersion.initialize(this, id, name, changelog, releaseType, fileSize, fileHash);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, changelog, releaseType, fileSize, fileHash) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['changelog'] = changelog;
        obj['releaseType'] = releaseType;
        obj['fileSize'] = fileSize;
        obj['fileHash'] = fileHash;
    }

    /**
     * Constructs a <code>ProductVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/ProductVersion} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/ProductVersion} The populated <code>ProductVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVersion();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], 'String');
            }
            if (data.hasOwnProperty('releaseType')) {
                obj['releaseType'] = ApiClient.convertToType(data['releaseType'], 'String');
            }
            if (data.hasOwnProperty('fileSize')) {
                obj['fileSize'] = ApiClient.convertToType(data['fileSize'], 'Number');
            }
            if (data.hasOwnProperty('fileHash')) {
                obj['fileHash'] = ApiClient.convertToType(data['fileHash'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ProductVersion.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductVersion.prototype['name'] = undefined;

/**
 * @member {String} changelog
 */
ProductVersion.prototype['changelog'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/ProductVersion.ReleaseTypeEnum} releaseType
 */
ProductVersion.prototype['releaseType'] = undefined;

/**
 * @member {Number} fileSize
 */
ProductVersion.prototype['fileSize'] = undefined;

/**
 * @member {String} fileHash
 */
ProductVersion.prototype['fileHash'] = undefined;





/**
 * Allowed values for the <code>releaseType</code> property.
 * @enum {String}
 * @readonly
 */
ProductVersion['ReleaseTypeEnum'] = {

    /**
     * value: "stable"
     * @const
     */
    "stable": "stable",

    /**
     * value: "beta"
     * @const
     */
    "beta": "beta",

    /**
     * value: "alpha"
     * @const
     */
    "alpha": "alpha",

    /**
     * value: "private"
     * @const
     */
    "private": "private",

    /**
     * value: "demo"
     * @const
     */
    "demo": "demo"
};



export default ProductVersion;

