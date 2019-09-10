$workingDir = 'c:/Users/HP/Desktop/project/aquits/www'
$argumentList = @"
-NoExit -File $($workingDir)/configurations/start.ps1
"@
Start-Process -FilePath 'powershell.exe' -ArgumentList $argumentList -Verb runAs