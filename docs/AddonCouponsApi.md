# GmodStore.AddonCouponsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddonCoupon**](AddonCouponsApi.md#createAddonCoupon) | **POST** /addons/{addon_id}/coupons | Create an addon coupon
[**deleteAddonCoupon**](AddonCouponsApi.md#deleteAddonCoupon) | **DELETE** /addons/{addon_id}/coupons/{coupon_id} | Destroy an addon&#39;s coupon
[**getAddonCoupon**](AddonCouponsApi.md#getAddonCoupon) | **GET** /addons/{addon_id}/coupons/{coupon_id} | Fetch an addon&#39;s coupon
[**listAddonCoupons**](AddonCouponsApi.md#listAddonCoupons) | **GET** /addons/{addon_id}/coupons | Fetch all the coupons for an addon
[**updateAddonCoupon**](AddonCouponsApi.md#updateAddonCoupon) | **PUT** /addons/{addon_id}/coupons/{coupon_id} | Update an addon&#39;s coupon



## createAddonCoupon

> AddonCouponResponse createAddonCoupon(addonId, addonCoupon, opts)

Create an addon coupon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonCouponsApi();
let addonId = 789; // Number | Id of the addon
let addonCoupon = new GmodStore.AddonCoupon(); // AddonCoupon | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonCoupon`
};
apiInstance.createAddonCoupon(addonId, addonCoupon, opts, (error, data, response) => {
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
 **addonCoupon** | [**AddonCoupon**](AddonCoupon.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonCoupon&#x60; | [optional] 

### Return type

[**AddonCouponResponse**](AddonCouponResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAddonCoupon

> deleteAddonCoupon(addonId, couponId)

Destroy an addon&#39;s coupon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonCouponsApi();
let addonId = 789; // Number | Id of the addon
let couponId = 789; // Number | Id of the coupon
apiInstance.deleteAddonCoupon(addonId, couponId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addonId** | **Number**| Id of the addon | 
 **couponId** | **Number**| Id of the coupon | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAddonCoupon

> AddonCouponResponse getAddonCoupon(addonId, couponId, opts)

Fetch an addon&#39;s coupon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonCouponsApi();
let addonId = 789; // Number | Id of the addon
let couponId = 789; // Number | Id of the coupon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonCoupon`
};
apiInstance.getAddonCoupon(addonId, couponId, opts, (error, data, response) => {
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
 **couponId** | **Number**| Id of the coupon | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonCoupon&#x60; | [optional] 

### Return type

[**AddonCouponResponse**](AddonCouponResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddonCoupons

> AddonCouponListResponse listAddonCoupons(addonId, opts)

Fetch all the coupons for an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonCouponsApi();
let addonId = 789; // Number | Id of the addon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonCoupon`
};
apiInstance.listAddonCoupons(addonId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonCoupon&#x60; | [optional] 

### Return type

[**AddonCouponListResponse**](AddonCouponListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAddonCoupon

> AddonCouponResponse updateAddonCoupon(addonId, couponId, addonCoupon, opts)

Update an addon&#39;s coupon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonCouponsApi();
let addonId = 789; // Number | Id of the addon
let couponId = 789; // Number | Id of the coupon
let addonCoupon = new GmodStore.AddonCoupon(); // AddonCoupon | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonCoupon`
};
apiInstance.updateAddonCoupon(addonId, couponId, addonCoupon, opts, (error, data, response) => {
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
 **couponId** | **Number**| Id of the coupon | 
 **addonCoupon** | [**AddonCoupon**](AddonCoupon.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonCoupon&#x60; | [optional] 

### Return type

[**AddonCouponResponse**](AddonCouponResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

