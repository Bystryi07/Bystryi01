# \<назва проекту\>

## Installation

```bash
npm install \<назва проекту\>
```

## Usage

```javascript
const DataEncryption = require('<назва проекту>');

// Initialize with a secret key
const encryption = new DataEncryption('mySecretKey123');

// Encrypt data
const encryptedData = encryption.encrypt('sensitive information');
console.log('Encrypted:', encryptedData);

// Decrypt data
const decryptedData = encryption.decrypt(encryptedData);
console.log('Decrypted:', decryptedData);
```

## API

### `DataEncryption(secretKey)`

Creates a new instance of the DataEncryption class with the provided `secretKey`.

- `secretKey` (string): The secret key used for encryption and decryption.

### `encrypt(data)`

Encrypts the provided `data` using AES encryption with the initialized secret key.

- `data` (string): The data to encrypt.

Returns the encrypted data as a string.

### `decrypt(encryptedData)`

Decrypts the provided `encryptedData` using AES decryption with the initialized secret key.

- `encryptedData` (string): The encrypted data to decrypt.

Returns the decrypted data as a string.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
