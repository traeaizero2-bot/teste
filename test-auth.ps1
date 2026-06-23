
$body = @{
    username = "EuTueEdu"
    password = "Edu.123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri http://localhost:3000/api/auth -Method Post -Body $body -ContentType "application/json" -SessionVariable session
Write-Host "Auth Response:"
Write-Host ($response | ConvertTo-Json -Depth 10)
Write-Host "Cookies:"
$session.Cookies.GetCookies("http://localhost:3000")
