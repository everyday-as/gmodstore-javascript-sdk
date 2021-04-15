# GmodstoreSdk.CurrentAPIKeyApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentApiKey**](CurrentAPIKeyApi.md#getCurrentApiKey) | **GET** /me | Get meta information about the current API key



## getCurrentApiKey

> AddonListResponse getCurrentApiKey(opts)

Get meta information about the current API key

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.CurrentAPIKeyApi();
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `ApiKey`
};
apiInstance.getCurrentApiKey(opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;ApiKey&#x60; | [optional] 

### Return type

[**AddonListResponse**](AddonListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

