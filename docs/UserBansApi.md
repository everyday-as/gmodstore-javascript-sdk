# GmodStoreApi.UserBansApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserBans**](UserBansApi.md#listUserBans) | **GET** /users/{user_id}/bans | Fetch all active bans associated with this user



## listUserBans

> UserBanListResponse listUserBans(userId)

Fetch all active bans associated with this user

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.UserBansApi();
let userId = 789; // Number | Id of the user
apiInstance.listUserBans(userId, (error, data, response) => {
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

[**UserBanListResponse**](UserBanListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

