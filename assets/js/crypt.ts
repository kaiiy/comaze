import CryptoJS from 'crypto-js'

export const hash256 = (text: string) => CryptoJS.enc.Base64url.stringify(CryptoJS.SHA256(text))