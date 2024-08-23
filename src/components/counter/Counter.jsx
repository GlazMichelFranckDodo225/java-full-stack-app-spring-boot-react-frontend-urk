import { useState } from "react";
import "./Counter.css";
import CounterButton from './CounterButton';

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