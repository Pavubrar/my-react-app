import React from "react";
import AccountCard from "./AccountCard";
import { AccountController } from "./Account"
import './AccountApp.css';
import AccountForm from './AccountForm';
import {ThemeContext} from '../themeContext/Context'

class AccountApp extends React.Component {
    static contextType = ThemeContext;
    constructor() {
        super();
        this.state = {
            totalBalance: "",
            mostValuable: "",
            leastValuable: "",
            message: ""
        }
        this.accountController = new AccountController();
    }
    addAccount = (inputs) => {
        const { nameInput, startingBalanceInput } = inputs;
        let errorMessage;
        if (!nameInput) {
            errorMessage = "Please enter an account name.";
        } else {
            errorMessage = this.accountController.createAccount(nameInput, startingBalanceInput)
        }
        this.setState({
            message: errorMessage
        });
        this.calcReport();
    }
    removeAccount = (accontName) => {
        this.accountController.removeAccount(accontName);
        this.calcReport();
    }
    calcReport = () => {
        this.setState({
            totalBalance: ""
        });
        if (this.accountController.accountArray.length > 1) {
            document.getElementById("idReport").classList.remove("hidden");
            const totalBalanceUpdate = this.accountController.totalAccounts();
            const mostValuableUpdate = this.accountController.mostValuableAccount().accountType;
            const leastValuableUpdate = this.accountController.leastValuableAccount().accountType;
            this.setState({
                totalBalance: totalBalanceUpdate,
                mostValuable: mostValuableUpdate,
                leastValuable: leastValuableUpdate
            });
        } else {
            document.getElementById("idReport").classList.add("hidden");
        }
    }
    renderCards = () => {
        return this.accountController.accountArray.map(account => {
            return <AccountCard
                key={account.accountType}
                account={account}
                calcReport={this.calcReport}
                removeAccount={this.removeAccount} />
        });
    }
    render() {
        const {isThemeMode, light, dark} = this.context;
        const theme = isThemeMode ? light : dark;
        return (
            <div id="idGridContainer" style ={{background: theme.ui, color: theme.syntax}}>
                <div id="idSummaryPanel">
                    <h2 className="subheading">Account Summary</h2>

                    <AccountForm onSubmit={this.addAccount} message={this.state.message} />

                    <div id="idReport" className="hidden">
                        <h3>Report</h3>
                        <span>Total Balance: </span><span id="idTotal">{this.state.totalBalance}</span><br />
                        <span>Most Valuable: </span><span id="idMost">{this.state.mostValuable}</span><br />
                        <span>Least Valuable: </span><span id="idLeast">{this.state.leastValuable}</span><br />
                    </div>
                </div>

                <div id="idCardPanel">
                    <h2>Accounts</h2>
                    {this.renderCards()}

                </div>
            </div>
        );
    }
}

export default AccountApp;

