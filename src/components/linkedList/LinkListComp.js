import React, { useState, Fragment, useEffect, useContext } from "react";
import "./LinkedList.css";

import {LinkedList}  from "./LinkedList";
import {ThemeContext} from '../themeContext/Context';


const newList = new LinkedList();

const LinkedListApp = () => {
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    const [current, setCurrent] = useState("");
    const [total, setTotal] = useState("");
    const [focus, setFocus] = useState("subject");
    const {isThemeMode, light, dark} = useContext(ThemeContext);
    const theme = isThemeMode? light : dark;
    useEffect(() => {
        document.getElementById(focus).focus();
    });

    function pressEnter(e) {
        if (e.key === `Enter`) {
            handleInsert();
            console.log("enter pressed");
        }
    }

    function onSubjectInputChange(e) {
        setSubject(e.target.value);
        setFocus("subject");
    }

    function onAmountInputChange(e) {
        setAmount(e.target.value);
        setFocus("amount");
    }

    const handleInsert = () => {
        newList.add(subject, amount);
        setCurrent(newList.current);
        setTotal(newList.total());
        setSubject("");
        setAmount("");
        setFocus("subject");
        console.log("insert clicked");
    };

    const handleFirst = () => {
        newList.first();
        setCurrent(newList.current);
        console.log("first clicked");
    };

    const handleLast = () => {
        newList.last();
        setCurrent(newList.current);
        console.log("last clicked");
    };

    const handleNext = () => {
        newList.next();
        setCurrent(newList.current);
        console.log("next clicked");
    };

    const handlePrevious = () => {
        newList.prev();
        setCurrent(newList.current);
        console.log("previous clicked");
    };

    const handleDelete = () => {
        newList.delete();
        setCurrent(newList.current);
        setTotal(newList.total());
        console.log("delete clicked");
    };
    const renderNodes = () => {
        const listDisplay = [];
        let newNode = newList.head;

        while (newList.head && newNode) {
            if (current === newNode) {
                listDisplay.push(
                    <div
                        key={newNode.subject + newNode.amount}
                        id="node-list-current"
                        style={{ color: "green", fontWeight: "bold" }}
                    >
                     <li>

                     {newNode.subject}: {newNode.amount}
                        {" <-"}
                     </li>   
                    </div>
                );
                newNode = newNode.nextNode;
            } 
            //else {
            //     // listDisplay.push(
            //     //     <div
            //     //         key={newNode.subject + newNode.amount}
            //     //         id="node-list"
            //     //         style={{ color: "#808080" }}
            //     //     >
            //     //         {newNode.subject}: {newNode.amount}{" "}
            //     //     </div>
            //     // );
            //     // newNode = newNode.PrevNode;
            // }
        }
        return listDisplay;
    };
    return (
        <Fragment >
            <div id="container" style={{color: theme.syntax, backgroundColor: theme.bg}}>
                <div id="left">
                    <h2>
                        <strong>Linked Lists Display</strong>
                    </h2>
                    <div id="leftChild">
                        <br />
                        <label className="left-input-label">Subject:</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            className="left-input"
                            placeholder="enter subject"
                            value={subject}
                            onChange={onSubjectInputChange}
                            onKeyPress={pressEnter}
                        />
                        <br />
                        <label className="left-input-label">Amount:</label>
                        <input
                            id="amount"
                            name="amount"
                            type="number"
                            className="left-input"
                            placeholder="enter amount"
                            min="0"
                            step="0.01"
                            value={amount}
                            onChange={onAmountInputChange}
                            onKeyPress={pressEnter}
                        />
                        <br />
                        <br />
                        <button onClick={handleFirst} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{"|<"}</b>
                        </button>
                        <button onClick={handlePrevious} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{"<<"}</b>
                        </button>
                        <button onClick={handleInsert} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{"[++]"}</b>
                        </button>
                        <button onClick={handleDelete} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{"[- -]"}</b>
                        </button>
                        <button onClick={handleNext} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{">>"}</b>
                        </button>
                        <button onClick={handleLast} id="reset" variant="primary">
                            <b style={{ color: "red" }}>{">|"}</b>
                        </button>
                        <div
                            id="resultsLinkedList"
                            //className={ "hidden"}
                        >
                            <span
                                style={{
                                    color: "blue",
                                    fontWeight: "bold"
                                }}
                            >
                                Nodes Listed Here:
              </span>
                            <p
                                style={{
                                    color: "black"
                                }}
                            >
                                {current
                                    ? `current: ${current.showDetails()}`
                                    : "nothing selected"}
                            </p>
                            <div id="resultsRender">
                                <ol>
                                {renderNodes()}
                                </ol>
                                    
                                <span style={{ color: "blue" }}> Total: {total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LinkedListApp;
