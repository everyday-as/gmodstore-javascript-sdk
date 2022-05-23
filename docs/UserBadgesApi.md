# GmodstoreSdk.UserBadgesApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserBadge**](UserBadgesApi.md#createUserBadge) | **POST** /users/{user_id}/badges | Give a user a badge
[**deleteUserBadge**](UserBadgesApi.md#deleteUserBadge) | **DELETE** /users/{user_id}/badges/{badge_id} | Destroy a users&#39;s badge
[**listUserBadges**](UserBadgesApi.md#listUserBadges) | **GET** /users/{user_id}/badges | Fetch all the badges a user has



## createUserBadge

> BadgeResponse createUserBadge(userId, userBadge)

Give a user a badge

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let userId = 789; // Number | Id of the user
let userBadge = new GmodstoreSdk.UserBadge(); // UserBadge | 
apiInstance.createUserBadge(userId, userBadge, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **userBadge** | [**UserBadge**](UserBadge.md)|  | 

### Return type

[**BadgeResponse**](BadgeResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserBadge

> deleteUserBadge(userId, badgeId)

Destroy a users&#39;s badge

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let userId = 789; // Number | Id of the user
let badgeId = "badgeId_example"; // String | Id of the badge
apiInstance.deleteUserBadge(userId, badgeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **badgeId** | **String**| Id of the badge | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserBadges

> BadgeListResponse listUserBadges(userId)

Fetch all the badges a user has

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let userId = 789; // Number | Id of the user
apiInstance.listUserBadges(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 

### Return type

[**BadgeListResponse**](BadgeListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

