# GmodStoreApi.PermissionGroupsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPermissionGroups**](PermissionGroupsApi.md#getPermissionGroups) | **GET** /permission-groups | Fetches all available permission groups



## getPermissionGroups

> PermissionGroupListResponse getPermissionGroups()

Fetches all available permission groups

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.PermissionGroupsApi();
apiInstance.getPermissionGroups((error, data, response) => {
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

[**PermissionGroupListResponse**](PermissionGroupListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

