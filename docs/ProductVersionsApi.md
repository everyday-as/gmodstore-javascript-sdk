# GmodstoreSdk.ProductVersionsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductVersion**](ProductVersionsApi.md#createProductVersion) | **POST** /api/v3/products/{product}/versions | Create a version for a product
[**deleteProductVersion**](ProductVersionsApi.md#deleteProductVersion) | **DELETE** /api/v3/products/{product}/versions/{version} | Delete the specified version for a product
[**getProductDownloadToken**](ProductVersionsApi.md#getProductDownloadToken) | **POST** /api/v3/products/{product}/versions/{version}/download | Get a one time use url for downloading a product
[**getProductVersion**](ProductVersionsApi.md#getProductVersion) | **GET** /api/v3/products/{product}/versions/{version} | Show the specified version for a product
[**listProductVersions**](ProductVersionsApi.md#listProductVersions) | **GET** /api/v3/products/{product}/versions | List all versions for a product
[**updateProductVersion**](ProductVersionsApi.md#updateProductVersion) | **PUT** /api/v3/products/{product}/versions/{version} | Update the specified version for a product



## createProductVersion

> CreateProductVersionResponse createProductVersion(product, name, changelog, file, releaseType)

Create a version for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
let product = "product_example"; // String | 
let name = "name_example"; // String | 
let changelog = "changelog_example"; // String | 
let file = "/path/to/file"; // File | 
let releaseType = "releaseType_example"; // String | 
apiInstance.createProductVersion(product, name, changelog, file, releaseType, (error, data, response) => {
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
 **name** | **String**|  | 
 **changelog** | **String**|  | 
 **file** | **File**|  | 
 **releaseType** | **String**|  | 

### Return type

[**CreateProductVersionResponse**](CreateProductVersionResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


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

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
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


## getProductDownloadToken

> DownloadProductVersionResponse getProductDownloadToken(product, version)

Get a one time use url for downloading a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
let product = "product_example"; // String | 
let version = "version_example"; // String | 
apiInstance.getProductDownloadToken(product, version, (error, data, response) => {
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

[**DownloadProductVersionResponse**](DownloadProductVersionResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductVersion

> GetProductVersionResponse getProductVersion(product, version, opts)

Show the specified version for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
let product = "product_example"; // String | 
let version = "version_example"; // String | 
let opts = {
  'filter': new GmodstoreSdk.ProductVersionFilter() // ProductVersionFilter | Filter the results
};
apiInstance.getProductVersion(product, version, opts, (error, data, response) => {
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
 **filter** | [**ProductVersionFilter**](.md)| Filter the results | [optional] 

### Return type

[**GetProductVersionResponse**](GetProductVersionResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductVersions

> Object listProductVersions(product, opts)

List all versions for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
let product = "product_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example", // String | The cursor from which to return paginated results starting after
  'filter': new GmodstoreSdk.ProductVersionFilter() // ProductVersionFilter | Filter the results
};
apiInstance.listProductVersions(product, opts, (error, data, response) => {
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
 **perPage** | **Number**|  | [optional] [default to 24]
 **cursor** | **String**| The cursor from which to return paginated results starting after | [optional] 
 **filter** | [**ProductVersionFilter**](.md)| Filter the results | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductVersion

> UpdateProductVersionResponse updateProductVersion(product, version, opts)

Update the specified version for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductVersionsApi();
let product = "product_example"; // String | 
let version = "version_example"; // String | 
let opts = {
  'updateProductVersionPayload': new GmodstoreSdk.UpdateProductVersionPayload() // UpdateProductVersionPayload | 
};
apiInstance.updateProductVersion(product, version, opts, (error, data, response) => {
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
 **updateProductVersionPayload** | [**UpdateProductVersionPayload**](UpdateProductVersionPayload.md)|  | [optional] 

### Return type

[**UpdateProductVersionResponse**](UpdateProductVersionResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

