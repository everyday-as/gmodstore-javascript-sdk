# gmodstore-sdk

GmodstoreSdk - JavaScript client for gmodstore-sdk


Welcome to the GmodStore API! You can use our API to access GmodStore API endpoints, which can be used interact with GmodStore programmatically.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.2.0
- Package version: 1.3.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://docs.gmodstore.com](https://docs.gmodstore.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via npm by running:

```shell
npm install gmodstore-sdk --save
```

Install it via yarn by running:

```shell
yarn add gmodstore-sdk
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
var GmodstoreSdk = require('gmodstore-sdk');

var defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new GmodstoreSdk.AddonCouponsApi()
var addonId = 789; // {Number} Id of the addon
var addonCoupon = new GmodstoreSdk.AddonCoupon(); // {AddonCoupon} 
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
*GmodstoreSdk.AddonCouponsApi* | [**createAddonCoupon**](docs/AddonCouponsApi.md#createAddonCoupon) | **POST** /addons/{addon_id}/coupons | Create an addon coupon
*GmodstoreSdk.AddonCouponsApi* | [**deleteAddonCoupon**](docs/AddonCouponsApi.md#deleteAddonCoupon) | **DELETE** /addons/{addon_id}/coupons/{coupon_id} | Destroy an addon&#39;s coupon
*GmodstoreSdk.AddonCouponsApi* | [**getAddonCoupon**](docs/AddonCouponsApi.md#getAddonCoupon) | **GET** /addons/{addon_id}/coupons/{coupon_id} | Fetch an addon&#39;s coupon
*GmodstoreSdk.AddonCouponsApi* | [**listAddonCoupons**](docs/AddonCouponsApi.md#listAddonCoupons) | **GET** /addons/{addon_id}/coupons | Fetch all the coupons for an addon
*GmodstoreSdk.AddonCouponsApi* | [**updateAddonCoupon**](docs/AddonCouponsApi.md#updateAddonCoupon) | **PUT** /addons/{addon_id}/coupons/{coupon_id} | Update an addon&#39;s coupon
*GmodstoreSdk.AddonPurchasesApi* | [**createAddonPurchase**](docs/AddonPurchasesApi.md#createAddonPurchase) | **POST** /addons/{addon_id}/purchases | Create a purchase for an addon
*GmodstoreSdk.AddonPurchasesApi* | [**getAddonPurchase**](docs/AddonPurchasesApi.md#getAddonPurchase) | **GET** /addons/{addon_id}/purchases/{user_id} | Get a purchase of an addon by user
*GmodstoreSdk.AddonPurchasesApi* | [**listAddonPurchases**](docs/AddonPurchasesApi.md#listAddonPurchases) | **GET** /addons/{addon_id}/purchases | Fetch all purchases of an addon
*GmodstoreSdk.AddonPurchasesApi* | [**updateAddonPurchase**](docs/AddonPurchasesApi.md#updateAddonPurchase) | **PUT** /addons/{addon_id}/purchases/{user_id} | Update a purchase for an addon
*GmodstoreSdk.AddonReviewsApi* | [**getAddonReview**](docs/AddonReviewsApi.md#getAddonReview) | **GET** /addons/{addon_id}/reviews/{review_id} | Fetch a review of an addon
*GmodstoreSdk.AddonReviewsApi* | [**listAddonReviews**](docs/AddonReviewsApi.md#listAddonReviews) | **GET** /addons/{addon_id}/reviews | Fetch all the reviews of an addon
*GmodstoreSdk.AddonStatsApi* | [**getAddonStats**](docs/AddonStatsApi.md#getAddonStats) | **GET** /addons/{addon_id}/stats | Fetch all the stats for an addon
*GmodstoreSdk.AddonVersionsApi* | [**createAddonVersion**](docs/AddonVersionsApi.md#createAddonVersion) | **POST** /addons/{addon_id}/versions | Create a new version for an addon
*GmodstoreSdk.AddonVersionsApi* | [**downloadAddonVersion**](docs/AddonVersionsApi.md#downloadAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id}/download | Generate a download token for a specific version of an addon
*GmodstoreSdk.AddonVersionsApi* | [**getAddonVersion**](docs/AddonVersionsApi.md#getAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id} | Fetch a specific version of an addon
*GmodstoreSdk.AddonVersionsApi* | [**listAddonVersions**](docs/AddonVersionsApi.md#listAddonVersions) | **GET** /addons/{addon_id}/versions | Fetch all the versions of an addon
*GmodstoreSdk.AddonVersionsApi* | [**updateAddonVersion**](docs/AddonVersionsApi.md#updateAddonVersion) | **PUT** /addons/{addon_id}/versions/{version_id} | Update a version of an addon
*GmodstoreSdk.AddonsApi* | [**getAddon**](docs/AddonsApi.md#getAddon) | **GET** /addons/{addon_id} | Fetch a single addon
*GmodstoreSdk.AddonsApi* | [**listSelfAddons**](docs/AddonsApi.md#listSelfAddons) | **GET** /addons | Fetch all the addons that you have access to
*GmodstoreSdk.AdventCalendarApi* | [**getAdventCalendarStats**](docs/AdventCalendarApi.md#getAdventCalendarStats) | **GET** /events/advent-calendar/stats | Fetch statistics relating to the advent calendar event
*GmodstoreSdk.CurrentAPIKeyApi* | [**getCurrentApiKey**](docs/CurrentAPIKeyApi.md#getCurrentApiKey) | **GET** /me | Get meta information about the current API key
*GmodstoreSdk.PermissionGroupsApi* | [**listPermissionGroups**](docs/PermissionGroupsApi.md#listPermissionGroups) | **GET** /permission-groups | Fetches all available permission groups
*GmodstoreSdk.TeamAddonsApi* | [**listTeamAddons**](docs/TeamAddonsApi.md#listTeamAddons) | **GET** /teams/{team_id}/addons | Fetch all the addons in the given team
*GmodstoreSdk.TeamUsersApi* | [**listTeamUsers**](docs/TeamUsersApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all the users in the given team
*GmodstoreSdk.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /teams/{team_id} | Fetch a single team
*GmodstoreSdk.UserAddonsApi* | [**listUserAddons**](docs/UserAddonsApi.md#listUserAddons) | **GET** /users/{user_id}/addons | Fetch all the addons authored / co-authored by a user
*GmodstoreSdk.UserBadgesApi* | [**createUserBadge**](docs/UserBadgesApi.md#createUserBadge) | **POST** /users/{user_id}/badges | Give a user a badge
*GmodstoreSdk.UserBadgesApi* | [**deleteUserBadge**](docs/UserBadgesApi.md#deleteUserBadge) | **DELETE** /users/{user_id}/badges/{badge_id} | Destroy a users&#39;s badge
*GmodstoreSdk.UserBadgesApi* | [**listUserBadges**](docs/UserBadgesApi.md#listUserBadges) | **GET** /users/{user_id}/badges | Fetch all the badges a user has
*GmodstoreSdk.UserBansApi* | [**listUserBans**](docs/UserBansApi.md#listUserBans) | **GET** /users/{user_id}/bans | Fetch all active bans associated with this user
*GmodstoreSdk.UserPurchasesApi* | [**listUserPurchases**](docs/UserPurchasesApi.md#listUserPurchases) | **GET** /users/{user_id}/purchases | Fetch all purchases a user has made
*GmodstoreSdk.UserTeamsApi* | [**listUserTeams**](docs/UserTeamsApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all the teams of a user
*GmodstoreSdk.UsersApi* | [**getSelfUser**](docs/UsersApi.md#getSelfUser) | **GET** /users/me | Fetches the current user (API Key Owner)
*GmodstoreSdk.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_id} | Fetch a single user


## Documentation for Models

 - [GmodstoreSdk.Addon](docs/Addon.md)
 - [GmodstoreSdk.AddonCoupon](docs/AddonCoupon.md)
 - [GmodstoreSdk.AddonCouponListResponse](docs/AddonCouponListResponse.md)
 - [GmodstoreSdk.AddonCouponResponse](docs/AddonCouponResponse.md)
 - [GmodstoreSdk.AddonDownload](docs/AddonDownload.md)
 - [GmodstoreSdk.AddonDownloadResponse](docs/AddonDownloadResponse.md)
 - [GmodstoreSdk.AddonImages](docs/AddonImages.md)
 - [GmodstoreSdk.AddonListResponse](docs/AddonListResponse.md)
 - [GmodstoreSdk.AddonPrice](docs/AddonPrice.md)
 - [GmodstoreSdk.AddonPurchase](docs/AddonPurchase.md)
 - [GmodstoreSdk.AddonPurchaseListResponse](docs/AddonPurchaseListResponse.md)
 - [GmodstoreSdk.AddonPurchaseResponse](docs/AddonPurchaseResponse.md)
 - [GmodstoreSdk.AddonResponse](docs/AddonResponse.md)
 - [GmodstoreSdk.AddonReview](docs/AddonReview.md)
 - [GmodstoreSdk.AddonReviewListResponse](docs/AddonReviewListResponse.md)
 - [GmodstoreSdk.AddonReviewResponse](docs/AddonReviewResponse.md)
 - [GmodstoreSdk.AddonStats](docs/AddonStats.md)
 - [GmodstoreSdk.AddonStatsListResponse](docs/AddonStatsListResponse.md)
 - [GmodstoreSdk.AddonStatsRevenue](docs/AddonStatsRevenue.md)
 - [GmodstoreSdk.AddonStatsRevenueCurrent](docs/AddonStatsRevenueCurrent.md)
 - [GmodstoreSdk.AddonStatsSales](docs/AddonStatsSales.md)
 - [GmodstoreSdk.AddonStatsSalesCurrent](docs/AddonStatsSalesCurrent.md)
 - [GmodstoreSdk.AddonStatsViews](docs/AddonStatsViews.md)
 - [GmodstoreSdk.AddonStatsViewsCurrent](docs/AddonStatsViewsCurrent.md)
 - [GmodstoreSdk.AddonVersion](docs/AddonVersion.md)
 - [GmodstoreSdk.AddonVersionListResponse](docs/AddonVersionListResponse.md)
 - [GmodstoreSdk.AddonVersionReleaseType](docs/AddonVersionReleaseType.md)
 - [GmodstoreSdk.AddonVersionResponse](docs/AddonVersionResponse.md)
 - [GmodstoreSdk.AdventCalendarStats](docs/AdventCalendarStats.md)
 - [GmodstoreSdk.AdventCalendarStatsResponse](docs/AdventCalendarStatsResponse.md)
 - [GmodstoreSdk.ApiKey](docs/ApiKey.md)
 - [GmodstoreSdk.ApiKeyResponse](docs/ApiKeyResponse.md)
 - [GmodstoreSdk.BadgeListResponse](docs/BadgeListResponse.md)
 - [GmodstoreSdk.BadgeResponse](docs/BadgeResponse.md)
 - [GmodstoreSdk.Error](docs/Error.md)
 - [GmodstoreSdk.ErrorResponse](docs/ErrorResponse.md)
 - [GmodstoreSdk.Money](docs/Money.md)
 - [GmodstoreSdk.NewAddonPurchase](docs/NewAddonPurchase.md)
 - [GmodstoreSdk.OrderItem](docs/OrderItem.md)
 - [GmodstoreSdk.PermissionGroup](docs/PermissionGroup.md)
 - [GmodstoreSdk.PermissionGroupListResponse](docs/PermissionGroupListResponse.md)
 - [GmodstoreSdk.Team](docs/Team.md)
 - [GmodstoreSdk.TeamAddon](docs/TeamAddon.md)
 - [GmodstoreSdk.TeamAddonListResponse](docs/TeamAddonListResponse.md)
 - [GmodstoreSdk.TeamListResponse](docs/TeamListResponse.md)
 - [GmodstoreSdk.TeamResponse](docs/TeamResponse.md)
 - [GmodstoreSdk.TeamUser](docs/TeamUser.md)
 - [GmodstoreSdk.TeamUserListResponse](docs/TeamUserListResponse.md)
 - [GmodstoreSdk.User](docs/User.md)
 - [GmodstoreSdk.UserBadge](docs/UserBadge.md)
 - [GmodstoreSdk.UserBadgeLegend](docs/UserBadgeLegend.md)
 - [GmodstoreSdk.UserBan](docs/UserBan.md)
 - [GmodstoreSdk.UserBanListResponse](docs/UserBanListResponse.md)
 - [GmodstoreSdk.UserResponse](docs/UserResponse.md)


## Documentation for Authorization



### bearerAuth


- **Type**: Bearer authentication (API Key)

