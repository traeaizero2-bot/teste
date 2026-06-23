
const http = require('http');
const fs = require('fs');
const FormData = require('form-data');

// Let's first create a test image file
const testImagePath = './test-image.png';
const testImageData = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
fs.writeFileSync(testImagePath, testImageData);
console.log('Created test image:', testImagePath);

// Now let's upload it!
const form = new FormData();
form.append('file', fs.createReadStream(testImagePath));

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/upload',
  method: 'POST',
  headers: form.getHeaders()
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    console.log('\nUpload Response:');
    console.log('Status:', res.statusCode);
    console.log('Body:', body);
    // Cleanup test file
    fs.unlinkSync(testImagePath);
  });
});

req.on('error', (e) => {
  console.error('Error:', e);
  fs.unlinkSync(testImagePath);
});

form.pipe(req);
