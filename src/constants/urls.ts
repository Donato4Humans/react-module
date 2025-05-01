const baseURL = 'https://dummyjson.com';

const limitAPI = 30;

export const urls = {
    allUsers: baseURL + '/users',
    usersByPage: (page: string) => {
        const skip = (limitAPI * (+page)) - limitAPI;
        return baseURL + '/users?skip=' + skip;
    }
}