import './course-component-style.css'
import {FC} from "react";
import {ICourse} from "../../models/ICourse.ts";

type MyPropsType = {
    course: ICourse
}

export const CourseComponent: FC<MyPropsType> = ({course}) => {
    return (
        <div className='border-y-4 border-purple-500'>
            <h3>{course.title}. {course.monthDuration} months. {course.hourDuration} hours.</h3>
            <ul className='border-2'>Modules: {course.modules.map((value, index) => {
                return <li>{index+1}. {value}</li>
            })}</ul>
            <p>Price: {course.price}. Rating: {course.rating}. AvgResult: {course.avgResult}.</p>
        </div>
    );
};