import { useState } from "react";
import { PropTypes } from 'prop-types'
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0); // Destructuring

    function incrementCounterParentFunction(by) {
        setCount(count + by);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} />
            <CounterButton by={2} />
            <CounterButton by={3} />
        </>
    );
}

function CounterButton({ by }) {
    // const state = useState(0);
    const [count, setCount] = useState(0); // Destructuring
    // console.log(by);
    
    function incrementCounterFunction() {
        setCount(count + by);
        console.log(count);

        console.log("Increment Button Clicked !");
    }

    function deCrementCounterFunction() {
        setCount(count - by);
        console.log(count);

        console.log("Decrement Button Clicked !");
    }

    return (
        <div className="counter">
            
            <div>
                <button
                    className="counterButton"
                    onClick={incrementCounterFunction}
                >+ {by}</button>

                <button
                    className="counterButton"
                    onClick={deCrementCounterFunction}
                >- {by}</button>
            </div>
        </div>
    )
}

// To Type the "by" Property of the Counter Component
CounterButton.propTypes = {
    by: PropTypes.number
}

// To Set Default Value to the "by" Property of the Counter Component
CounterButton.defaultProps = {
    by: 1
}