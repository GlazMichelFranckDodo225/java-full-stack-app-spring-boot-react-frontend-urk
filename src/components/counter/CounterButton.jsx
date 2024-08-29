import { PropTypes } from 'prop-types';

export default function CounterButton({ by, incrementMethod, deCrementMethod }) {
    function incrementCounterFunction() {
        incrementMethod(by);
    }

    function deCrementCounterFunction() {
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