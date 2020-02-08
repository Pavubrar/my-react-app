import React, { useState, useContext } from 'react';
import { Stack, Queue } from './lifo-fifo'
import './lifo-fifo.css';
import StackList from './stackList'
import QueueList from './queueList'
import {ThemeContext} from '../themeContext/Context';

const lifo = new Stack();
const fifo = new Queue();
// const initialList = ["Grapes-🍇", "Lemon-🍈", "Melon-🍉", "Orange-🍊", "Banana🍌", "Pine-Apple🍍", "Apple-🍎", "Peach-🍑", "Cherries-🍒", "Pear-🍐", "Strawberry-🍓", "Rose-🌹"]
const initialList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const LifoFifoApp = () => {
    const [count, setCount] = useState(0)
    const {isThemeMode, light, dark} = useContext(ThemeContext);
    const theme = isThemeMode? light : dark;
    const handleAdd = () => {
        lifo.push(initialList[count]);
        console.log(lifo);
        fifo.enqueue(initialList[count]);
        console.log(fifo);
        //  setQueue(fifo.top);
        setCount(count + 1)
    }
    const handleRemove = () => {
        lifo.pop();

        fifo.dequeue();
        console.log(fifo);
        setCount(count - 1);
    }
    return (
        <div style={{color: theme.syntax, backgroundColor: theme.bg}}>
            <div className="butttons-ui">
                {/* <input className="input" name=" amount" value={amount} onChange ={event => setAmount(event.target.value)}/> */}
                <button onClick={handleAdd}>Add Item</button>
                <button onClick={handleRemove}>Remove Item</button>
            </div>
            <div className="lists">
                <h2>Stack</h2>
                <h2>Queue</h2>
                <StackList list={lifo} />
                <QueueList list={fifo} />
            </div>
        </div>
    )
}
export default LifoFifoApp;