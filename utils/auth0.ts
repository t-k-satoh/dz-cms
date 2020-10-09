import { initAuth0 } from '@auth0/nextjs-auth0';
import dotenv from 'dotenv';

dotenv.config();

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    redirectUri: process.env.REDIRECT_URI,
    postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
    audience: process.env.AUTH0_AUDIENCE,
    session: {
        cookieSecret: process.env.COOKIE_SECRET,
        cookieLifetime: 60 * 60 * 8,
        cookieSameSite: 'lax',
        storeIdToken: true,
        storeAccessToken: true,
        storeRefreshToken: true,
    },
    oidcClient: {
        httpTimeout: 2500,
        clockTolerance: 10000,
    },
});
