import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA = () => {

    const {counterValue, increment} = useContext(MyContext); // HERE WE GET(CALL) VALUE OF COUNTER-VALUE THAT IS LOCATED AND UPDATED IN 0-LEVEL COMP(APP)
    // !!!!!! ALSO WE CAN LISTEN AND CALL MULTIPLE CONTEXTS IN CHILD COMP-S, FOR EXAMPLE:
    // const {counterValue, increment} = useContext(MyContext2);
    // const {counterValue, increment} = useContext(MyContext3); AND SO ON
    // BUT IT MUST BE WRAPPED WITH SUCH CONTEXT IN PARENT-LAYER

    return (
        <div>
            Left branch - A
            <button className='border-2' onClick={() => {
                increment(counterValue);
            }}>click to increment counter in LBA</button>
        </div>
    );
};

export default LeftBranchA;