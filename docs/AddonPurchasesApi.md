# GmodstoreSdk.AddonPurchasesApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddonPurchase**](AddonPurchasesApi.md#createAddonPurchase) | **POST** /addons/{addon_id}/purchases | Create a purchase for an addon
[**getAddonPurchase**](AddonPurchasesApi.md#getAddonPurchase) | **GET** /addons/{addon_id}/purchases/{user_id} | Get a purchase of an addon by user
[**listAddonPurchases**](AddonPurchasesApi.md#listAddonPurchases) | **GET** /addons/{addon_id}/purchases | Fetch all purchases of an addon
[**updateAddonPurchase**](AddonPurchasesApi.md#updateAddonPurchase) | **PUT** /addons/{addon_id}/purchases/{user_id} | Update a purchase for an addon



## createAddonPurchase

> AddonPurchaseResponse createAddonPurchase(addonId, newAddonPurchase, opts)

Create a purchase for an addon

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.AddonPurchasesApi();
let addonId = 789; // Number | Id of the addon
let newAddonPurchase = new GmodstoreSdk.NewAddonPurchase(); // NewAddonPurchase | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonPurchase`
};
apiInstance.createAddonPurchase(addonId, newAddonPurchase, opts, (error, data, response) => {
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
 **newAddonPurchase** | [**NewAddonPurchase**](NewAddonPurchase.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonPurchase&#x60; | [optional] 

### Return type

[**AddonPurchaseResponse**](AddonPurchaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAddonPurchase

> AddonPurchaseResponse getAddonPurchase(addonId, userId, opts)

Get a purchase of an addon by user

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.AddonPurchasesApi();
let addonId = 789; // Number | Id of the addon
let userId = 789; // Number | Id of the user
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonPurchase`
};
apiInstance.getAddonPurchase(addonId, userId, opts, (error, data, response) => {
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
 **userId** | **Number**| Id of the user | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonPurchase&#x60; | [optional] 

### Return type

[**AddonPurchaseResponse**](AddonPurchaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddonPurchases

> AddonPurchaseListResponse listAddonPurchases(addonId, opts)

Fetch all purchases of an addon

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.AddonPurchasesApi();
let addonId = 789; // Number | Id of the addon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonPurchase`
};
apiInstance.listAddonPurchases(addonId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonPurchase&#x60; | [optional] 

### Return type

[**AddonPurchaseListResponse**](AddonPurchaseListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAddonPurchase

> AddonPurchaseResponse updateAddonPurchase(addonId, userId, addonPurchase, opts)

Update a purchase for an addon

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.AddonPurchasesApi();
let addonId = 789; // Number | Id of the addon
let userId = 789; // Number | Id of the user
let addonPurchase = new GmodstoreSdk.AddonPurchase(); // AddonPurchase | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonPurchase`
};
apiInstance.updateAddonPurchase(addonId, userId, addonPurchase, opts, (error, data, response) => {
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
 **userId** | **Number**| Id of the user | 
 **addonPurchase** | [**AddonPurchase**](AddonPurchase.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonPurchase&#x60; | [optional] 

### Return type

[**AddonPurchaseResponse**](AddonPurchaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

