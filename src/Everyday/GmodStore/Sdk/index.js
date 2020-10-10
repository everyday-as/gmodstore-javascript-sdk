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


import ApiClient from './ApiClient';
import Addon from './model/Addon';
import AddonCoupon from './model/AddonCoupon';
import AddonCouponListResponse from './model/AddonCouponListResponse';
import AddonCouponResponse from './model/AddonCouponResponse';
import AddonDownload from './model/AddonDownload';
import AddonDownloadResponse from './model/AddonDownloadResponse';
import AddonImages from './model/AddonImages';
import AddonListResponse from './model/AddonListResponse';
import AddonPrice from './model/AddonPrice';
import AddonPurchase from './model/AddonPurchase';
import AddonPurchaseListResponse from './model/AddonPurchaseListResponse';
import AddonPurchaseResponse from './model/AddonPurchaseResponse';
import AddonResponse from './model/AddonResponse';
import AddonReview from './model/AddonReview';
import AddonReviewListResponse from './model/AddonReviewListResponse';
import AddonReviewResponse from './model/AddonReviewResponse';
import AddonStats from './model/AddonStats';
import AddonStatsListResponse from './model/AddonStatsListResponse';
import AddonStatsRevenue from './model/AddonStatsRevenue';
import AddonStatsRevenueCurrent from './model/AddonStatsRevenueCurrent';
import AddonStatsSales from './model/AddonStatsSales';
import AddonStatsSalesCurrent from './model/AddonStatsSalesCurrent';
import AddonStatsViews from './model/AddonStatsViews';
import AddonStatsViewsCurrent from './model/AddonStatsViewsCurrent';
import AddonVersion from './model/AddonVersion';
import AddonVersionListResponse from './model/AddonVersionListResponse';
import AddonVersionReleaseType from './model/AddonVersionReleaseType';
import AddonVersionResponse from './model/AddonVersionResponse';
import BadgeListResponse from './model/BadgeListResponse';
import BadgeResponse from './model/BadgeResponse';
import Error from './model/Error';
import ErrorResponse from './model/ErrorResponse';
import Money from './model/Money';
import NewAddonPurchase from './model/NewAddonPurchase';
import NewAddonVersion from './model/NewAddonVersion';
import OrderItem from './model/OrderItem';
import PermissionGroup from './model/PermissionGroup';
import PermissionGroupListResponse from './model/PermissionGroupListResponse';
import Team from './model/Team';
import TeamListResponse from './model/TeamListResponse';
import TeamResponse from './model/TeamResponse';
import TeamUser from './model/TeamUser';
import TeamUserListResponse from './model/TeamUserListResponse';
import User from './model/User';
import UserBadge from './model/UserBadge';
import UserBadgeLegend from './model/UserBadgeLegend';
import UserBan from './model/UserBan';
import UserBanListResponse from './model/UserBanListResponse';
import UserResponse from './model/UserResponse';
import AddonCouponsApi from './api/AddonCouponsApi';
import AddonPurchasesApi from './api/AddonPurchasesApi';
import AddonReviewsApi from './api/AddonReviewsApi';
import AddonStatsApi from './api/AddonStatsApi';
import AddonVersionsApi from './api/AddonVersionsApi';
import AddonsApi from './api/AddonsApi';
import PermissionGroupsApi from './api/PermissionGroupsApi';
import TeamUsersApi from './api/TeamUsersApi';
import TeamsApi from './api/TeamsApi';
import UserAddonsApi from './api/UserAddonsApi';
import UserBadgesApi from './api/UserBadgesApi';
import UserBansApi from './api/UserBansApi';
import UserPurchasesApi from './api/UserPurchasesApi';
import UserTeamsApi from './api/UserTeamsApi';
import UsersApi from './api/UsersApi';


/**
* Welcome_to_the_GmodStore_API_You_can_use_our_API_to_access_GmodStore_API_endpoints_which_can_be_used_interact_with_GmodStore_programmatically_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GmodStoreApi = require('Everyday/GmodStore/Sdk/index'); // See note below*.
* var xxxSvc = new GmodStoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GmodStoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['Everyday/GmodStore/Sdk/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GmodStoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GmodStoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module Everyday/GmodStore/Sdk/index
* @version 1.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:Everyday/GmodStore/Sdk/ApiClient}
     */
    ApiClient,

    /**
     * The Addon model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/Addon}
     */
    Addon,

    /**
     * The AddonCoupon model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonCoupon}
     */
    AddonCoupon,

    /**
     * The AddonCouponListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonCouponListResponse}
     */
    AddonCouponListResponse,

    /**
     * The AddonCouponResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonCouponResponse}
     */
    AddonCouponResponse,

    /**
     * The AddonDownload model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonDownload}
     */
    AddonDownload,

    /**
     * The AddonDownloadResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonDownloadResponse}
     */
    AddonDownloadResponse,

    /**
     * The AddonImages model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonImages}
     */
    AddonImages,

    /**
     * The AddonListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonListResponse}
     */
    AddonListResponse,

    /**
     * The AddonPrice model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonPrice}
     */
    AddonPrice,

    /**
     * The AddonPurchase model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonPurchase}
     */
    AddonPurchase,

    /**
     * The AddonPurchaseListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonPurchaseListResponse}
     */
    AddonPurchaseListResponse,

    /**
     * The AddonPurchaseResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonPurchaseResponse}
     */
    AddonPurchaseResponse,

    /**
     * The AddonResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonResponse}
     */
    AddonResponse,

    /**
     * The AddonReview model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonReview}
     */
    AddonReview,

    /**
     * The AddonReviewListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonReviewListResponse}
     */
    AddonReviewListResponse,

    /**
     * The AddonReviewResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonReviewResponse}
     */
    AddonReviewResponse,

    /**
     * The AddonStats model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStats}
     */
    AddonStats,

    /**
     * The AddonStatsListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsListResponse}
     */
    AddonStatsListResponse,

    /**
     * The AddonStatsRevenue model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenue}
     */
    AddonStatsRevenue,

    /**
     * The AddonStatsRevenueCurrent model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsRevenueCurrent}
     */
    AddonStatsRevenueCurrent,

    /**
     * The AddonStatsSales model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsSales}
     */
    AddonStatsSales,

    /**
     * The AddonStatsSalesCurrent model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsSalesCurrent}
     */
    AddonStatsSalesCurrent,

    /**
     * The AddonStatsViews model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsViews}
     */
    AddonStatsViews,

    /**
     * The AddonStatsViewsCurrent model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonStatsViewsCurrent}
     */
    AddonStatsViewsCurrent,

    /**
     * The AddonVersion model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonVersion}
     */
    AddonVersion,

    /**
     * The AddonVersionListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonVersionListResponse}
     */
    AddonVersionListResponse,

    /**
     * The AddonVersionReleaseType model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonVersionReleaseType}
     */
    AddonVersionReleaseType,

    /**
     * The AddonVersionResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/AddonVersionResponse}
     */
    AddonVersionResponse,

    /**
     * The BadgeListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/BadgeListResponse}
     */
    BadgeListResponse,

    /**
     * The BadgeResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/BadgeResponse}
     */
    BadgeResponse,

    /**
     * The Error model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/Error}
     */
    Error,

    /**
     * The ErrorResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The Money model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/Money}
     */
    Money,

    /**
     * The NewAddonPurchase model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/NewAddonPurchase}
     */
    NewAddonPurchase,

    /**
     * The NewAddonVersion model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/NewAddonVersion}
     */
    NewAddonVersion,

    /**
     * The OrderItem model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/OrderItem}
     */
    OrderItem,

    /**
     * The PermissionGroup model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/PermissionGroup}
     */
    PermissionGroup,

    /**
     * The PermissionGroupListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/PermissionGroupListResponse}
     */
    PermissionGroupListResponse,

    /**
     * The Team model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/Team}
     */
    Team,

    /**
     * The TeamListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/TeamListResponse}
     */
    TeamListResponse,

    /**
     * The TeamResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/TeamResponse}
     */
    TeamResponse,

    /**
     * The TeamUser model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/TeamUser}
     */
    TeamUser,

    /**
     * The TeamUserListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/TeamUserListResponse}
     */
    TeamUserListResponse,

    /**
     * The User model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/User}
     */
    User,

    /**
     * The UserBadge model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/UserBadge}
     */
    UserBadge,

    /**
     * The UserBadgeLegend model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/UserBadgeLegend}
     */
    UserBadgeLegend,

    /**
     * The UserBan model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/UserBan}
     */
    UserBan,

    /**
     * The UserBanListResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/UserBanListResponse}
     */
    UserBanListResponse,

    /**
     * The UserResponse model constructor.
     * @property {module:Everyday/GmodStore/Sdk/model/UserResponse}
     */
    UserResponse,

    /**
    * The AddonCouponsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonCouponsApi}
    */
    AddonCouponsApi,

    /**
    * The AddonPurchasesApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonPurchasesApi}
    */
    AddonPurchasesApi,

    /**
    * The AddonReviewsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonReviewsApi}
    */
    AddonReviewsApi,

    /**
    * The AddonStatsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonStatsApi}
    */
    AddonStatsApi,

    /**
    * The AddonVersionsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonVersionsApi}
    */
    AddonVersionsApi,

    /**
    * The AddonsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/AddonsApi}
    */
    AddonsApi,

    /**
    * The PermissionGroupsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/PermissionGroupsApi}
    */
    PermissionGroupsApi,

    /**
    * The TeamUsersApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/TeamUsersApi}
    */
    TeamUsersApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/TeamsApi}
    */
    TeamsApi,

    /**
    * The UserAddonsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UserAddonsApi}
    */
    UserAddonsApi,

    /**
    * The UserBadgesApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UserBadgesApi}
    */
    UserBadgesApi,

    /**
    * The UserBansApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UserBansApi}
    */
    UserBansApi,

    /**
    * The UserPurchasesApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UserPurchasesApi}
    */
    UserPurchasesApi,

    /**
    * The UserTeamsApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UserTeamsApi}
    */
    UserTeamsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:Everyday/GmodStore/Sdk/api/UsersApi}
    */
    UsersApi
};
