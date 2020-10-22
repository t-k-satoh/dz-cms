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
        await auth0.handleCallback(req, res, {
            redirectTo: '/',
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
};

export default callBack;
