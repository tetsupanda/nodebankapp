"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(name) {
        this.AddAccount = (account) => {
            this.accounts.push(account);
        };
        this.bankName = name;
    }
}
exports.default = Bank;
