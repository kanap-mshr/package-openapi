# openapi.api.DefaultApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://example.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**openapitutorialControllerHealthCall**](DefaultApi.md#openapitutorialcontrollerhealthcall) | **GET** /health | サーバーの状態を返します


# **openapitutorialControllerHealthCall**
> GetHealthResponse openapitutorialControllerHealthCall()

サーバーの状態を返します

サーバーの状態を返します。

### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = DefaultApi();

try { 
    final result = api_instance.openapitutorialControllerHealthCall();
    print(result);
} catch (e) {
    print('Exception when calling DefaultApi->openapitutorialControllerHealthCall: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetHealthResponse**](GetHealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

