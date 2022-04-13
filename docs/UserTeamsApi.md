# GmodstoreSdk.UserTeamsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserTeams**](UserTeamsApi.md#listUserTeams) | **GET** /api/v3/users/{user}/teams | List all the specified user&#39;s teams



## listUserTeams

> Object listUserTeams(user, opts)

List all the specified user&#39;s teams

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserTeamsApi();
let user = "user_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example" // String | The cursor from which to return paginated results starting after
};
apiInstance.listUserTeams(user, opts, (error, data, response) => {
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

