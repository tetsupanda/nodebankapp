
export default class BankAccount<T>  {
    private balance: number;
    private withDrawLimits?: number;
    private accountType: T;

    constructor(account: any, startMon: number, withdrawLimits?: number) {
        this.balance = startMon;
        this.accountType = account;
        this.withDrawLimits = withdrawLimits ? withdrawLimits : 0;
    }

    public Withdraw(amount: number): number {
        if (amount <= 0) {
            throw new Error(`There was error processing your withdrawal`);
        }
        if (this.withDrawLimits && amount > this.withDrawLimits) {
            throw new Error(`Amount exceeds your withdrawal limit`)
        }
        return this.balance -= amount;
    }

    public Deposit(amount: number): number {
        if (amount <= 0) {
            throw new Error(`There was error processing your deposit`);
        }
        return this.balance += amount;
    }

    public Transfer(transferAmount: number, destinationAccount: BankAccount<any>): number {
        if(this.balance >= transferAmount){
            this.balance -= transferAmount;
            destinationAccount.balance += transferAmount;
        }
        return this.balance;
    }

    public GetBalance():number {
        return this.balance;
    }
}