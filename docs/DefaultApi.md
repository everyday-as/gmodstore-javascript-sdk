# GmodstoreSdk.DefaultApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProductVersion**](DefaultApi.md#deleteProductVersion) | **DELETE** /api/v3/products/{product}/versions/{version} | Delete the specified version for a product



## deleteProductVersion

> DeleteProductVersionResponse deleteProductVersion(product, version)

Delete the specified version for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.DefaultApi();
let product = "product_example"; // String | 
let version = "version_example"; // String | 
apiInstance.deleteProductVersion(product, version, (error, data, response) => {
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
 **product** | **String**|  | 
 **version** | **String**|  | 

### Return type

[**DeleteProductVersionResponse**](DeleteProductVersionResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

