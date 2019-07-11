"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountType_1 = require("../types/accountType");
class Account {
    constructor(name, startingBalance, accType) {
        this.balance = startingBalance;
        this.ownerName = name;
        this.acctType = accType;
    }
    Withdraw(amount, account) {
        if (amount <= 0 || amount >= account.balance) {
            throw new Error(`There was error processing your withdrawal`);
        }
        const hasLimit = account.acctType.type === accountType_1.AccountTypeEnum.Checking && account.acctType.checkingType === accountType_1.CheckingTypeEnum.Individual ? true : false;
        if (hasLimit && amount > 1000) {
            throw new Error(`The amount ${amount} exceeds your account withdrawal limit.`);
        }
        return this.balance -= amount;
    }
    Deposit(amount, account) {
        if (amount <= 0) {
            throw new Error(`There was error processing your deposit`);
        }
        return this.balance += amount;
    }
}
exports.default = Account;
