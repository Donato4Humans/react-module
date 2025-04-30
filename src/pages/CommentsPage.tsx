import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            COMMENTS-PAGE-CONTENT
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;