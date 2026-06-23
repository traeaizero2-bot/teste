
const http = require('http');

// Helper function to make requests
function makeRequest(method, path, data = null, cookies = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
  port: 3002,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    if (cookies) {
      options.headers['Cookie'] = cookies;
    }

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body), cookies: res.headers['set-cookie'] });
        } catch (e) {
          resolve({ status: res.statusCode, data: body, cookies: res.headers['set-cookie'] });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function runTests() {
  console.log('=== Test 1: GET /api/data ===');
  let res1 = await makeRequest('GET', '/api/data');
  console.log('Status:', res1.status);
  console.log('Data received:', !!res1.data.home);
  console.log(res1.status === 200 ? '✅ PASS' : '❌ FAIL');

  console.log('\n=== Test 2: POST /api/auth (wrong credentials) ===');
  let res2 = await makeRequest('POST', '/api/auth', { username: 'wrong', password: 'wrong' });
  console.log('Status:', res2.status);
  console.log('Response:', res2.data);
  console.log(res2.status === 401 ? '✅ PASS' : '❌ FAIL');

  console.log('\n=== Test 3: POST /api/auth (correct credentials) ===');
  let res3 = await makeRequest('POST', '/api/auth', { username: 'EuTueEdu', password: 'Edu.123' });
  console.log('Status:', res3.status);
  console.log('Response:', res3.data);
  const cookie = res3.cookies ? res3.cookies.join('; ') : null;
  console.log(cookie ? '✅ PASS' : '❌ FAIL');

  console.log('\n=== Test 4: PUT /api/data ===');
  const currentData = (await makeRequest('GET', '/api/data')).data;
  const originalTitle = currentData.home.title;
  currentData.home.title = `Test Update - ${new Date().toLocaleTimeString()}`;
  let res4 = await makeRequest('PUT', '/api/data', currentData, cookie);
  console.log('Status:', res4.status);
  console.log('Response:', res4.data);
  const updatedData = (await makeRequest('GET', '/api/data')).data;
  console.log('Original title:', originalTitle);
  console.log('Updated title:', updatedData.home.title);
  console.log(updatedData.home.title !== originalTitle ? '✅ PASS' : '❌ FAIL');
}

runTests().catch(console.error);
