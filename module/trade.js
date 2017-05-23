/**
 * @author synder on 2016/12/21
 * @copyright
 * @desc
 */

const AliPayRequest = require('../lib/request');

class TradeRequest extends AliPayRequest {

    static interfaces (){
        return {
            payment: {
                pay: {
                    method: 'GET',
                    name: 'alipay.trade.pay',
                    summary: '统一收单交易支付接口',
                    desc: '收银员使用扫码设备读取用户手机支付宝“付款码”/声波获取设备（如麦克风）读取用户手机支付宝的声波信息后，将二维码或条码信息/声波信息通过本接口上送至支付宝发起支付。'
                },
                wap_pay: {
                    method: 'GET',
                    name: 'alipay.trade.wap.pay',
                    summary: 'App支付接口',
                    desc: '通过此接口传入订单参数，同时唤起支付宝手机网页支付页面'
                },
                close: {
                    method: 'GET',
                    name: 'alipay.trade.close',
                    summary: '交易关闭接口',
                    desc: '通过此接口关闭此前已创建的交易，关闭后，用户将无法继续付款。仅能关闭创建后未支付的交易'
                },
                cancel: {
                    method: 'GET',
                    name: 'alipay.trade.cancel',
                    summary: '统一收单交易撤销接口',
                    desc: '支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，支付宝系统会将此订单关闭；如果用户支付成功，支付宝系统会将此订单资金退还给用户。'
                },
                query: {
                    method: 'GET',
                    name: 'alipay.trade.query',
                    summary: '交易状态查询接口',
                    desc: '通过此接口查询某笔交易的状态，交易状态：交易创建，等待买家付款；未付款交易超时关闭，或支付完成后全额退款；交易支付成功；交易结束，不可退款'
                },
            },
            refund: {
                refund: {
                    method: 'GET',
                    name: 'alipay.trade.refund',
                    summary: '交易退款接口',
                    desc: '通过此接口对单笔交易完成退款操作'
                },
                query: {
                    method: 'GET',
                    name: 'alipay.trade.fastpay.refund.query',
                    summary: '退款查询接口',
                    desc: '查询退款订单的状态'
                }
            },
            bill: {
                query: {
                    method: 'GET',
                    name: 'alipay.data.dataservice.bill.downloadurl.query',
                    summary: '账单查询接口',
                    desc: '调用此接口获取账单的下载链接'
                }
            }
        }
    };
    
    constructor() {
        super();

        this.__method = '';
        this.__form = {
            format: 'JSON',
            charset: 'UTF-8',
            sign_type: 'RSA2',
            version: '1.0',
            method: null,
            biz_content: null,
        };
    }

    setBizContent(obj){
        this.__form.biz_content = JSON.stringify(obj);
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
        return this;
    }
}


//手机网站支付接口
class WapPayRequest extends TradeRequest {
    
    constructor(){
        super();
        
        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.payment.wap_pay.method;
        this.__form.method = interfaces.payment.wap_pay.name;
    }

    setReturnUrl(url){
        this.__form.return_url = url;
    }

    setNotifyUrl(url){
        this.__form.notify_url = url;
    }
}

exports.WapPayRequest = WapPayRequest;


//交易关闭接口
class PayCloseRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.payment.close.method;
        this.__form.method = interfaces.payment.close.name;
    }
    
    setNotifyUrl(url){
        this.__form.notify_url = url;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.PayCloseRequest = PayCloseRequest;




//交易查询接口
class PayQueryRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.payment.query.method;
        this.__form.method = interfaces.payment.query.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.PayQueryRequest = PayQueryRequest;




//交易退款接口
class PayRefundRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.refund.refund.method;
        this.__form.method = interfaces.refund.refund.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.PayRefundRequest = PayRefundRequest;




//交易退款查询接口
class RefundQueryRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.refund.query.method;
        this.__form.method = interfaces.refund.query.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.RefundQueryRequest = RefundQueryRequest;



//查询账单下载地址接口
class BillQueryRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        
        this.__method = interfaces.bill.query.method;
        this.__form.method = interfaces.bill.query.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.BillQueryRequest = BillQueryRequest;


// 发起支付
class CreatePay extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        this.__method = interfaces.payment.pay.method;
        this.__form.method = interfaces.payment.pay.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.CreatePay = CreatePay;


//撤销支付
class PayCancelRequest extends TradeRequest {
    constructor(){
        super();

        let interfaces = TradeRequest.interfaces();
        this.__method = interfaces.payment.cancel.method;
        this.__form.method = interfaces.payment.cancel.name;
    }

    setAppAuthToken(token){
        this.__form.app_auth_token = token;
    }
}

exports.PayCancelRequest = PayCancelRequest;
