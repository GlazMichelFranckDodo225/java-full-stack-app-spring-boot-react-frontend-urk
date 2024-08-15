import { useState } from "react";
import "./Counter.css";

export default function Counter({by}) {
    // const state = useState(0);
    const [count, setCount] = useState(0); // Destructuring
    // console.log(by);
    

    /* const buttonStyle = {
        fontSize: "30px",
        backgroundColor: "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px"
    } */

    function incrementCounterFunction() {
        /* console.log(state);
        console.log(state[0]);
        console.log(state[1]);
        
        state[1](state[0] + 1); */

        // setCount(count + 1);
        setCount(count + by);
        console.log(count);
        
        console.log("Increment Button Clicked !");
    }
    
    function deCrementCounterFunction() {
        /* console.log(state);
        console.log(state[0]);
        console.log(state[1]);
        
        state[1](state[0] + 1); */

        // setCount(count - 1);
        setCount(count - by);
        console.log(count);
        
        console.log("Decrement Button Clicked !");
    }

    return (
        <div className="counter">
            <span className="count">{count}</span>
            <div>
                <button 
                    className="counterButton" 
                    onClick={incrementCounterFunction}
                    /* style={{fontSize:"30px"}} */
                    /* style={buttonStyle} */
                >+ {by}</button>
                
                <button 
                    className="counterButton" 
                    onClick={deCrementCounterFunction}
                    /* style={{fontSize:"30px"}} */
                    /* style={buttonStyle} */
                >- {by}</button>
            </div>
        </div>
    )
}