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

/**
* The Problems model module.
* @module model/Problems
* @version 1.0
*/
export default class Problems {
    /**
    * Constructs a new <code>Problems</code>.
    * @alias module:model/Problems
    * @class
    * @param extinguisher {Boolean} Informa se o extintor está com problemas.
    * @param hodometer {Boolean} Informa se o hodômetro está com problemas.
    * @param seal {Boolean} Informa se o lacre está com problemas.
    * @param flAlert {Boolean} Informa se o alerta frontal esquerdo está com problemas.
    * @param frAlert {Boolean} Informa se o alerta frontal direito está com problemas.
    * @param rlAlert {Boolean} Informa se o alerta traseiro esquerdo está com problemas.
    * @param rrAlert {Boolean} Informa se o alerta traseiro direito está com problemas.
    * @param flHeadlight {Boolean} Informa se o farol frontal esquerdo está com problemas.
    * @param frHeadlight {Boolean} Informa se o farol frontal direito está com problemas.
    * @param rlHeadlight {Boolean} Informa se o farol traseiro esquerdo está com problemas.
    * @param rrHeadlight {Boolean} Informa se o farol traseiro direito está com problemas.
    */

    constructor(extinguisher, hodometer, seal, flAlert, frAlert, rlAlert, rrAlert, flHeadlight, frHeadlight, rlHeadlight, rrHeadlight) {
        
        
        this['extinguisher'] = extinguisher;
        this['hodometer'] = hodometer;
        this['seal'] = seal;
        this['fl_alert'] = flAlert;
        this['fr_alert'] = frAlert;
        this['rl_alert'] = rlAlert;
        this['rr_alert'] = rrAlert;
        this['fl_headlight'] = flHeadlight;
        this['fr_headlight'] = frHeadlight;
        this['rl_headlight'] = rlHeadlight;
        this['rr_headlight'] = rrHeadlight;
        
    }

    /**
    * Constructs a <code>Problems</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Problems} obj Optional instance to populate.
    * @return {module:model/Problems} The populated <code>Problems</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Problems();
                        
            
            if (data.hasOwnProperty('extinguisher')) {
                obj['extinguisher'] = ApiClient.convertToType(data['extinguisher'], 'Boolean');
            }
            if (data.hasOwnProperty('hodometer')) {
                obj['hodometer'] = ApiClient.convertToType(data['hodometer'], 'Boolean');
            }
            if (data.hasOwnProperty('seal')) {
                obj['seal'] = ApiClient.convertToType(data['seal'], 'Boolean');
            }
            if (data.hasOwnProperty('fl_alert')) {
                obj['fl_alert'] = ApiClient.convertToType(data['fl_alert'], 'Boolean');
            }
            if (data.hasOwnProperty('fr_alert')) {
                obj['fr_alert'] = ApiClient.convertToType(data['fr_alert'], 'Boolean');
            }
            if (data.hasOwnProperty('rl_alert')) {
                obj['rl_alert'] = ApiClient.convertToType(data['rl_alert'], 'Boolean');
            }
            if (data.hasOwnProperty('rr_alert')) {
                obj['rr_alert'] = ApiClient.convertToType(data['rr_alert'], 'Boolean');
            }
            if (data.hasOwnProperty('fl_headlight')) {
                obj['fl_headlight'] = ApiClient.convertToType(data['fl_headlight'], 'Boolean');
            }
            if (data.hasOwnProperty('fr_headlight')) {
                obj['fr_headlight'] = ApiClient.convertToType(data['fr_headlight'], 'Boolean');
            }
            if (data.hasOwnProperty('rl_headlight')) {
                obj['rl_headlight'] = ApiClient.convertToType(data['rl_headlight'], 'Boolean');
            }
            if (data.hasOwnProperty('rr_headlight')) {
                obj['rr_headlight'] = ApiClient.convertToType(data['rr_headlight'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Informa se o extintor está com problemas.
    * @member {Boolean} extinguisher
    */
    extinguisher = undefined;
    /**
    * Informa se o hodômetro está com problemas.
    * @member {Boolean} hodometer
    */
    hodometer = undefined;
    /**
    * Informa se o lacre está com problemas.
    * @member {Boolean} seal
    */
    seal = undefined;
    /**
    * Informa se o alerta frontal esquerdo está com problemas.
    * @member {Boolean} fl_alert
    */
    fl_alert = undefined;
    /**
    * Informa se o alerta frontal direito está com problemas.
    * @member {Boolean} fr_alert
    */
    fr_alert = undefined;
    /**
    * Informa se o alerta traseiro esquerdo está com problemas.
    * @member {Boolean} rl_alert
    */
    rl_alert = undefined;
    /**
    * Informa se o alerta traseiro direito está com problemas.
    * @member {Boolean} rr_alert
    */
    rr_alert = undefined;
    /**
    * Informa se o farol frontal esquerdo está com problemas.
    * @member {Boolean} fl_headlight
    */
    fl_headlight = undefined;
    /**
    * Informa se o farol frontal direito está com problemas.
    * @member {Boolean} fr_headlight
    */
    fr_headlight = undefined;
    /**
    * Informa se o farol traseiro esquerdo está com problemas.
    * @member {Boolean} rl_headlight
    */
    rl_headlight = undefined;
    /**
    * Informa se o farol traseiro direito está com problemas.
    * @member {Boolean} rr_headlight
    */
    rr_headlight = undefined;




}
