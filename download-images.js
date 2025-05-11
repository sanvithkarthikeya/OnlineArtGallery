const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    // Artwork images
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'artwork1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200',
        filename: 'artwork2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200',
        filename: 'artwork3.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200',
        filename: 'artwork4.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200',
        filename: 'artwork5.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200',
        filename: 'artwork6.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200',
        filename: 'artwork7.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'artwork8.jpg'
    },
    // Event images
    {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200',
        filename: 'event1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200',
        filename: 'event2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200',
        filename: 'event3.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200',
        filename: 'event4.jpg'
    },
    // Additional artwork images
    {
        url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200',
        filename: 'artwork9.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200',
        filename: 'artwork10.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'artwork11.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200',
        filename: 'artwork12.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200',
        filename: 'artwork13.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200',
        filename: 'artwork14.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200',
        filename: 'artwork15.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200',
        filename: 'artwork16.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200',
        filename: 'artwork17.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'artwork18.jpg'
    },
    // Payment method icons
    {
        url: 'https://cdn-icons-png.flaticon.com/512/179/179457.png',
        filename: 'credit-card.png'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/174/174861.png',
        filename: 'paypal.png'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/5968/5968290.png',
        filename: 'crypto.png'
    },
    // Exhibition images
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'exhibition1.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200',
        filename: 'exhibition2.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200',
        filename: 'exhibition3.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200',
        filename: 'exhibition4.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200',
        filename: 'exhibition5.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200',
        filename: 'exhibition6.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200',
        filename: 'exhibition7.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200',
        filename: 'exhibition8.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200',
        filename: 'exhibition9.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1200',
        filename: 'exhibition10.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200',
        filename: 'exhibition11.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200',
        filename: 'exhibition12.jpg'
    }
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filepath = path.join(__dirname, 'public', 'images', filename);
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
};

const downloadAllImages = async () => {
    console.log('Starting image downloads...');
    for (const image of images) {
        try {
            await downloadImage(image.url, image.filename);
        } catch (error) {
            console.error(`Error downloading ${image.filename}:`, error.message);
        }
    }
    console.log('All downloads completed!');
};

downloadAllImages(); 