# GmodstoreSdk.UsersApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelfUser**](UsersApi.md#getSelfUser) | **GET** /users/me | Fetches the current user (API Key Owner)
[**getUser**](UsersApi.md#getUser) | **GET** /users/{user_id} | Fetch a single user



## getSelfUser

> UserResponse getSelfUser(opts)

Fetches the current user (API Key Owner)

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UsersApi();
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `User`
};
apiInstance.getSelfUser(opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;User&#x60; | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> UserResponse getUser(userId, opts)

Fetch a single user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UsersApi();
let userId = 789; // Number | Id of the user
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `User`
};
apiInstance.getUser(userId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;User&#x60; | [optional] 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

