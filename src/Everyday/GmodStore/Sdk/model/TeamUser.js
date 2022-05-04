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
 * The TeamUser model module.
 * @module Everyday/GmodStore/Sdk/model/TeamUser
 * @version 3.1.0
 */
class TeamUser {
    /**
     * Constructs a new <code>TeamUser</code>.
     * @alias module:Everyday/GmodStore/Sdk/model/TeamUser
     * @param teamId {String} 
     * @param userId {String} 
     * @param primary {Boolean} 
     */
    constructor(teamId, userId, primary) { 
        
        TeamUser.initialize(this, teamId, userId, primary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, teamId, userId, primary) { 
        obj['teamId'] = teamId;
        obj['userId'] = userId;
        obj['primary'] = primary;
    }

    /**
     * Constructs a <code>TeamUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday/GmodStore/Sdk/model/TeamUser} obj Optional instance to populate.
     * @return {module:Everyday/GmodStore/Sdk/model/TeamUser} The populated <code>TeamUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamUser();

            if (data.hasOwnProperty('teamId')) {
                obj['teamId'] = ApiClient.convertToType(data['teamId'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = ApiClient.convertToType(data['access'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} teamId
 */
TeamUser.prototype['teamId'] = undefined;

/**
 * @member {String} userId
 */
TeamUser.prototype['userId'] = undefined;

/**
 * @member {Boolean} primary
 */
TeamUser.prototype['primary'] = undefined;

/**
 * @member {Number} percentage
 */
TeamUser.prototype['percentage'] = undefined;

/**
 * @member {String} access
 */
TeamUser.prototype['access'] = undefined;






export default TeamUser;

