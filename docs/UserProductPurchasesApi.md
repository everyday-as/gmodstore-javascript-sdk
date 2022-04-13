# GmodstoreSdk.UserProductPurchasesApi

All URIs are relative to *https://www.gmodstore.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserPurchases**](UserProductPurchasesApi.md#listUserPurchases) | **GET** /api/v3/users/{user}/purchases | List all the specified user&#39;s purchases



## listUserPurchases

> Object listUserPurchases(user, opts)

List all the specified user&#39;s purchases

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (Personal Access Token) access token for authorization: PersonalAccessToken
let PersonalAccessToken = defaultClient.authentications['PersonalAccessToken'];
PersonalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.UserProductPurchasesApi();
let user = "user_example"; // String | 
let opts = {
  'cursor': "cursor_example", // String | The cursor from which to return paginated results starting after
  'filter': new GmodstoreSdk.ProductPurchaseFilter() // ProductPurchaseFilter | Filter the results
};
apiInstance.listUserPurchases(user, opts, (error, data, response) => {
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
 **user** | **String**|  | 
 **cursor** | **String**| The cursor from which to return paginated results starting after | [optional] 
 **filter** | [**ProductPurchaseFilter**](.md)| Filter the results | [optional] 

### Return type

**Object**

### Authorization

[PersonalAccessToken](../README.md#PersonalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

