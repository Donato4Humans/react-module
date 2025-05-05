import {FC, memo} from "react";

// MEMO PREVENTS RERENDER OF COMPONENT THAT WAS NOT MODIFIED AFTER LAST RENDER

// WE MUST USE IT ONLY WITH COMPLEX AND COMPUTE-HEAVY COMPONENTS WITH MANY LOGIC & PARTS

const UserComponent: FC<{foo: () => void, arr: number[]}> = memo( () => {
    // NOW AFTER WE ADD FUNC INTO PROPS, MEMO WILL NOT WORK BECAUSE EVERY RERENDER OF PARENT COMPONENT
    // WILL TRIGGER NEW FUNC CREATION AND NEW REFERENCE WILL GO INSIDE COMP. PROPS

    console.log('user');
    return (
        <div>
            USER
        </div>
    );
});

export default UserComponent;