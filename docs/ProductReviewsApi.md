# GmodstoreSdk.ProductReviewsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductReview**](ProductReviewsApi.md#getProductReview) | **GET** /api/v3/products/{product}/reviews/{review} | Show the specified review for a product
[**listProductReviews**](ProductReviewsApi.md#listProductReviews) | **GET** /api/v3/products/{product}/reviews | List all reviews for a product



## getProductReview

> GetProductReviewResponse getProductReview(product, review, opts)

Show the specified review for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductReviewsApi();
let product = "product_example"; // String | 
let review = "review_example"; // String | 
let opts = {
  'filter': new GmodstoreSdk.ProductReviewFilter() // ProductReviewFilter | Filter the results
};
apiInstance.getProductReview(product, review, opts, (error, data, response) => {
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
 **review** | **String**|  | 
 **filter** | [**ProductReviewFilter**](.md)| Filter the results | [optional] 

### Return type

[**GetProductReviewResponse**](GetProductReviewResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProductReviews

> Object listProductReviews(product, opts)

List all reviews for a product

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.ProductReviewsApi();
let product = "product_example"; // String | 
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example", // String | The cursor from which to return paginated results starting after
  'filter': new GmodstoreSdk.ProductReviewFilter() // ProductReviewFilter | Filter the results
};
apiInstance.listProductReviews(product, opts, (error, data, response) => {
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
 **filter** | [**ProductReviewFilter**](.md)| Filter the results | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

