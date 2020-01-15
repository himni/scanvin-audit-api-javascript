/**
 * AUDITORIA
 * # Introducão  Seja bem-vindo a documentação da API do [SCANVIN](https://scanvin.com.br) para auditorias    Nossa API foi criada utilizando o padrão [REST](https://restfulapi.net/) e [HATEOAS](https://restfulapi.net/hateoas/), possibilitando a integração de seu sistema ao nosso, e está documentada abaixo.  # Como usar a API?  Logo a seguir você encontrará todos os recursos e métodos suportados pela API, sendo que essa página possibilita que você teste os recursos e métodos diretamente através dela.  # Autenticação  Você precisa de uma [API KEY](https://en.wikipedia.org/wiki/Application_programming_interface_key#HTTP_APIs) para identificar a conta que está realizando solicitações para a API. Você pode obter seu token de autenticação no seu [Painel do Cliente](https://auditoria.scanvin.com.br/client/).  Insira seu token no campo que se encontra topo desta página para testar os métodos da API.  # Webhook  Você também deve configurar seu [Webhook](https://en.wikipedia.org/wiki/Webhook) no [Painel do Cliente](https://auditoria.scanvin.com.br/client/webhook). Quando os resultados da auditoria estiverem disponíveis, uma notificação será enviada para a URL informada, via [HTTP POST](https://en.wikipedia.org/wiki/POST_(HTTP)). A notificação possui ```Content-type``` do tipo ```application/json```. O [JSON](https://en.wikipedia.org/wiki/JSON) postado contém um único campo, ```notification_id```, que contém o identificador único do evento que gerou a notificação. Deve-se então chamar o endpoint ```Inspection - Get Inspection```, informando esse mesmo identificador único, para recuperar os dados da vistoria, e da auditoria realizada.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BigDecimal from './BigDecimal';

/**
* The Picture model module.
* @module model/Picture
* @version 1.0
*/
export default class Picture {
    /**
    * Constructs a new <code>Picture</code>.
    * @alias module:model/Picture
    * @class
    * @param type {Number} Tipo da imagem. Os tipos disponíveis podem ser obtidos acessando o endpoint ```Inspection - Get Types```. Obrigatório.
    * @param hash {String} Hash do arquivo da imagem. Obrigatório.
    * @param bytes {Number} Tamanho em bytes do arquivo da imagem. Obrigatório.
    * @param url {String} URL da imagem, acessível publicamente. Obrigatório.
    * @param lat {module:model/BigDecimal} Latitude em que a imagem foi fotografada.
    * @param lng {module:model/BigDecimal} Longitude em que a imagem foi fotografada.
    */

    constructor(type, hash, bytes, url, lat, lng) {
        
        
        this['type'] = type;
        this['hash'] = hash;
        this['bytes'] = bytes;
        this['url'] = url;
        this['lat'] = lat;
        this['lng'] = lng;
        
    }

    /**
    * Constructs a <code>Picture</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Picture} obj Optional instance to populate.
    * @return {module:model/Picture} The populated <code>Picture</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Picture();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('bytes')) {
                obj['bytes'] = ApiClient.convertToType(data['bytes'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], BigDecimal);
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], BigDecimal);
            }
        }
        return obj;
    }

    /**
    * Tipo da imagem. Os tipos disponíveis podem ser obtidos acessando o endpoint ```Inspection - Get Types```. Obrigatório.
    * @member {Number} type
    */
    type = undefined;
    /**
    * Hash do arquivo da imagem. Obrigatório.
    * @member {String} hash
    */
    hash = undefined;
    /**
    * Tamanho em bytes do arquivo da imagem. Obrigatório.
    * @member {Number} bytes
    */
    bytes = undefined;
    /**
    * URL da imagem, acessível publicamente. Obrigatório.
    * @member {String} url
    */
    url = undefined;
    /**
    * Latitude em que a imagem foi fotografada.
    * @member {module:model/BigDecimal} lat
    */
    lat = undefined;
    /**
    * Longitude em que a imagem foi fotografada.
    * @member {module:model/BigDecimal} lng
    */
    lng = undefined;




}