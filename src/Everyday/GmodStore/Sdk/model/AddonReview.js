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
import Addon from './Addon';
import User from './User';

/**
 * The AddonReview model module.
 * @module Everyday/GmodStore/Sdk/model/AddonReview
 * @version 1.3.0
 */
class AddonReview {
    /**
     * Constructs a new <code>AddonReview</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/AddonReview
     */
    constructor() { 
        
        AddonReview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/AddonReview} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/AddonReview} The populated <code>AddonReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonReview();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
            }
            if (data.hasOwnProperty('addon')) {
                obj['addon'] = Addon.constructFromObject(data['addon']);
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = User.constructFromObject(data['author']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
AddonReview.prototype['id'] = undefined;

/**
 * @member {String} title
 */
AddonReview.prototype['title'] = undefined;

/**
 * @member {String} version
 */
AddonReview.prototype['version'] = undefined;

/**
 * @member {String} body
 */
AddonReview.prototype['body'] = undefined;

/**
 * @member {Number} rating
 */
AddonReview.prototype['rating'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Addon} addon
 */
AddonReview.prototype['addon'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/User} author
 */
AddonReview.prototype['author'] = undefined;






export default AddonReview;

