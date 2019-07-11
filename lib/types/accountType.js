"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum[AccountTypeEnum["Savings"] = 0] = "Savings";
    AccountTypeEnum[AccountTypeEnum["Checking"] = 1] = "Checking";
})(AccountTypeEnum = exports.AccountTypeEnum || (exports.AccountTypeEnum = {}));
var CheckingTypeEnum;
(function (CheckingTypeEnum) {
    CheckingTypeEnum[CheckingTypeEnum["Individual"] = 0] = "Individual";
    CheckingTypeEnum[CheckingTypeEnum["MoneyMarket"] = 1] = "MoneyMarket";
})(CheckingTypeEnum = exports.CheckingTypeEnum || (exports.CheckingTypeEnum = {}));
class AccountType {
}
exports.AccountType = AccountType;
