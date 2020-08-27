# GmodStore.TeamUsersApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTeamUsers**](TeamUsersApi.md#listTeamUsers) | **GET** /teams/{team_id}/users | Fetch all the users in the given team



## listTeamUsers

> TeamUserListResponse listTeamUsers(teamId, opts)

Fetch all the users in the given team

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.TeamUsersApi();
let teamId = 789; // Number | Id of the team
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `TeamUser`
};
apiInstance.listTeamUsers(teamId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;TeamUser&#x60; | [optional] 

### Return type

[**TeamUserListResponse**](TeamUserListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

