# PicPro
---
## PicPro is a mobile app built with React Native that allows users to input any text and generate a profile picture that can be downloaded.

## Features
#### * Input text string
#### * Generate profile picture
#### * Download profile picture

## Getting Started

#### You'll need to obtain a Google Custom Search API key and custom search engine ID. Follow these steps:

#### 1. Go to the Google Developers Console and create a new project.
#### 2. Enable the Google Custom Search API for your project.
#### 3. Create a custom search engine and note the search engine ID (cx value).
#### 4. Obtain an API key for your project.
#### 5. Create a file named .env in the root directory of the project.
#### 6. Add the following lines to the file, replacing YOUR_CX_VALUE and YOUR_API_KEY_VALUE with your actual values:
` CX=YOUR_CX_VALUE
API_KEY=YOUR_API_KEY_VALUE
`
#### To get started with the PicPro app, you'll need your API key and custom search ID added to the .env file. Follow these steps:

### Clone the repository
#### * Run npm i to install dependencies
#### * Add your API key and cx to the project (more details above)
#### * Run expo start to launch the app


## Using PicPro
#### 1. Enter a text string in the input field.
#### 2. Tap the "Search" button.
#### 3. The app will fetch an image based on the search term using the Google Custom Search API.
#### 4. The image will be displayed on the screen.
#### 5. Tap the "Download" button to download the image to your device.