
# First, get current data
$currentData = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Get

# Modify home title for testing
$currentData.home.title = "Teste de Atualização - " + (Get-Date -Format "HH:mm:ss")

# Convert to JSON
$body = $currentData | ConvertTo-Json -Depth 10

# Send PUT request (we need to send the cookie we got earlier)
$response = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Put -Body $body -ContentType "application/json" -WebSession $session

Write-Host "PUT Response:"
Write-Host ($response | ConvertTo-Json -Depth 10)

# Verify the change by getting data again
$updatedData = Invoke-RestMethod -Uri http://localhost:3000/api/data -Method Get
Write-Host "`nUpdated Home Title:"
Write-Host $updatedData.home.title
