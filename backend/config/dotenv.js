const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Path to the .env file in project root (one level up from backend)
const envPath = path.resolve(__dirname, '../../.env');

// Check if the file exists before loading
if (fs.existsSync(envPath)) {
  const result = dotenv.config({ path: envPath });
  
  if (result.error) {
    console.error('Error loading .env file:', result.error);
  } else {
    console.log('.env file loaded successfully from project root');
  }
} else {
  console.warn('.env file not found at:', envPath);
  
  // Fallback to default location (backend directory)
  dotenv.config();
}

module.exports = process.env;
