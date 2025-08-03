export default async function handler(req, res) {
    const accessToken = req.headers['x-threads-access-token'];
    if (!accessToken) {
        return res.status(401).send('Unauthorized');
    }
    const dashboardData = {
        followers: Math.floor(Math.random() * 10000),
        likes: Math.floor(Math.random() * 50000),
        interactions: Math.floor(Math.random() * 75000),
        reach: Math.floor(Math.random() * 100000),
        engagement_rate: (Math.random() * 10).toFixed(2),
        chartData: [
            { date: '1 Jul', interactions: 1200 },
            { date: '2 Jul', interactions: 1500 },
            { date: '3 Jul', interactions: 1800 },
            { date: '4 Jul', interactions: 1300 },
            { date: '5 Jul', interactions: 2200 },
            { date: '6 Jul', interactions: 2500 },
            { date: '7 Jul', interactions: 1900 },
        ],
        posts: [
            { id: 1, text: 'Postingan hari ini membahas tentang...', likes: 250, comments: 15, views: 5000, timestamp: '2025-07-07T12:00:00Z' },
            { id: 2, text: 'Tips rahasia untuk meningkatkan produktivitas!', likes: 500, comments: 30, views: 10000, timestamp: '2025-07-06T12:00:00Z' },
            { id: 3, text: 'Produk baru kami telah dirilis!', likes: 120, comments: 8, views: 3500, timestamp: '2025-07-05T12:00:00Z' },
            { id: 4, text: 'Momen-momen di balik layar pembuatan konten.', likes: 300, comments: 20, views: 7000, timestamp: '2025-07-04T12:00:00Z' },
        ]
    };
    res.status(200).json(dashboardData);
}
