# GmodStoreApi.AddonReviewsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddonReview**](AddonReviewsApi.md#getAddonReview) | **GET** /addons/{addon_id}/reviews/{review_id} | Fetch a review of an addon
[**listAddonReviews**](AddonReviewsApi.md#listAddonReviews) | **GET** /addons/{addon_id}/reviews | Fetch all the reviews of an addon



## getAddonReview

> AddonReviewResponse getAddonReview(addonId, reviewId, opts)

Fetch a review of an addon

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.AddonReviewsApi();
let addonId = 789; // Number | Id of the addon
let reviewId = 789; // Number | Id of the review
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonReview`
};
apiInstance.getAddonReview(addonId, reviewId, opts, (error, data, response) => {
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
 **addonId** | **Number**| Id of the addon | 
 **reviewId** | **Number**| Id of the review | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonReview&#x60; | [optional] 

### Return type

[**AddonReviewResponse**](AddonReviewResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddonReviews

> AddonReviewListResponse listAddonReviews(addonId, opts)

Fetch all the reviews of an addon

### Example

```javascript
import GmodStoreApi from 'gmod_store_api';
let defaultClient = GmodStoreApi.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStoreApi.AddonReviewsApi();
let addonId = 789; // Number | Id of the addon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonReview`
};
apiInstance.listAddonReviews(addonId, opts, (error, data, response) => {
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
 **addonId** | **Number**| Id of the addon | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonReview&#x60; | [optional] 

### Return type

[**AddonReviewListResponse**](AddonReviewListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

