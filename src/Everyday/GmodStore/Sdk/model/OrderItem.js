/**
 * GmodStore
 * Welcome to the GmodStore API! You can use our API to access Gmodstore API endpoints, which can be used interact with Gmodstore programmatically.
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
import Money from './Money';

/**
 * The OrderItem model module.
 * @module Everyday\GmodStore\Sdk/model/OrderItem
 * @version 1.0.1
 */
class OrderItem {
    /**
     * Constructs a new <code>OrderItem</code>.
     * @alias module:Everyday\GmodStore\Sdk/model/OrderItem
     */
    constructor() { 
        
        OrderItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Everyday\GmodStore\Sdk/model/OrderItem} obj Optional instance to populate.
     * @return {module:Everyday\GmodStore\Sdk/model/OrderItem} The populated <code>OrderItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = Money.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('reversed_at')) {
                obj['reversed_at'] = ApiClient.convertToType(data['reversed_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
OrderItem.prototype['id'] = undefined;

/**
 * @member {module:Everyday\GmodStore\Sdk/model/Money} price
 */
OrderItem.prototype['price'] = undefined;

/**
 * @member {Date} reversed_at
 */
OrderItem.prototype['reversed_at'] = undefined;






export default OrderItem;

