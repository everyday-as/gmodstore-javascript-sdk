# GmodstoreSdk.AdventCalendarApi

All URIs are relative to *https://api.gmodstore.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdventCalendarStats**](AdventCalendarApi.md#getAdventCalendarStats) | **GET** /events/advent-calendar/stats | Fetch statistics relating to the advent calendar event



## getAdventCalendarStats

> AdventCalendarStatsResponse getAdventCalendarStats()

Fetch statistics relating to the advent calendar event

### Example

```javascript
import GmodstoreSdk from 'gmodstore-sdk';
let defaultClient = GmodstoreSdk.ApiClient.instance;
// Configure Bearer (API Key) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GmodstoreSdk.AdventCalendarApi();
apiInstance.getAdventCalendarStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AdventCalendarStatsResponse**](AdventCalendarStatsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

