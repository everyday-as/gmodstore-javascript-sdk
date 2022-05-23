# GmodstoreSdk.TeamsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeam**](TeamsApi.md#getTeam) | **GET** /teams/{team_id} | Fetch a single team



## getTeam

> TeamResponse getTeam(teamId, opts)

Fetch a single team

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let teamId = 789; // Number | Id of the team
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `Team`
};
apiInstance.getTeam(teamId, opts, (error, data, response) => {
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
 **teamId** | **Number**| Id of the team | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;Team&#x60; | [optional] 

### Return type

[**TeamResponse**](TeamResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

