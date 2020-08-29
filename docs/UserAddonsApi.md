# GmodStoreApi.UserAddonsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserAddons**](UserAddonsApi.md#listUserAddons) | **GET** /users/{user_id}/addons | Fetch all the addons authored / co-authored by a user



## listUserAddons

> AddonListResponse listUserAddons(userId, opts)

Fetch all the addons authored / co-authored by a user

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.UserAddonsApi();
let userId = 789; // Number | Id of the user
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `Addon`
};
apiInstance.listUserAddons(userId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;Addon&#x60; | [optional] 

### Return type

[**AddonListResponse**](AddonListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

