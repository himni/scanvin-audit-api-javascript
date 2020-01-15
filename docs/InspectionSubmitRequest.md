# Auditoria.InspectionSubmitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | Número ou ID do protocolo fornecidos pelo cliente. Obrigatório. | 
**carEngine** | **String** | Número do motor. | 
**carPlate** | **String** | Número da placa de identificação veicular. Obrigatório se &#x60;&#x60;&#x60;car_vin&#x60;&#x60;&#x60; estiver ausente. | 
**carRenavam** | **String** | Número do RENAVAM. | 
**carState** | **String** | UF da placa de identificação veicular. Obrigatório se &#x60;&#x60;&#x60;car_plate&#x60;&#x60;&#x60; estiver presente. | 
**carVin** | **String** | Número de chassi. Obrigatório se &#x60;&#x60;&#x60;car_plate&#x60;&#x60;&#x60; estiver ausente. | 
**engineAccepted** | **Boolean** | Informa se o vistoriador aprovou ou reprovou a numeração do motor. Obrigatório se &#x60;&#x60;&#x60;car_engine&#x60;&#x60;&#x60;estiver presente. | 
**vinAccepted** | **Boolean** | Informa se o vistoriador aprovou ou reprovação a numeração do chassi. Obrigatório se &#x60;&#x60;&#x60;car_vin&#x60;&#x60;&#x60; estiver presente. | 
**surveyorEmail** | **String** | E-mail do vistoriador. Obrigatório. | 
**postbackUrl** | **String** | URL do webhook para o qual o resultado da auditoria deve ser postado, quando disponível. Aplica-se somente a este protocolo. Se omitido, será utilizada a URL padrão, que deve ser configurada no Painel do Cliente. | 
**pictures** | [**[Picture]**](Picture.md) | Imagens do veículo, para serem auditadas. | 
