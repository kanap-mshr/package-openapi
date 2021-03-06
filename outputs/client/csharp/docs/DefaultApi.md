# Org.OpenAPITools.Api.DefaultApi

All URIs are relative to *https://example.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**OpenapitutorialControllerHealthCall**](DefaultApi.md#openapitutorialcontrollerhealthcall) | **GET** /health | サーバーの状態を返します



## OpenapitutorialControllerHealthCall

> GetHealthResponse OpenapitutorialControllerHealthCall ()

サーバーの状態を返します

サーバーの状態を返します。

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class OpenapitutorialControllerHealthCallExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://example.com/api/v0";
            var apiInstance = new DefaultApi(Configuration.Default);

            try
            {
                // サーバーの状態を返します
                GetHealthResponse result = apiInstance.OpenapitutorialControllerHealthCall();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling DefaultApi.OpenapitutorialControllerHealthCall: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
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


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | サーバーは正常に動作しています |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

