import axios from 'axios';
import { serialize } from 'cookie';
import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../utils/auth0';

dotenv.config();

type OauthTokenResponse = {
    access_token: string;
    refresh_token: string;
    id_token: string;
    token_type: string;
    expires_in: number;
};

const callBack = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const { data } = await axios.post<OauthTokenResponse>(
            `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
            {
                client_id: process.env.APP_CLIENT_ID,
                client_secret: process.env.APP_CLIENT_SECRET,
                audience: process.env.APP_AUDIENCE,
                grant_type: process.env.APP_GRANT_TYPE,
            },
            {
                headers: { 'content-type': 'application/json' },
            },
        );

        const { access_token } = data;

        res.setHeader('Set-Cookie', serialize(process.env.COOKIE_KEY, access_token, { path: '/' }));

        await auth0.handleCallback(req, res, {
            redirectTo: '/',
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
};

export default callBack;
