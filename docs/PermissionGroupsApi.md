# GmodstoreSdk.PermissionGroupsApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPermissionGroup**](PermissionGroupsApi.md#createPermissionGroup) | **POST** /api/v3/permission-groups | Create a permission group
[**deletePermissionGroup**](PermissionGroupsApi.md#deletePermissionGroup) | **DELETE** /api/v3/permission-groups/{permission_group} | Delete the specified permission group
[**getPermissionGroup**](PermissionGroupsApi.md#getPermissionGroup) | **GET** /api/v3/permission-groups/{permission_group} | Show the specified permission group
[**listPermissionGroups**](PermissionGroupsApi.md#listPermissionGroups) | **GET** /api/v3/permission-groups | List all permission groups
[**updatePermissionGroup**](PermissionGroupsApi.md#updatePermissionGroup) | **PUT** /api/v3/permission-groups/{permission_group} | Update the specified permission group



## createPermissionGroup

> CreatePermissionGroupResponse createPermissionGroup(opts)

Create a permission group

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PermissionGroupsApi();
let opts = {
  'newPermissionGroupPayload': new GmodstoreSdk.NewPermissionGroupPayload() // NewPermissionGroupPayload | 
};
apiInstance.createPermissionGroup(opts, (error, data, response) => {
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
 **newPermissionGroupPayload** | [**NewPermissionGroupPayload**](NewPermissionGroupPayload.md)|  | [optional] 

### Return type

[**CreatePermissionGroupResponse**](CreatePermissionGroupResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePermissionGroup

> DeletePermissionGroupResponse deletePermissionGroup(permissionGroup)

Delete the specified permission group

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PermissionGroupsApi();
let permissionGroup = "permissionGroup_example"; // String | 
apiInstance.deletePermissionGroup(permissionGroup, (error, data, response) => {
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
 **permissionGroup** | **String**|  | 

### Return type

[**DeletePermissionGroupResponse**](DeletePermissionGroupResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPermissionGroup

> GetPermissionGroupResponse getPermissionGroup(permissionGroup)

Show the specified permission group

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PermissionGroupsApi();
let permissionGroup = "permissionGroup_example"; // String | 
apiInstance.getPermissionGroup(permissionGroup, (error, data, response) => {
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
 **permissionGroup** | **String**|  | 

### Return type

[**GetPermissionGroupResponse**](GetPermissionGroupResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPermissionGroups

> Object listPermissionGroups(opts)

List all permission groups

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PermissionGroupsApi();
let opts = {
  'perPage': 24, // Number | 
  'cursor': "cursor_example" // String | The cursor from which to return paginated results starting after
};
apiInstance.listPermissionGroups(opts, (error, data, response) => {
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
 **perPage** | **Number**|  | [optional] [default to 24]
 **cursor** | **String**| The cursor from which to return paginated results starting after | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePermissionGroup

> UpdatePermissionGroupResponse updatePermissionGroup(permissionGroup, opts)

Update the specified permission group

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.PermissionGroupsApi();
let permissionGroup = "permissionGroup_example"; // String | 
let opts = {
  'updatePermissionGroupPayload': new GmodstoreSdk.UpdatePermissionGroupPayload() // UpdatePermissionGroupPayload | 
};
apiInstance.updatePermissionGroup(permissionGroup, opts, (error, data, response) => {
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
 **permissionGroup** | **String**|  | 
 **updatePermissionGroupPayload** | [**UpdatePermissionGroupPayload**](UpdatePermissionGroupPayload.md)|  | [optional] 

### Return type

[**UpdatePermissionGroupResponse**](UpdatePermissionGroupResponse.md)

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

