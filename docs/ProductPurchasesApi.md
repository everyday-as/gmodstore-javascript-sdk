# GmodstoreSdk.ProductPurchasesApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductPurchase**](ProductPurchasesApi.md#createProductPurchase) | **POST** /api/v3/products/{product}/purchases | Create a purchase for a product
[**getProductPurchase**](ProductPurchasesApi.md#getProductPurchase) | **GET** /api/v3/products/{product}/purchases/{purchase} | Show the specified purchase for a product
[**listProductPurchases**](ProductPurchasesApi.md#listProductPurchases) | **GET** /api/v3/products/{product}/purchases | List all purchases for a product
[**updateProductPurchase**](ProductPurchasesApi.md#updateProductPurchase) | **PUT** /api/v3/products/{product}/purchases/{purchase} | Update the specified purchase for a product



## createProductPurchase

> CreateProductPurchaseResponse createProductPurchase(product, opts)

Create a purchase for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductPurchasesApi();
let product = "product_example"; // String | 
let opts = {
  'newProductPurchasePayload': new GmodstoreSdk.NewProductPurchasePayload() // NewProductPurchasePayload | 
};
apiInstance.createProductPurchase(product, opts, (error, data, response) => {
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
 **newProductPurchasePayload** | [**NewProductPurchasePayload**](NewProductPurchasePayload.md)|  | [optional] 

### Return type

[**CreateProductPurchaseResponse**](CreateProductPurchaseResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProductPurchase

> GetProductPurchaseResponse getProductPurchase(product, purchase, opts)

Show the specified purchase for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductPurchasesApi();
let product = "product_example"; // String | 
let purchase = "purchase_example"; // String | 
let opts = {
  'filter': new GmodstoreSdk.ProductPurchaseFilter() // ProductPurchaseFilter | Filter the results
};
apiInstance.getProductPurchase(product, purchase, opts, (error, data, response) => {
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
 **purchase** | **String**|  | 
 **filter** | [**ProductPurchaseFilter**](.md)| Filter the results | [optional] 

### Return type

[**GetProductPurchaseResponse**](GetProductPurchaseResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductPurchases

> Object listProductPurchases(product, opts)

List all purchases for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductPurchasesApi();
let product = "product_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example", // String | The cursor from which to return paginated results starting after
  'filter': new GmodstoreSdk.ProductPurchaseFilter() // ProductPurchaseFilter | Filter the results
};
apiInstance.listProductPurchases(product, opts, (error, data, response) => {
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
 **filter** | [**ProductPurchaseFilter**](.md)| Filter the results | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProductPurchase

> UpdateProductPurchaseResponse updateProductPurchase(product, purchase, opts)

Update the specified purchase for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductPurchasesApi();
let product = "product_example"; // String | 
let purchase = "purchase_example"; // String | 
let opts = {
  'updateProductPurchasePayload': new GmodstoreSdk.UpdateProductPurchasePayload() // UpdateProductPurchasePayload | 
};
apiInstance.updateProductPurchase(product, purchase, opts, (error, data, response) => {
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
 **purchase** | **String**|  | 
 **updateProductPurchasePayload** | [**UpdateProductPurchasePayload**](UpdateProductPurchasePayload.md)|  | [optional] 

### Return type

[**UpdateProductPurchaseResponse**](UpdateProductPurchaseResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

