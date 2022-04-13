# GmodstoreSdk.TeamsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamsApi.md#createTeam) | **POST** /api/v3/teams | Create a new team
[**deleteTeam**](TeamsApi.md#deleteTeam) | **DELETE** /api/v3/teams/{team} | Delete the specified team
[**getTeam**](TeamsApi.md#getTeam) | **GET** /api/v3/teams/{team} | Fetch the specified team
[**getTeams**](TeamsApi.md#getTeams) | **GET** /api/v3/teams/batch | Fetch a batch of teams by id
[**listTeams**](TeamsApi.md#listTeams) | **GET** /api/v3/teams | List all teams
[**updateTeam**](TeamsApi.md#updateTeam) | **PUT** /api/v3/teams/{team} | Update the specified team



## createTeam

> CreateTeamResponse createTeam(opts)

Create a new team

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let opts = {
  'newTeamPayload': new GmodstoreSdk.NewTeamPayload() // NewTeamPayload | 
};
apiInstance.createTeam(opts, (error, data, response) => {
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
 **newTeamPayload** | [**NewTeamPayload**](NewTeamPayload.md)|  | [optional] 

### Return type

[**CreateTeamResponse**](CreateTeamResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> DeleteTeamResponse deleteTeam(team)

Delete the specified team

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let team = "team_example"; // String | 
apiInstance.deleteTeam(team, (error, data, response) => {
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
 **team** | **String**|  | 

### Return type

[**DeleteTeamResponse**](DeleteTeamResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeam

> GetTeamResponse getTeam(team)

Fetch the specified team

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let team = "team_example"; // String | 
apiInstance.getTeam(team, (error, data, response) => {
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
 **team** | **String**|  | 

### Return type

[**GetTeamResponse**](GetTeamResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeams

> GetTeamsResponse getTeams(ids)

Fetch a batch of teams by id

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let ids = ["null"]; // [String] | 
apiInstance.getTeams(ids, (error, data, response) => {
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

[**GetTeamsResponse**](GetTeamsResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTeams

> Object listTeams(opts)

List all teams

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example" // String | The cursor from which to return paginated results starting after
};
apiInstance.listTeams(opts, (error, data, response) => {
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
 **perPage** | **Number**|  | [optional] [default to 24]
 **cursor** | **String**| The cursor from which to return paginated results starting after | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeam

> UpdateTeamResponse updateTeam(team, opts)

Update the specified team

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.TeamsApi();
let team = "team_example"; // String | 
let opts = {
  'updateTeamPayload': new GmodstoreSdk.UpdateTeamPayload() // UpdateTeamPayload | 
};
apiInstance.updateTeam(team, opts, (error, data, response) => {
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
 **team** | **String**|  | 
 **updateTeamPayload** | [**UpdateTeamPayload**](UpdateTeamPayload.md)|  | [optional] 

### Return type

[**UpdateTeamResponse**](UpdateTeamResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

