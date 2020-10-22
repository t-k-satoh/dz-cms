import Cookies from 'js-cookie';

export const credentials = {
    withCredentials: true,
    timeout: 500000,
    headers: {
        authorization: `Bearer ${Cookies.get('token')}`,
    },
};
