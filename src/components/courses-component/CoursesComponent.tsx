import {coursesAndDurationArray} from "../../data/coursesList.ts";
import {ICourse} from "../../models/ICourse.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
            <ul>
                {
                    coursesAndDurationArray.map((course:ICourse, index) => {
                       return <CourseComponent key={index} course={course}/>;
                    })
                }
            </ul>
    );
};