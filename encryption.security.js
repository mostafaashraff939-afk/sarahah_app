import crypto from 'node:crypto'
import envConfig from '../../confige/env.config.js'

const ENCRYPTION_KEY = Buffer.from(envConfig.encryption.key ,'hex')
const IV_LENGTH = envConfig.encryption.iv
export const encrypt = (plainText) => {
    // Generate random iv bytes
    const iv = crypto.randomBytes(IV_LENGTH)
    console.log({ iv });

    const cipherObject = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv)

    let cipherText = cipherObject.update(plainText, 'utf-8', 'hex')

    cipherText += cipherObject.final('hex')

    return `${iv.toString('hex')}:${cipherText}`
}

 




