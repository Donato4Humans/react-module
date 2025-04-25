import {FC} from "react";

type MyPropsType = {
    courseTitle: string;
}

const MyComponent: FC<MyPropsType> = ({courseTitle}) => {
    return (
        <p className='border-y-4 border-indigo-500 mb-5'>
            {courseTitle}
        </p>
    );
};

export default MyComponent;