import {expect} from 'chai';
import BankAccount from '../core/BankAccount';
import Bank from '../core/Bank';
import Individual from '../core/accountTypes/checkingAccountTypes/Individual';
import Savings from '../core/accountTypes/baseAccountTypes/Savings';

// Create Bank
const bank = new Bank('USBank');

// Create Individual Checking Account w/ Start Balance
// Add it to list of Bank Accounts
const checkingStartBalance = 10000;
const newIndividual = new Individual('Bobs Invidiual Check');
const individualBankAcct = new BankAccount(newIndividual, checkingStartBalance, newIndividual.withDrawLimit);
bank.AddBankAccount(individualBankAcct);


// Create Savings Account w/ Start Balance
// Add to list of Bank Accounts
const savingsStartBalance = 5000;
const newSavings = new Savings('Bobs Savings Acct');
const savingsBankAcct = new BankAccount(newSavings, savingsStartBalance)
bank.AddBankAccount(savingsBankAcct)

let currentCheckingBalance;
describe('Withdraw Test', () => {
    it('should return the correct balance', () => {
        const withDrawAmount = 50;
        currentCheckingBalance = individualBankAcct.Withdraw(withDrawAmount);
    
        expect(currentCheckingBalance).to.equal(checkingStartBalance - withDrawAmount);
    })
})

describe('Deposit Test', () => {
    it('should return correct balance after deposit', () => {
        const deposit = 3000;
        const beforeDepostiBalance = currentCheckingBalance;
        currentCheckingBalance = individualBankAcct.Deposit(deposit);
        
        expect(currentCheckingBalance).to.equal(beforeDepostiBalance + deposit);
    })
})

describe('Test withdraw limits', () => {
    it('should fail due to exceeding invidual account limit', () => {
        const withDrawAmount = 1002;

        expect(() => individualBankAcct.Withdraw(withDrawAmount)).to.throw('Amount exceeds your withdraw limit');
    })
})

describe('Test Transfer', () => {
    it('should transfer funds from checking to savings', () => {
        const transferAmt = 800;
        const initialCheckBalance = currentCheckingBalance

        currentCheckingBalance = individualBankAcct.Transfer(transferAmt, savingsBankAcct);
        const currentSavings = savingsBankAcct.GetBalance();

        expect(currentCheckingBalance).to.equal(initialCheckBalance - transferAmt);
        expect(currentSavings).to.equal(savingsStartBalance + transferAmt)
    })
})

describe('Test Bank Accounts List', () => {
    it('should return 2 bank accounts', () => {
        const accounts = bank.GetAccounts();
        expect(accounts.length).to.equal(2);
    })
})