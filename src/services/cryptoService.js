const crypto = require('crypto');

/**

DC Bank Protocol Signature Service

Generates and validates MD5 signatures for bank requests. */ class CryptoService { constructor(secretKey) { this.secretKey = secretKey; }

generateSignature(params) { // Sort keys alphabetically as per standard bank protocols const sortedString = Object.keys(params) .sort() .map(key => ${key}=${params[key]}) .join('&');

return crypto
  .createHash('md5')
  .update(sortedString + this.secretKey)
  .digest('hex');


}

verifySignature(params, receivedSignature) { const computed = this.generateSignature(params); return computed === receivedSignature; } }

module.exports = CryptoService;