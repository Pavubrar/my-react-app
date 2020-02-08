import React, {createContext} from 'react';
const ThemeContext = createContext();
class ThemeContextProvider extends React.Component {
    state = {
            fontColor: "red",
            isThemeMode: true,
            light: {syntax: 'green', ui:'red', bg: 'red'},
            dark:{ syntax: '#ddd', ui: '#333', bg: '#555'}
        }
    
    toggleTheme = () => {
        this.setState({isThemeMode: !this.state.isThemeMode});
    }
    // changeFont = (event) => {
    //     this.setState({fontColor: event.target.value});
    // }
    render(){
        return (
            <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export{ThemeContextProvider, ThemeContext} ;