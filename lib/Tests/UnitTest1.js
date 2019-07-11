"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const Account_1 = require("../core/Account");
const accountType_1 = require("../types/accountType");
function Test1() {
    const aType = {
        checkingType: accountType_1.CheckingTypeEnum.Individual,
        type: accountType_1.AccountTypeEnum.Checking
    };
    let startBalance = 2000;
    const newAccount = new Account_1.default('Frank', startBalance, aType);
    const balanceAfterWithdraw = newAccount.Withdraw(24, newAccount);
    startBalance = startBalance - 24;
    assert.equal(balanceAfterWithdraw, startBalance, "Testing Withdraw function");
    console.log('Ran tests!');
    // assert.ok(newAccount.balance === 2000 - 24, "This should pass");
}
exports.Test1 = Test1;
;
//export function Test2() {
//    assert.ok(1 === 1, "This shouldn't fail");
//    assert.ok(false, "This should fail");
//};
