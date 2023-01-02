#!/usr/bin/env node
import clipboardy from 'clipboardy';
const generatePassword = (length) => {
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = '0123456789';
    const symbols = '!@#$%^&*_-+=';
    const chars = alpha + numbers + symbols;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};
const main = (args) => {
    const password = generatePassword(16);
    clipboardy.writeSync(password);
    console.log(password);
    console.log("Password was successfully copied to the clipboard.");
};
main(process.argv);
//# sourceMappingURL=index.js.map