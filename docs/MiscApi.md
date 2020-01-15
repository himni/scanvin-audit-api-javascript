# Auditoria.MiscApi

All URIs are relative to *https://auditoria.scanvin.com.br/api/inspection*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inspectionGetInspection**](MiscApi.md#inspectionGetInspection) | **GET** /{notification_id} | Inspection - Get Inspection
[**inspectionPictureTypes**](MiscApi.md#inspectionPictureTypes) | **GET** /picture-types | Inspection - Picture Types
[**inspectionSubmit**](MiscApi.md#inspectionSubmit) | **POST** /submit | Inspection - Submit

<a name="inspectionGetInspection"></a>
# **inspectionGetInspection**
> InspectionGetInspection inspectionGetInspection(notificationId)

Inspection - Get Inspection

Recupera as informações da vistoria e o resultado da auditoria, se estiver disponível.

### Example
```javascript
import Auditoria from 'auditoria';
let defaultClient = Auditoria.ApiClient.instance;

// Configure API key authorization: Api-Key
let Api-Key = defaultClient.authentications['Api-Key'];
Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new Auditoria.MiscApi();
let notificationId = "notificationId_example"; // String | O código da notificação, recebido pelo seu webhook via HTTP POST

apiInstance.inspectionGetInspection(notificationId, (error, data, response) => {
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
 **notificationId** | **String**| O código da notificação, recebido pelo seu webhook via HTTP POST | 

### Return type

[**InspectionGetInspection**](InspectionGetInspection.md)

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="inspectionPictureTypes"></a>
# **inspectionPictureTypes**
> &#x27;String&#x27; inspectionPictureTypes()

Inspection - Picture Types

Utilize este endpoint para obter a lista de códigos para os tipos de imagem que devem ser utilizados ao realizar chamadas ao endpoint &#x60;&#x60;&#x60;Inspection - Submit&#x60;&#x60;&#x60;.

### Example
```javascript
import Auditoria from 'auditoria';
let defaultClient = Auditoria.ApiClient.instance;

// Configure API key authorization: Api-Key
let Api-Key = defaultClient.authentications['Api-Key'];
Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new Auditoria.MiscApi();
apiInstance.inspectionPictureTypes((error, data, response) => {
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

**&#x27;String&#x27;**

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="inspectionSubmit"></a>
# **inspectionSubmit**
> InspectionSubmit inspectionSubmit(body)

Inspection - Submit

Utilize este endpoint para enviar uma vistoria para auditoria. As vistorias são colocadas em uma fila e distribuídas aleatoriamente entre os auditores, e são processadas na ordem de chegada. Para receber uma notificação assim que a auditoria for realizada, configure o webhook no [Painel do Cliente](https://auditoria.scanvin.com.br/client/webhook). Alternativamente, caso prefira especificar um webhook customizado para cada vistoria, informe o parâmetro &#x60;&#x60;&#x60;postback_url&#x60;&#x60;&#x60;.

### Example
```javascript
import Auditoria from 'auditoria';
let defaultClient = Auditoria.ApiClient.instance;

// Configure API key authorization: Api-Key
let Api-Key = defaultClient.authentications['Api-Key'];
Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new Auditoria.MiscApi();
let body = new Auditoria.InspectionSubmitRequest(); // InspectionSubmitRequest | 

apiInstance.inspectionSubmit(body, (error, data, response) => {
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
 **body** | [**InspectionSubmitRequest**](InspectionSubmitRequest.md)|  | 

### Return type

[**InspectionSubmit**](InspectionSubmit.md)

### Authorization

[Api-Key](../README.md#Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

