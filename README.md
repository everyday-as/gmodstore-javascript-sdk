# gmod_store_api

GmodStoreApi - JavaScript client for gmod_store_api


Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.1
- Package version: 1.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://docs.gmodstore.com](https://docs.gmodstore.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via npm by running:

```shell
npm install GmodStore SDK --save
```

Install it via yarn by running:

```shell
yarn add GmodStore SDK
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GmodStoreApi = require('GmodStore SDK');

var defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new GmodStoreApi.AddonCouponsApi()
var addonId = 789; // {Number} Id of the addon
var addonCoupon = new GmodStoreApi.AddonCoupon(); // {AddonCoupon} 
var opts = {
  '_with': ["null"] // {[String]} The relations you want to fetch with the `AddonCoupon`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAddonCoupon(addonId, addonCoupon, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.gmodstore.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GmodStoreApi.AddonCouponsApi* | [**createAddonCoupon**](docs/AddonCouponsApi.md#createAddonCoupon) | **POST** /addons/{addon_id}/coupons | Create an addon coupon
*GmodStoreApi.AddonCouponsApi* | [**deleteAddonCoupon**](docs/AddonCouponsApi.md#deleteAddonCoupon) | **DELETE** /addons/{addon_id}/coupons/{coupon_id} | Destroy an addon&#39;s coupon
*GmodStoreApi.AddonCouponsApi* | [**getAddonCoupon**](docs/AddonCouponsApi.md#getAddonCoupon) | **GET** /addons/{addon_id}/coupons/{coupon_id} | Fetch an addon&#39;s coupon
*GmodStoreApi.AddonCouponsApi* | [**listAddonCoupons**](docs/AddonCouponsApi.md#listAddonCoupons) | **GET** /addons/{addon_id}/coupons | Fetch all the coupons for an addon
*GmodStoreApi.AddonCouponsApi* | [**updateAddonCoupon**](docs/AddonCouponsApi.md#updateAddonCoupon) | **PUT** /addons/{addon_id}/coupons/{coupon_id} | Update an addon&#39;s coupon
*GmodStoreApi.AddonPurchasesApi* | [**createAddonPurchase**](docs/AddonPurchasesApi.md#createAddonPurchase) | **POST** /addons/{addon_id}/purchases | Create a purchase for an addon
*GmodStoreApi.AddonPurchasesApi* | [**getAddonPurchase**](docs/AddonPurchasesApi.md#getAddonPurchase) | **GET** /addons/{addon_id}/purchases/{user_id} | Get a purchase of an addon by user
*GmodStoreApi.AddonPurchasesApi* | [**listAddonPurchases**](docs/AddonPurchasesApi.md#listAddonPurchases) | **GET** /addons/{addon_id}/purchases | Fetch all purchases of an addon
*GmodStoreApi.AddonPurchasesApi* | [**updateAddonPurchase**](docs/AddonPurchasesApi.md#updateAddonPurchase) | **PUT** /addons/{addon_id}/purchases/{user_id} | Update a purchase for an addon
*GmodStoreApi.AddonReviewsApi* | [**getAddonReview**](docs/AddonReviewsApi.md#getAddonReview) | **GET** /addons/{addon_id}/reviews/{review_id} | Fetch a review of an addon
*GmodStoreApi.AddonReviewsApi* | [**listAddonReviews**](docs/AddonReviewsApi.md#listAddonReviews) | **GET** /addons/{addon_id}/reviews | Fetch all the reviews of an addon
*GmodStoreApi.AddonStatsApi* | [**getAddonStats**](docs/AddonStatsApi.md#getAddonStats) | **GET** /addons/{addon_id}/stats | Fetch all the stats for an addon
*GmodStoreApi.AddonVersionsApi* | [**createAddonVersion**](docs/AddonVersionsApi.md#createAddonVersion) | **POST** /addons/{addon_id}/versions | Create a new version for an addon
*GmodStoreApi.AddonVersionsApi* | [**downloadAddonVersion**](docs/AddonVersionsApi.md#downloadAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id}/download | Generate a download token for a specific version of an addon
*GmodStoreApi.AddonVersionsApi* | [**getAddonVersion**](docs/AddonVersionsApi.md#getAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id} | Fetch a specific version of an addon
*GmodStoreApi.AddonVersionsApi* | [**listAddonVersions**](docs/AddonVersionsApi.md#listAddonVersions) | **GET** /addons/{addon_id}/versions | Fetch all the versions of an addon
*GmodStoreApi.AddonVersionsApi* | [**updateAddonVersion**](docs/AddonVersionsApi.md#updateAddonVersion) | **PUT** /addons/{addon_id}/versions/{version_id} | Update a version of an addon
*GmodStoreApi.AddonsApi* | [**getAddon**](docs/AddonsApi.md#getAddon) | **GET** /addons/{addon_id} | Fetch a single addon
*GmodStoreApi.AddonsApi* | [**listSelfAddons**](docs/AddonsApi.md#listSelfAddons) | **GET** /addons | Fetch all the addons that you have access to
*GmodStoreApi.PermissionGroupsApi* | [**listPermissionGroups**](docs/PermissionGroupsApi.md#listPermissionGroups) | **GET** /permission-groups | Fetches all available permission groups
*GmodStoreApi.TeamUsersApi* | [**listTeamUsers**](docs/TeamUsersApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all the users in the given team
*GmodStoreApi.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /teams/{team_id} | Fetch a single team
*GmodStoreApi.UserAddonsApi* | [**listUserAddons**](docs/UserAddonsApi.md#listUserAddons) | **GET** /users/{user_id}/addons | Fetch all the addons authored / co-authored by a user
*GmodStoreApi.UserBadgesApi* | [**createUserBadge**](docs/UserBadgesApi.md#createUserBadge) | **POST** /users/{user_id}/badges | Give a user a badge
*GmodStoreApi.UserBadgesApi* | [**deleteUserBadge**](docs/UserBadgesApi.md#deleteUserBadge) | **DELETE** /users/{user_id}/badges/{badge_id} | Destroy a users&#39;s badge
*GmodStoreApi.UserBadgesApi* | [**listUserBadges**](docs/UserBadgesApi.md#listUserBadges) | **GET** /users/{user_id}/badges | Fetch all the badges a user has
*GmodStoreApi.UserBansApi* | [**listUserBans**](docs/UserBansApi.md#listUserBans) | **GET** /users/{user_id}/bans | Fetch all active bans associated with this user
*GmodStoreApi.UserPurchasesApi* | [**listUserPurchases**](docs/UserPurchasesApi.md#listUserPurchases) | **GET** /users/{user_id}/purchases | Fetch all purchases a user has made
*GmodStoreApi.UserTeamsApi* | [**listUserTeams**](docs/UserTeamsApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all the teams of a user
*GmodStoreApi.UsersApi* | [**getSelfUser**](docs/UsersApi.md#getSelfUser) | **GET** /users/me | Fetches the current user (API Key Owner)
*GmodStoreApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_id} | Fetch a single user


## Documentation for Models

 - [GmodStoreApi.Addon](docs/Addon.md)
 - [GmodStoreApi.AddonCoupon](docs/AddonCoupon.md)
 - [GmodStoreApi.AddonCouponListResponse](docs/AddonCouponListResponse.md)
 - [GmodStoreApi.AddonCouponResponse](docs/AddonCouponResponse.md)
 - [GmodStoreApi.AddonDownload](docs/AddonDownload.md)
 - [GmodStoreApi.AddonDownloadResponse](docs/AddonDownloadResponse.md)
 - [GmodStoreApi.AddonImages](docs/AddonImages.md)
 - [GmodStoreApi.AddonListResponse](docs/AddonListResponse.md)
 - [GmodStoreApi.AddonPrice](docs/AddonPrice.md)
 - [GmodStoreApi.AddonPurchase](docs/AddonPurchase.md)
 - [GmodStoreApi.AddonPurchaseListResponse](docs/AddonPurchaseListResponse.md)
 - [GmodStoreApi.AddonPurchaseResponse](docs/AddonPurchaseResponse.md)
 - [GmodStoreApi.AddonResponse](docs/AddonResponse.md)
 - [GmodStoreApi.AddonReview](docs/AddonReview.md)
 - [GmodStoreApi.AddonReviewListResponse](docs/AddonReviewListResponse.md)
 - [GmodStoreApi.AddonReviewResponse](docs/AddonReviewResponse.md)
 - [GmodStoreApi.AddonStats](docs/AddonStats.md)
 - [GmodStoreApi.AddonStatsListResponse](docs/AddonStatsListResponse.md)
 - [GmodStoreApi.AddonStatsRevenue](docs/AddonStatsRevenue.md)
 - [GmodStoreApi.AddonStatsRevenueCurrent](docs/AddonStatsRevenueCurrent.md)
 - [GmodStoreApi.AddonStatsSales](docs/AddonStatsSales.md)
 - [GmodStoreApi.AddonStatsSalesCurrent](docs/AddonStatsSalesCurrent.md)
 - [GmodStoreApi.AddonStatsViews](docs/AddonStatsViews.md)
 - [GmodStoreApi.AddonStatsViewsCurrent](docs/AddonStatsViewsCurrent.md)
 - [GmodStoreApi.AddonVersion](docs/AddonVersion.md)
 - [GmodStoreApi.AddonVersionListResponse](docs/AddonVersionListResponse.md)
 - [GmodStoreApi.AddonVersionReleaseType](docs/AddonVersionReleaseType.md)
 - [GmodStoreApi.AddonVersionResponse](docs/AddonVersionResponse.md)
 - [GmodStoreApi.BadgeListResponse](docs/BadgeListResponse.md)
 - [GmodStoreApi.BadgeResponse](docs/BadgeResponse.md)
 - [GmodStoreApi.Error](docs/Error.md)
 - [GmodStoreApi.ErrorResponse](docs/ErrorResponse.md)
 - [GmodStoreApi.Money](docs/Money.md)
 - [GmodStoreApi.NewAddonPurchase](docs/NewAddonPurchase.md)
 - [GmodStoreApi.NewAddonVersion](docs/NewAddonVersion.md)
 - [GmodStoreApi.OrderItem](docs/OrderItem.md)
 - [GmodStoreApi.PermissionGroup](docs/PermissionGroup.md)
 - [GmodStoreApi.PermissionGroupListResponse](docs/PermissionGroupListResponse.md)
 - [GmodStoreApi.Team](docs/Team.md)
 - [GmodStoreApi.TeamListResponse](docs/TeamListResponse.md)
 - [GmodStoreApi.TeamResponse](docs/TeamResponse.md)
 - [GmodStoreApi.TeamUser](docs/TeamUser.md)
 - [GmodStoreApi.TeamUserListResponse](docs/TeamUserListResponse.md)
 - [GmodStoreApi.User](docs/User.md)
 - [GmodStoreApi.UserBadge](docs/UserBadge.md)
 - [GmodStoreApi.UserBadgeLegend](docs/UserBadgeLegend.md)
 - [GmodStoreApi.UserBan](docs/UserBan.md)
 - [GmodStoreApi.UserBanListResponse](docs/UserBanListResponse.md)
 - [GmodStoreApi.UserResponse](docs/UserResponse.md)


## Documentation for Authorization



### bearerAuth


- **Type**: Bearer authentication (API Key)

