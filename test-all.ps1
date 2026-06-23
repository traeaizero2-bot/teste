
# Test 1: Login
Write-Host "=== Test 1: POST /api/auth ==="
$authBody = @{
    username = "EuTueEdu"
    password = "Edu.123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri http://localhost:3000/api/auth -Method Post -Body $authBody -ContentType "application/json" -SessionVariable session
Write-Host "Auth Response: $($response | ConvertTo-Json)"
Write-Host "✅ Test 1 Passed!`n"

# Test 2: PUT /api/data
Write-Host "=== Test 2: PUT /api/data ==="
$currentData = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Get
$originalTitle = $currentData.home.title
$currentData.home.title = "Teste de Atualização - " + (Get-Date -Format "HH:mm:ss")
$putBody = $currentData | ConvertTo-Json -Depth 10

$putResponse = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Put -Body $putBody -ContentType "application/json" -WebSession $session
Write-Host "PUT Response: $($putResponse | ConvertTo-Json)"

# Verify
$updatedData = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Get
Write-Host "Original Title: $originalTitle"
Write-Host "Updated Title: $($updatedData.home.title)"
Write-Host "✅ Test 2 Passed!`n"

# Test 3: Test wrong credentials
Write-Host "=== Test 3: Wrong Credentials ==="
try {
    $wrongAuthBody = @{
        username = "wrong"
        password = "wrong"
    } | ConvertTo-Json
    Invoke-RestMethod -Uri http://localhost:3000/api/auth -Method Post -Body $wrongAuthBody -ContentType "application/json"
    Write-Host "❌ Test 3 Failed: Should have returned error!"
} catch {
    Write-Host "✅ Test 3 Passed! Got expected error!"
}
