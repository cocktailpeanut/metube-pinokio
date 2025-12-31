# MeTube - 1-Click Launcher

A Pinokio launcher for MeTube, a web GUI for yt-dlp with playlist support. Download videos from YouTube and dozens of other sites with a user-friendly interface.

## What is MeTube?

MeTube is a self-hosted web application that provides a graphical interface for downloading videos using yt-dlp. It supports:

- Downloading videos from YouTube and [dozens of other sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- Playlist support
- Custom download directories
- Multiple quality options
- Audio-only downloads
- Concurrent downloads

## How to Use

### Installation

1. Click the "Install" button in the Pinokio interface
2. Wait for the installation to complete (installs Python dependencies and builds the UI)

### Starting MeTube

1. Click the "Start" button
2. Wait for the server to launch
3. The web interface will automatically open in your browser

### Using the Web Interface

Once MeTube is running:

1. Paste a video URL into the input field
2. Select your preferred quality/format
3. Choose a download directory (optional)
4. Click "Add" to start the download
5. Monitor progress in the downloads section

### Accessing Downloads

Click the "Open Downloads Folder" button in the Pinokio interface to access your downloaded videos.

## API Documentation

MeTube provides a REST API for programmatic access.

### Add a Download

**Endpoint:** `POST /add`

**Request Body:**
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "quality": "best",
  "format": "any",
  "folder": ""
}
```

**JavaScript Example:**
```javascript
const fetch = require('node-fetch');

async function addDownload(url) {
  const response = await fetch('http://127.0.0.1:8081/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: url,
      quality: 'best'
    })
  });
  return await response.json();
}

// Usage
addDownload('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(result => console.log('Download added:', result));
```

**Python Example:**
```python
import requests

def add_download(url, quality='best'):
    response = requests.post('http://127.0.0.1:8081/add', json={
        'url': url,
        'quality': quality
    })
    return response.json()

# Usage
result = add_download('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
print('Download added:', result)
```

**cURL Example:**
```bash
curl -X POST http://127.0.0.1:8081/add \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "quality": "best"
  }'
```

### Quality Options

- `best` - Best quality available
- `bestvideo` - Best video quality
- `bestaudio` - Best audio quality (audio-only)
- `worst` - Lowest quality
- Custom format codes (e.g., `137+140` for specific video+audio combination)

### Delete a Download

**Endpoint:** `POST /delete`

**Request Body:**
```json
{
  "ids": ["download-id-1", "download-id-2"]
}
```

## Configuration

MeTube can be configured through environment variables. When using this launcher, you can modify the `start.js` file to add custom environment variables.

Key configuration options:
- `HOST` - Server host (default: 127.0.0.1)
- `PORT` - Server port (automatically assigned by Pinokio)
- `DOWNLOAD_DIR` - Directory for downloads (default: ../downloads)
- `OUTPUT_TEMPLATE` - Filename template (default: %(title)s.%(ext)s)
- `DEFAULT_THEME` - UI theme: light, dark, or auto

See the [MeTube documentation](https://github.com/alexta69/metube) for more configuration options.

## Troubleshooting

### Downloads Failing

1. Make sure yt-dlp is up to date (use the "Update" button)
2. Check if the video site is supported
3. Some sites may require authentication or cookies

### Server Won't Start

1. Check the terminal output for errors
2. Try a "Factory Reset" and reinstall
3. Ensure Python 3.13 is available

## Credits

MeTube is developed by [alexta69](https://github.com/alexta69/metube)

This launcher is a Pinokio wrapper for easy 1-click installation and usage.
