import LeftBranchA from "./LeftBranchA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {

    const memox = useMemo(() => { // WE USE MEMO TO PREVENT RERENDER OF PERFORMANCE-HEAVY LOGIC WHEN
        for (let i = 1000; i <= 1000; i++) { // OUR CONTEXT TRANSFERS DATA BETWEEN COMP-S
            console.log(i);
        }
        return null;
    }, []);

    return (
        <div>
            Left branch
            <hr/>
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;