# GmodStore.AddonVersionsApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddonVersion**](AddonVersionsApi.md#createAddonVersion) | **POST** /addons/{addon_id}/versions | Create a new version for an addon
[**downloadAddonVersion**](AddonVersionsApi.md#downloadAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id}/download | Generate a download token for a specific version of an addon
[**getAddonVersion**](AddonVersionsApi.md#getAddonVersion) | **GET** /addons/{addon_id}/versions/{version_id} | Fetch a specific version of an addon
[**listAddonVersions**](AddonVersionsApi.md#listAddonVersions) | **GET** /addons/{addon_id}/versions | Fetch all the versions of an addon
[**updateAddonVersion**](AddonVersionsApi.md#updateAddonVersion) | **PUT** /addons/{addon_id}/versions/{version_id} | Update a version of an addon



## createAddonVersion

> AddonVersionResponse createAddonVersion(addonId, newAddonVersion, opts)

Create a new version for an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonVersionsApi();
let addonId = 789; // Number | Id of the addon
let newAddonVersion = new GmodStore.NewAddonVersion(); // NewAddonVersion | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonVersion`
};
apiInstance.createAddonVersion(addonId, newAddonVersion, opts, (error, data, response) => {
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
 **newAddonVersion** | [**NewAddonVersion**](NewAddonVersion.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonVersion&#x60; | [optional] 

### Return type

[**AddonVersionResponse**](AddonVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## downloadAddonVersion

> AddonDownloadResponse downloadAddonVersion(addonId, versionId)

Generate a download token for a specific version of an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonVersionsApi();
let addonId = 789; // Number | Id of the addon
let versionId = 789; // Number | Id of the version
apiInstance.downloadAddonVersion(addonId, versionId, (error, data, response) => {
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
 **versionId** | **Number**| Id of the version | 

### Return type

[**AddonDownloadResponse**](AddonDownloadResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAddonVersion

> AddonVersionResponse getAddonVersion(addonId, versionId, opts)

Fetch a specific version of an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonVersionsApi();
let addonId = 789; // Number | Id of the addon
let versionId = 789; // Number | Id of the version
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonVersion`
};
apiInstance.getAddonVersion(addonId, versionId, opts, (error, data, response) => {
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
 **versionId** | **Number**| Id of the version | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonVersion&#x60; | [optional] 

### Return type

[**AddonVersionResponse**](AddonVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAddonVersions

> AddonVersionListResponse listAddonVersions(addonId, opts)

Fetch all the versions of an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonVersionsApi();
let addonId = 789; // Number | Id of the addon
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonVersion`
};
apiInstance.listAddonVersions(addonId, opts, (error, data, response) => {
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
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonVersion&#x60; | [optional] 

### Return type

[**AddonVersionListResponse**](AddonVersionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAddonVersion

> AddonVersionResponse updateAddonVersion(addonId, versionId, addonVersion, opts)

Update a version of an addon

### Example

```javascript
import GmodStore from 'gmod_store';
let defaultClient = GmodStore.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodStore.AddonVersionsApi();
let addonId = 789; // Number | Id of the addon
let versionId = 789; // Number | Id of the version
let addonVersion = new GmodStore.AddonVersion(); // AddonVersion | 
let opts = {
  '_with': ["null"] // [String] | The relations you want to fetch with the `AddonVersion`
};
apiInstance.updateAddonVersion(addonId, versionId, addonVersion, opts, (error, data, response) => {
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
 **versionId** | **Number**| Id of the version | 
 **addonVersion** | [**AddonVersion**](AddonVersion.md)|  | 
 **_with** | [**[String]**](String.md)| The relations you want to fetch with the &#x60;AddonVersion&#x60; | [optional] 

### Return type

[**AddonVersionResponse**](AddonVersionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

