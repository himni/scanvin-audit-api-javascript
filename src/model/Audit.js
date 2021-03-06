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
import Compliance from './Compliance';
import Details from './Details';
import Problems from './Problems';

/**
* The Audit model module.
* @module model/Audit
* @version 1.0
*/
export default class Audit {
    /**
    * Constructs a new <code>Audit</code>.
    * @alias module:model/Audit
    * @class
    * @param approved {Boolean} Informa se a vistoria foi aprovada ou reprovada pelo auditor.
    * @param impeachment {String} Neste campo o auditor pode sugerir a criação de impedimento para futuras vistorias do veículo.
    * @param notes {Array.<String>} Observações adicionadas pelo auditor, referentes à auditoria.
    * @param engine {String} Número do motor.
    * @param frontPlate {String} Placa dianteira.
    * @param rearPlate {String} Placa traseira.
    * @param vin {String} Número do chassi.
    * @param details {module:model/Details} 
    * @param compliance {module:model/Compliance} 
    * @param problems {module:model/Problems} 
    */

    constructor(approved, impeachment, notes, engine, frontPlate, rearPlate, vin, details, compliance, problems) {
        
        
        this['approved'] = approved;
        this['impeachment'] = impeachment;
        this['notes'] = notes;
        this['engine'] = engine;
        this['front_plate'] = frontPlate;
        this['rear_plate'] = rearPlate;
        this['vin'] = vin;
        this['details'] = details;
        this['compliance'] = compliance;
        this['problems'] = problems;
        
    }

    /**
    * Constructs a <code>Audit</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Audit} obj Optional instance to populate.
    * @return {module:model/Audit} The populated <code>Audit</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Audit();
                        
            
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
            }
            if (data.hasOwnProperty('impeachment')) {
                obj['impeachment'] = ApiClient.convertToType(data['impeachment'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], ['String']);
            }
            if (data.hasOwnProperty('engine')) {
                obj['engine'] = ApiClient.convertToType(data['engine'], 'String');
            }
            if (data.hasOwnProperty('front_plate')) {
                obj['front_plate'] = ApiClient.convertToType(data['front_plate'], 'String');
            }
            if (data.hasOwnProperty('rear_plate')) {
                obj['rear_plate'] = ApiClient.convertToType(data['rear_plate'], 'String');
            }
            if (data.hasOwnProperty('vin')) {
                obj['vin'] = ApiClient.convertToType(data['vin'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = Details.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('compliance')) {
                obj['compliance'] = Compliance.constructFromObject(data['compliance']);
            }
            if (data.hasOwnProperty('problems')) {
                obj['problems'] = Problems.constructFromObject(data['problems']);
            }
        }
        return obj;
    }

    /**
    * Informa se a vistoria foi aprovada ou reprovada pelo auditor.
    * @member {Boolean} approved
    */
    approved = undefined;
    /**
    * Neste campo o auditor pode sugerir a criação de impedimento para futuras vistorias do veículo.
    * @member {String} impeachment
    */
    impeachment = undefined;
    /**
    * Observações adicionadas pelo auditor, referentes à auditoria.
    * @member {Array.<String>} notes
    */
    notes = undefined;
    /**
    * Número do motor.
    * @member {String} engine
    */
    engine = undefined;
    /**
    * Placa dianteira.
    * @member {String} front_plate
    */
    front_plate = undefined;
    /**
    * Placa traseira.
    * @member {String} rear_plate
    */
    rear_plate = undefined;
    /**
    * Número do chassi.
    * @member {String} vin
    */
    vin = undefined;
    /**
    * @member {module:model/Details} details
    */
    details = undefined;
    /**
    * @member {module:model/Compliance} compliance
    */
    compliance = undefined;
    /**
    * @member {module:model/Problems} problems
    */
    problems = undefined;




}
