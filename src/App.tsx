import './App.css';
import {useState} from "react";
// we need useState hook to change values or obj that will change not instantly on page render but later in time
// with some reloads or sync events

const App = () => {
    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState<number>(0); // normally we use const with useState because inside
    console.log('App_called'); // useState we operate with referenced data types but here for example we use primitive
    return (                        // and we can`t use const here
    <>
        <div>
            <h2>{counter}</h2>
            <button className='border-2' onClick={() => {
                setCounter(++counter);
            }}> increment
            </button>

            <button className='border-2' onClick={() => {
                setCounter(prevState => { // we can use callback func inside set call to check prevState or add more logic
                    console.log('prevState', prevState);
                    return --prevState;
                });
            }}> decrement
            </button>
        </div>
    </>
  );
};

export default App;