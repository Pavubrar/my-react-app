
class Account {
    constructor(accountType, initialBalance) {
        this.accountType = accountType;
        this.currentBlance = initialBalance;
    }
    deposit(value) {
        this.currentBlance += Math.round(Number(value)*100)/100;
    }
    withdraw(value) {
        this.currentBlance -= Math.round(Number(value)*100)/100;
    }
    balance(value) {
        return Math.round(Number(value)*100)/100;
    }
}
class AccountController {
    constructor() {
        this.accountArray = [];
    }
    createAccount(accountType, initialBalance) {
        if (!this.getAccounts(accountType)) {
            this.accountArray.push(new Account(accountType,Math.round(Number(initialBalance)*100)/100));
           return "";
        } else {
            return `you already have an ${accountType}, please select different Account Type`
        }
    }
    getAccounts(accountType) {
        return this.accountArray.filter(account => account.accountType === accountType)[0];
    }
    removeAccount(accountType) {
        this.accountArray = this.accountArray.filter((account) => account.accountType !== accountType);
    }
    totalAccounts() {
        const total = this.accountArray.reduce((accumulator, account) => accumulator + account.currentBlance, 0);
        return total;
    }
    mostValuableAccount() {
        let highestBalance = this.accountArray[0].currentBlance;
        this.accountArray.forEach(function1);
        function function1(itm, index) {
            if (itm.currentBlance > highestBalance) {
                highestBalance = itm.currentBlance

            }
            return highestBalance
        }
        let highestAccount = this.accountArray.filter(itm => itm.currentBlance === highestBalance);
        return highestAccount[0];
        // return this.accountArray.sort((a,b) => b.currentBlance - a.currentBlance)[0];
    }
    leastValuableAccount() {
        let lowestBalance = this.accountArray[0].currentBlance;
        this.accountArray.forEach(function2);
        function function2(itm, index) {
            if (itm.currentBlance < lowestBalance) {
                lowestBalance = itm.currentBlance;
            }
            return lowestBalance;
        }
        let lowestAccount = this.accountArray.filter(itm => itm.currentBlance === lowestBalance);
        return lowestAccount[0];

        // return this.accountArray.sort((a,b) => a.currentBlance - b.currentBlance)[0];
    }
}

export { Account, AccountController };