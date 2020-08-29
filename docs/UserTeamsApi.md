# GmodStoreApi.UserTeamsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserTeams**](UserTeamsApi.md#listUserTeams) | **GET** /users/{user_id}/teams | Fetch all the teams of a user



## listUserTeams

> TeamListResponse listUserTeams(userId, opts)

Fetch all the teams of a user

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.UserTeamsApi();
let userId = 789; // Number | Id of the user
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `Team`
};
apiInstance.listUserTeams(userId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;Team&#x60; | [optional] 

### Return type

[**TeamListResponse**](TeamListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

