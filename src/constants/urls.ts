const baseUrlPH = 'https://jsonplaceholder.typicode.com';
const baseUrlD = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsersPH: baseUrlPH + '/users',
        allUsersD: baseUrlD + '/users?limit=0',
    },
    posts: {
        allPostsPH: baseUrlPH + '/posts',
        allPostsD: baseUrlD + '/posts?limit=0',
    },
    comments: {
        allCommentsPH: baseUrlPH + '/comments',
        allCommentsD: baseUrlD + '/comments?limit=0',
    }
}