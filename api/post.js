export default async function handler(req, res) {
    const accessToken = req.headers['x-threads-access-token'];
    const { content } = req.body;
    if (!accessToken || !content) {
        return res.status(400).send('Missing access token or content');
    }
    try {
        const threadsApiUrl = 'https://threads.com/api/post';
        const response = await fetch(threadsApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: content })
        });
        if (response.ok) {
            res.status(200).json({ success: true, message: 'Postingan berhasil dikirim.' });
        } else {
            const error = await response.json();
            res.status(response.status).json({ success: false, error: error.message });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}
