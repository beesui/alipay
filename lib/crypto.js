/**
 * @author synder on 2016/12/23
 * @copyright
 * @desc
 */

const crypto = require('crypto');

exports.rsaSign = function (privateKey, string) {
    let sign = crypto.createSign('RSA-SHA256');
    sign.write(string);
    sign.end();
    return sign.sign(privateKey, 'base64');
};

exports.rsaVerify = function (publicKey, signature, string) {
    let verify = crypto.createVerify('RSA-SHA256');
    verify.write(string);
    verify.end();
    return verify.verify(publicKey, signature, 'base64');
};