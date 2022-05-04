# GmodstoreSdk.PersonalAccessTokensApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPersonalAccessToken**](PersonalAccessTokensApi.md#createPersonalAccessToken) | **POST** /api/v3/me/personal-access-tokens | Create a new personal access token for the current user
[**deletePersonalAccessToken**](PersonalAccessTokensApi.md#deletePersonalAccessToken) | **DELETE** /api/v3/me/personal-access-tokens/{personal_access_token} | Delete the specified personal access token
[**getPersonalAccessToken**](PersonalAccessTokensApi.md#getPersonalAccessToken) | **GET** /api/v3/me/personal-access-tokens/{personal_access_token} | Get a personal access token belonging to the current user
[**listPersonalAccessTokens**](PersonalAccessTokensApi.md#listPersonalAccessTokens) | **GET** /api/v3/me/personal-access-tokens | List all the current user&#39;s personal access tokens
[**updatePersonalAccessToken**](PersonalAccessTokensApi.md#updatePersonalAccessToken) | **PUT** /api/v3/me/personal-access-tokens/{personal_access_token} | Update a personal access token



## createPersonalAccessToken

> InlineResponse201 createPersonalAccessToken(opts)

Create a new personal access token for the current user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PersonalAccessTokensApi();
let opts = {
  'newPersonalAccessTokenPayload': new GmodstoreSdk.NewPersonalAccessTokenPayload() // NewPersonalAccessTokenPayload | 
};
apiInstance.createPersonalAccessToken(opts, (error, data, response) => {
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
 **newPersonalAccessTokenPayload** | [**NewPersonalAccessTokenPayload**](NewPersonalAccessTokenPayload.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePersonalAccessToken

> DeleteTeamResponse deletePersonalAccessToken(personalAccessToken)

Delete the specified personal access token

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PersonalAccessTokensApi();
let personalAccessToken = "personalAccessToken_example"; // String | 
apiInstance.deletePersonalAccessToken(personalAccessToken, (error, data, response) => {
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
 **personalAccessToken** | **String**|  | 

### Return type

[**DeleteTeamResponse**](DeleteTeamResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPersonalAccessToken

> GetPersonalAccessTokenResponse getPersonalAccessToken(personalAccessToken)

Get a personal access token belonging to the current user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PersonalAccessTokensApi();
let personalAccessToken = "personalAccessToken_example"; // String | 
apiInstance.getPersonalAccessToken(personalAccessToken, (error, data, response) => {
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
 **personalAccessToken** | **String**|  | 

### Return type

[**GetPersonalAccessTokenResponse**](GetPersonalAccessTokenResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPersonalAccessTokens

> Object listPersonalAccessTokens(opts)

List all the current user&#39;s personal access tokens

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PersonalAccessTokensApi();
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example" // String | The cursor from which to return paginated results starting after
};
apiInstance.listPersonalAccessTokens(opts, (error, data, response) => {
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


## updatePersonalAccessToken

> UpdatePersonalAccessTokenResponse updatePersonalAccessToken(personalAccessToken)

Update a personal access token

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PersonalAccessTokensApi();
let personalAccessToken = "personalAccessToken_example"; // String | 
apiInstance.updatePersonalAccessToken(personalAccessToken, (error, data, response) => {
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
 **personalAccessToken** | **String**|  | 

### Return type

[**UpdatePersonalAccessTokenResponse**](UpdatePersonalAccessTokenResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

