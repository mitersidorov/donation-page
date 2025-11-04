const sharp = require('sharp');
const https = require('https');
const fs = require('fs');
const path = require('path');

const AVATAR_URL = 'https://yt3.googleusercontent.com/FnsiGT9UWbClv3oazFTAGd_2C-PQK5llBdoJYR5KqATLgiSd_236e57otbBSqnLVkLrUZiSS6eY=s300-c-k-c0x00ffffff-no-rj';
const OUTPUT_DIR = path.join(__dirname, '../src/assets/og');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'og-image.jpg');
const WIDTH = 1200;
const HEIGHT = 630;

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function generateOGImage() {
  try {
    console.log('Downloading avatar...');
    const avatarBuffer = await downloadImage(AVATAR_URL);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('Generating OG image...');
    
    const avatarSize = 300;
    const processedAvatar = await sharp(avatarBuffer)
      .resize(avatarSize, avatarSize, { fit: 'cover' })
      .png()
      .toBuffer();

    const background = await sharp({
      create: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4,
        background: { r: 245, g: 245, b: 245, alpha: 1 }
      }
    })
      .png()
      .toBuffer();

    const x = Math.floor((WIDTH - avatarSize) / 2);
    const y = Math.floor((HEIGHT - avatarSize) / 2);

    await sharp(background)
      .composite([
        {
          input: processedAvatar,
          top: y,
          left: x
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(OUTPUT_FILE);

    console.log(`✓ OG image generated successfully: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
