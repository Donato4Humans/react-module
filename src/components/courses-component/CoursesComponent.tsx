import {courses} from "../../data/coursesList.ts";
import {ICourse} from "../../models/ICourse.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
            <div className='flex flex-col gap-3'>
                {
                    courses.map((course:ICourse, index) => {
                       return <CourseComponent key={index} course={course} />;
                    })
                }
            </div>
    );
};