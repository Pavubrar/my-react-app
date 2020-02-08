import React from 'react';
const StackList =(props) => {
    const listDisplay =[];
    let node = props.list.first;
    let counter = 0;
    let border = { borderColor: "black", borderStyle: "solid"}
    while(props.list.first && node){
        console.log(counter)
        counter = counter + 1;
        listDisplay. push(
            <p style={counter === 1 ? border : null} key ={counter} className= "S-items">{node.data}</p>
        )
        console.log(node)
        node = node.next;
        console.log(node)
    }
    return(
        <div>
    {listDisplay}
        </div>
    )
}
export default StackList;