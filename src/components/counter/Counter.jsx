import { useState } from "react";
import { PropTypes } from 'prop-types'
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = useState(0); // Destructuring

    function incrementCounterParentFunction(by) {
        setCount(count + by);
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton
                by={1}
                incrementMethod={incrementCounterParentFunction}
                deCrementMethod={decrementCounterParentFunction}
            />
            <CounterButton
                by={2}
                incrementMethod={incrementCounterParentFunction}
                deCrementMethod={decrementCounterParentFunction}
            />
            <CounterButton
                by={5}
                incrementMethod={incrementCounterParentFunction}
                deCrementMethod={decrementCounterParentFunction}
            />
        </>
    );
}

function CounterButton({ by, incrementMethod, deCrementMethod }) {
    // const state = useState(0);
    const [count, setCount] = useState(0); // Destructuring
    // console.log(by);

    function incrementCounterFunction() {
        setCount(count + by);
        incrementMethod(by);
    }

    function deCrementCounterFunction() {
        setCount(count - by);
        deCrementMethod(by);
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