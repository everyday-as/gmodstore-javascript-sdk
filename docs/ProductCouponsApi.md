# GmodstoreSdk.ProductCouponsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProductCoupon**](ProductCouponsApi.md#createProductCoupon) | **POST** /api/v3/products/{product}/coupons | Create a coupon for a product
[**deleteProductCoupon**](ProductCouponsApi.md#deleteProductCoupon) | **DELETE** /api/v3/products/{product}/coupons/{coupon} | Delete the specified coupon for a product
[**getProductCoupon**](ProductCouponsApi.md#getProductCoupon) | **GET** /api/v3/products/{product}/coupons/{coupon} | Show the specified coupon for a product
[**listProductCoupons**](ProductCouponsApi.md#listProductCoupons) | **GET** /api/v3/products/{product}/coupons | List all coupons for a product
[**updateProductCoupon**](ProductCouponsApi.md#updateProductCoupon) | **PUT** /api/v3/products/{product}/coupons/{coupon} | Update the specified coupon for a product



## createProductCoupon

> CreateProductCouponResponse createProductCoupon(product, opts)

Create a coupon for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductCouponsApi();
let product = "product_example"; // String | 
let opts = {
  'newProductCouponPayload': new GmodstoreSdk.NewProductCouponPayload() // NewProductCouponPayload | 
};
apiInstance.createProductCoupon(product, opts, (error, data, response) => {
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
 **newProductCouponPayload** | [**NewProductCouponPayload**](NewProductCouponPayload.md)|  | [optional] 

### Return type

[**CreateProductCouponResponse**](CreateProductCouponResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProductCoupon

> DeleteProductCouponResponse deleteProductCoupon(product, coupon)

Delete the specified coupon for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductCouponsApi();
let product = "product_example"; // String | 
let coupon = "coupon_example"; // String | 
apiInstance.deleteProductCoupon(product, coupon, (error, data, response) => {
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
 **coupon** | **String**|  | 

### Return type

[**DeleteProductCouponResponse**](DeleteProductCouponResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductCoupon

> GetProductCouponResponse getProductCoupon(product, coupon, opts)

Show the specified coupon for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductCouponsApi();
let product = "product_example"; // String | 
let coupon = "coupon_example"; // String | 
let opts = {
  'filter': new GmodstoreSdk.ProductPurchaseFilter() // ProductPurchaseFilter | Filter the results
};
apiInstance.getProductCoupon(product, coupon, opts, (error, data, response) => {
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
 **coupon** | **String**|  | 
 **filter** | [**ProductPurchaseFilter**](.md)| Filter the results | [optional] 

### Return type

[**GetProductCouponResponse**](GetProductCouponResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductCoupons

> Object listProductCoupons(product, opts)

List all coupons for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductCouponsApi();
let product = "product_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example", // String | The cursor from which to return paginated results starting after
  'filter': new GmodstoreSdk.ProductPurchaseFilter() // ProductPurchaseFilter | Filter the results
};
apiInstance.listProductCoupons(product, opts, (error, data, response) => {
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


## updateProductCoupon

> UpdateProductCouponResponse updateProductCoupon(product, coupon, opts)

Update the specified coupon for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductCouponsApi();
let product = "product_example"; // String | 
let coupon = "coupon_example"; // String | 
let opts = {
  'updateProductCouponPayload': new GmodstoreSdk.UpdateProductCouponPayload() // UpdateProductCouponPayload | 
};
apiInstance.updateProductCoupon(product, coupon, opts, (error, data, response) => {
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
 **coupon** | **String**|  | 
 **updateProductCouponPayload** | [**UpdateProductCouponPayload**](UpdateProductCouponPayload.md)|  | [optional] 

### Return type

[**UpdateProductCouponResponse**](UpdateProductCouponResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

