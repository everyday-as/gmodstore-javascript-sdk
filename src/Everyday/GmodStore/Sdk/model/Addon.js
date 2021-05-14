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
import AddonImages from './AddonImages';
import AddonPrice from './AddonPrice';
import AddonStats from './AddonStats';
import AddonVersion from './AddonVersion';
import Team from './Team';

/**
 * The Addon model module.
 * @module Everyday/GmodStore/Sdk/model/Addon
 * @version 1.1.0
 */
class Addon {
    /**
     * Constructs a new <code>Addon</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/Addon
     */
    constructor() { 
        
        Addon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Addon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/Addon} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/Addon} The populated <code>Addon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Addon();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('requirements')) {
                obj['requirements'] = ApiClient.convertToType(data['requirements'], ['String']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = AddonPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = AddonImages.constructFromObject(data['images']);
            }
            if (data.hasOwnProperty('views')) {
                obj['views'] = ApiClient.convertToType(data['views'], 'Number');
            }
            if (data.hasOwnProperty('rating_avg')) {
                obj['rating_avg'] = ApiClient.convertToType(data['rating_avg'], 'String');
            }
            if (data.hasOwnProperty('rating_count')) {
                obj['rating_count'] = ApiClient.convertToType(data['rating_count'], 'Number');
            }
            if (data.hasOwnProperty('purchases_count')) {
                obj['purchases_count'] = ApiClient.convertToType(data['purchases_count'], 'Number');
            }
            if (data.hasOwnProperty('dependent_addon')) {
                obj['dependent_addon'] = ApiClient.convertToType(data['dependent_addon'], 'Number');
            }
            if (data.hasOwnProperty('has_drm')) {
                obj['has_drm'] = ApiClient.convertToType(data['has_drm'], 'Boolean');
            }
            if (data.hasOwnProperty('requires_chromium')) {
                obj['requires_chromium'] = ApiClient.convertToType(data['requires_chromium'], 'Boolean');
            }
            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('latest_version')) {
                obj['latest_version'] = AddonVersion.constructFromObject(data['latest_version']);
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = Team.constructFromObject(data['team']);
            }
            if (data.hasOwnProperty('stats')) {
                obj['stats'] = AddonStats.constructFromObject(data['stats']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Addon.prototype['id'] = undefined;

/**
 * @member {Boolean} active
 */
Addon.prototype['active'] = undefined;

/**
 * @member {String} name
 */
Addon.prototype['name'] = undefined;

/**
 * @member {String} short_description
 */
Addon.prototype['short_description'] = undefined;

/**
 * @member {String} description
 */
Addon.prototype['description'] = undefined;

/**
 * @member {Array.<String>} requirements
 */
Addon.prototype['requirements'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonPrice} price
 */
Addon.prototype['price'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonImages} images
 */
Addon.prototype['images'] = undefined;

/**
 * @member {Number} views
 */
Addon.prototype['views'] = undefined;

/**
 * @member {String} rating_avg
 */
Addon.prototype['rating_avg'] = undefined;

/**
 * @member {Number} rating_count
 */
Addon.prototype['rating_count'] = undefined;

/**
 * @member {Number} purchases_count
 */
Addon.prototype['purchases_count'] = undefined;

/**
 * @member {Number} dependent_addon
 */
Addon.prototype['dependent_addon'] = undefined;

/**
 * @member {Boolean} has_drm
 */
Addon.prototype['has_drm'] = undefined;

/**
 * @member {Boolean} requires_chromium
 */
Addon.prototype['requires_chromium'] = undefined;

/**
 * @member {String} slug
 */
Addon.prototype['slug'] = undefined;

/**
 * @member {String} route
 */
Addon.prototype['route'] = undefined;

/**
 * @member {Date} created_at
 */
Addon.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Addon.prototype['updated_at'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonVersion} latest_version
 */
Addon.prototype['latest_version'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/Team} team
 */
Addon.prototype['team'] = undefined;

/**
 * @member {module:Everyday/GmodStore/Sdk/model/AddonStats} stats
 */
Addon.prototype['stats'] = undefined;






export default Addon;

