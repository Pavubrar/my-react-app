import { Account, AccountController } from './account.js'

describe('Account testing', () => {
    const checkingAccount = new Account("checking Account", 100);
    test('deposit(value) add value to currentBalance', () => {
        
        checkingAccount.deposit(50);
        expect(checkingAccount.currentBlance).toEqual(150);
    });
    test('check the balance after withdraw', () => {
        checkingAccount.withdraw(10);
        expect(checkingAccount.currentBlance).toEqual(140);

    });
    test('check the balance ', () => {
        checkingAccount.balance();
        expect(checkingAccount.currentBlance).toEqual(140);
    });

});
describe('Account Testing', () => {
    const myAccount = new AccountController("checking Account", 100);
    test("check account controller", () => {
        myAccount.createAccount("Savings", 500);
        expect(myAccount.accountArray.length).toEqual(1);
        myAccount.createAccount("ESP", 200);
        expect(myAccount.accountArray.length).toEqual(2);
        myAccount.createAccount("RSP", 200);
        expect(myAccount.accountArray[2].accountType).toEqual("RSP");
        expect(myAccount.accountArray.length).toEqual(3);
        myAccount.createAccount("checking", 1000);
        expect(myAccount.accountArray.length).toEqual(4);
        myAccount.createAccount("Study plan", 2000);
        expect(myAccount.accountArray.length).toEqual(5);
        console.log(myAccount);
        expect(myAccount.totalAccounts()).toEqual(3900);
        expect(myAccount.mostValuableAccount()).toEqual( {"currentBlance": 2000, "accountType": "Study plan"});
        expect(myAccount.leastValuableAccount()).toEqual({"currentBlance": 200, "accountType": "ESP"});
        expect(myAccount.getAccounts("RSP")).toEqual({"currentBlance": 200, "accountType": "RSP"});
    expect(myAccount.getAccounts("Non-existent Account")).toEqual(undefined);
    expect(myAccount.getAccounts("")).toEqual(undefined);
    const accountCount = (myAccount.getAccounts().length)
    myAccount.removeAccount("Savings");
    expect(myAccount.getAccounts().length).toEqual(accountCount - 1);
    });
});