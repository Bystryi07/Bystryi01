// Filename: data-encryption-library.js

const crypto = require('crypto');

class DataEncryption {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.algorithm = 'aes-256-cbc';
  }

  encrypt(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, Buffer.from(this.secretKey), iv);
    let encryptedData = cipher.update(data);
    encryptedData = Buffer.concat([encryptedData, cipher.final()]);
    return iv.toString('hex') + ':' + encryptedData.toString('hex');
  }

  decrypt(encryptedData) {
    const [ivHex, encryptedHex] = encryptedData.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encryptedDataBuffer = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.secretKey), iv);
    let decryptedData = decipher.update(encryptedDataBuffer);
    decryptedData = Buffer.concat([decryptedData, decipher.final()]);
    return decryptedData.toString();
  }
}

module.exports = DataEncryption;
