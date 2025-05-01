const baseUrlD = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsersD: baseUrlD + '/users',
    },
    carts: {
        cartsById: (userId: string) => {
            return baseUrlD + '/carts/user/' + userId;
        }
    },
}