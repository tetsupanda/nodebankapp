import BankAccount from "./BankAccount";


export default class Bank {
    public bankName: string;
    private accountsList: BankAccount<any>[] = []

    
    constructor(name: string) {
        this.bankName = name;
    }

    public AddBankAccount(bankAcct: BankAccount<any>) {
        this.accountsList.push(bankAcct)
    }

    public GetAccounts() : BankAccount<any>[]{
        return this.accountsList
    }
}