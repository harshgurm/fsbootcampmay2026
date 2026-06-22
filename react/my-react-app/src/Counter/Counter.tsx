import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function calculateCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={calculateCount}>
                Click me
            </button>
        </div>
    );
}

export default Counter;

