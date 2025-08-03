import { URLSearchParams } from 'url';

const clientId = process.env.THREADS_CLIENT_ID;
const clientSecret = process.env.THREADS_CLIENT_SECRET;
const redirectUri = 'https://<nama-app-anda>.vercel.app/api/callback';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectUri,
            scope: 'threads_content_publish,threads_basic,threads_read_insights',
            response_type: 'code',
        });
        res.redirect(`https://threads.com/oauth/authorize?${params.toString()}`);
    } else if (req.method === 'POST') {
        const { code } = req.body;
        try {
            const tokenResponse = await fetch('https://threads.com/oauth/access_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: 'authorization_code',
                    redirect_uri: redirectUri,
                    code: code,
                }),
            });
            const tokenData = await tokenResponse.json();
            if (tokenData.access_token) {
                res.status(200).json({ accessToken: tokenData.access_token });
            } else {
                res.status(400).json({ error: 'Failed to get access token' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
