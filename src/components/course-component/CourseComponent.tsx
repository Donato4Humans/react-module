import './course-component-style.css'
import {FC} from "react";
import {ICourse} from "../../models/ICourse.ts";

type MyPropsType = {
    course: ICourse;
}

export const CourseComponent: FC<MyPropsType> = ({course}) => {
    return (
        <li className='border-y-4 border-purple-500 mb-5'>
            {course.title} : {course.monthDuration} months.
        </li>
    );
};