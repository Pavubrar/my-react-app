import React from 'react';
import './App.css';
import logoIcon from './icons/cog.svg'
import ticTacToeIcon from './icons/tic-tac-toe.svg'
import hooksIcon from './icons/meat-hook.svg'
import coinsIcon from './icons/money-stack.svg'
import cityIcon from './icons/modern-city.svg'
import themeIcon from './icons/theam.svg'
import stackIcon from './icons/stack.svg'
import Game from './components/tictactoe/Game';
import Starter from './components/starter/Starter';
import AccountApp from './components/accounts/AccountApp';
import Cities from './components/cities/CitiesApp';
import Hooks from './components/linkedList/LinkListComp'; 
import Stack from './components/stack-queue/lifo-fifoApp';
import {ThemeContextProvider} from './components/themeContext/Context';
import Theme from './components/themeContext/themeToggle'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: Starter
    }
  }
  selectedItem = (event) => {
    this.setState({
      selected: event.target.name
    });
  }
  navIconMapper = () => {
    const icons = [logoIcon, ticTacToeIcon, coinsIcon, cityIcon, hooksIcon, themeIcon, stackIcon];
    return icons.map((icon, id) =>
      <img key={id} name={icon} src={icon} className={"icon-img"} alt={icon.id} onClick={this.selectedItem} />);
  }
  showPage = () => {
    if (this.state.selected === logoIcon) {
      return <Starter />;
    } if (this.state.selected === ticTacToeIcon) {
      return <Game />;
    } if(this.state.selected === coinsIcon){
     return <AccountApp />;
       }
       if(this.state.selected === cityIcon){
     return < Cities />;
      }
      if(this.state.selected === hooksIcon){
      return < Hooks />;
      }
      if(this.state.selected === themeIcon){
        return < Theme />;
        }
        if(this.state.selected === stackIcon){
          return < Stack />;
          }
  }

  render() {

    return (
      <div className="App">
      <ThemeContextProvider>

        <nav className="topnav">
          {this.navIconMapper()}
        </nav>
        {this.showPage()}
        
      </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
