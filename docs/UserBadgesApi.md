# GmodstoreSdk.UserBadgesApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserBadge**](UserBadgesApi.md#createUserBadge) | **POST** /api/v3/users/{user}/badges | Attach a badge to a user
[**deleteUserBadge**](UserBadgesApi.md#deleteUserBadge) | **DELETE** /api/v3/users/{user}/badges/{badge} | Detach a badge from a user
[**listUserBadges**](UserBadgesApi.md#listUserBadges) | **GET** /api/v3/users/{user}/badges | List all the specified user&#39;s badges



## createUserBadge

> CreateUserBadgeResponse createUserBadge(user, opts)

Attach a badge to a user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let user = "user_example"; // String | 
let opts = {
  'newUserBadgePayload': new GmodstoreSdk.NewUserBadgePayload() // NewUserBadgePayload | 
};
apiInstance.createUserBadge(user, opts, (error, data, response) => {
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
 **user** | **String**|  | 
 **newUserBadgePayload** | [**NewUserBadgePayload**](NewUserBadgePayload.md)|  | [optional] 

### Return type

[**CreateUserBadgeResponse**](CreateUserBadgeResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserBadge

> DeleteUserBadgeResponse deleteUserBadge(user, badge)

Detach a badge from a user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let user = "user_example"; // String | 
let badge = "badge_example"; // String | 
apiInstance.deleteUserBadge(user, badge, (error, data, response) => {
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
 **user** | **String**|  | 
 **badge** | **String**|  | 

### Return type

[**DeleteUserBadgeResponse**](DeleteUserBadgeResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUserBadges

> Object listUserBadges(user, opts)

List all the specified user&#39;s badges

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserBadgesApi();
let user = "user_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example" // String | The cursor from which to return paginated results starting after
};
apiInstance.listUserBadges(user, opts, (error, data, response) => {
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
 **user** | **String**|  | 
 **perPage** | **Number**|  | [optional] [default to 24]
 **cursor** | **String**| The cursor from which to return paginated results starting after | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

