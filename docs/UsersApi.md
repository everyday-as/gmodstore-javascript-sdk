# GmodstoreSdk.UsersApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMe**](UsersApi.md#getMe) | **GET** /api/v3/me | Fetch the current authenticated user and their access token
[**getUser**](UsersApi.md#getUser) | **GET** /api/v3/users/{user} | Fetch the specified user
[**getUsers**](UsersApi.md#getUsers) | **GET** /api/v3/users/batch | Fetch a batch of users by id



## getMe

> GetMeResponse getMe()

Fetch the current authenticated user and their access token

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';

let apiInstance = new GmodstoreSdk.UsersApi();
apiInstance.getMe((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMeResponse**](GetMeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> GetUserResponse getUser(user)

Fetch the specified user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UsersApi();
let user = "user_example"; // String | 
apiInstance.getUser(user, (error, data, response) => {
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

### Return type

[**GetUserResponse**](GetUserResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsers

> GetUsersResponse getUsers(ids)

Fetch a batch of users by id

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UsersApi();
let ids = ["null"]; // [String] | 
apiInstance.getUsers(ids, (error, data, response) => {
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
 **ids** | [**[String]**](String.md)|  | 

### Return type

[**GetUsersResponse**](GetUsersResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

