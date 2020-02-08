import React from 'react';

class AccountCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: this.props.account,
            updateBalanceInput: ""
        }
    }

    handleInputChange = event => {
        this.setState({
            updateBalanceInput: event.target.value
        });
    }
    handleDeposit = () => {
        this.state.account.deposit(this.state.updateBalanceInput);
        this.setState({
            updateBalanceInput: ""
        });
        this.props.calcReport();
    }
    handleWithdraw = () => {
        this.state.account.withdraw(this.state.updateBalanceInput);
        this.setState({
            updateBalanceInput: ""
        });
        this.props.calcReport();
    }
    handleDelete = event => {
        this.props.removeAccount(this.state.account.accountType)
    }
    render() {
        return (
            <div className="card" id="idPrimaryCard">
                <h3>{this.state.account.accountType} Account</h3> <br />
                <label>Amount:
            <span className="input-symbol-dollar"><input className="amount-input-dollar"
                        type="number"
                        value={this.state.updateBalanceInput}
                        onChange={this.handleInputChange}
                        min="0"
                        step="0.01" />
                    </span>
                    <span> Balance: $</span>
                    <span id="idBalance">{this.state.account.currentBalance}</span>
                </label>
                <input type="button" value="Deposit" onClick={this.handleDeposit} />
                <input type="button" value="Withdraw" onClick={this.handleWithdraw} />
                <input type="button" value="x" className="delete-button" onClick={this.handleDelete} />

            </div>
        );
    }
}
export default AccountCard;