const baseURL = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: baseURL + '/users',
        byId: (id:number) => {
            return baseURL + '/' + id;
        },
    },
    posts: {
        allPosts: baseURL + '/posts',
        byId: (id:number) => baseURL + '/' + id,
        userPostsById: (id:number) => baseURL + '/posts?userId=' + id
    },
}