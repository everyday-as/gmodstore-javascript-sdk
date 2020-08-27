# GmodStore.AddonsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddon**](AddonsApi.md#getAddon) | **GET** /addons/{addon_id} | Fetch a single addon
[**listSelfAddons**](AddonsApi.md#listSelfAddons) | **GET** /addons | Fetch all the addons that you have access to



## getAddon

> AddonResponse getAddon(addonId, opts)

Fetch a single addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonsApi();
let addonId = 789; // Number | Id of the addon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `Addon`
};
apiInstance.getAddon(addonId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;Addon&#x60; | [optional] 

### Return type

[**AddonResponse**](AddonResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSelfAddons

> AddonListResponse listSelfAddons(opts)

Fetch all the addons that you have access to

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonsApi();
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `Addon`
};
apiInstance.listSelfAddons(opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;Addon&#x60; | [optional] 

### Return type

[**AddonListResponse**](AddonListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

