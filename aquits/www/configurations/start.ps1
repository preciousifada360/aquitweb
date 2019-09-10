filter Stop-Source-Process {
  param($processId, $name = 'none')
  if ($processId -and $name -and ($processId.Length -gt 0) -and ($name.Length -gt 0)){
        if ($processId -is [int]){
            $name = $name.ToLower()
            $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
            if ($process -and ((Measure-Object -InputObject $process).length -gt 0)){
                if (($name -eq 'none') -or ($process.Name.ToLower() -eq $name)){
                    $childProcess = Get-CimInstance -ClassName Win32_Process | Where-Object -FilterScript {
                        $_.ParentProcessId -eq $processId
                    }

                    if ((Measure-Object -InputObject $childProcess).Count -gt 0){
                        $childProcess | ForEach-Object -Process {

                            Stop-Source-Process -processId ($_.ProcessId -as [int])
                        }
                    }

                    Stop-Process -id $processId -Force
                }
            }
        } else {
            :elseSwitch switch ($true){
                ({($processId -is [string]) -and ($processId -eq 'port') -and ($name -is [int])}) {
                    $conn = Get-NetTCPConnection -LocalPort $name -ErrorAction SilentlyContinue

                    if ($conn -and ((Measure-Object -InputObject $conn).Count -gt 0)) {
                        ForEach-Object -InputObject $conn -Process {
                            [int]$processId = $_.OwningProcess

                            $process = Get-Process -id $processId -ErrorAction SilentlyContinue
                            if ($process) {
                                $processName = $process.Name
                                Stop-Source-Process -processId $processId

                                $conn = Get-NetTCPConnection -LocalPort $name -ErrorAction SilentlyContinue

                                if ($conn -and ((Measure-Object -InputObject $conn).Count -gt 0)) {
                                    Stop-Process -Name $processName -Force
                                }

                                $conn = Get-NetTCPConnection -LocalPort $name -ErrorAction SilentlyContinue

                                if ($conn -and ((Measure-Object -InputObject $conn).Count -gt 0)) {
                                    $service = Get-Service -Name $processName -ErrorAction SilentlyContinue

                                    if ($service -and ($service.Status.ToString().ToLower() -eq 'running')) {
                                        Stop-Service -Name $processName -Force

                                        $conn = Get-NetTCPConnection -LocalPort $name -ErrorAction SilentlyContinue

                                        if ($conn -and ((Measure-Object -InputObject $conn).Count -gt 0)) {
                                            Stop-Process -Name $processName -Force
                                        }
                                    }
                                }
                            }
                        }
                    }

                    break
                }
            }
        }
    }
}

$workingDir = 'c:/Users/HP/Desktop/project/aquits/www'
if (Test-Path -Path "$workingDir/configurations/process.json"){
    $json = Get-Content -Path "$workingDir/configurations/process.json" -Force -Encoding UTF8

    if ($json -is [String]){
        $json = ConvertFrom-Json -InputObject $json

        if ($json -is [Object[]] -and ((Measure-Object -InputObject $json).Count -gt 0)){
            $json | ForEach-Object -Process {
                $processId = $_.processId
                $name = $_.name

                Stop-Source-Process -processId $processId -name $name
            }
        }
    }
}

$arr = New-Object System.Collections.Generic.List[System.Object]

$argumentList = @"
-f $($workingDir)/configurations/apache/conf/httpd.conf -k start
"@
$process = Start-Process -FilePath 'httpd.exe' -ArgumentList $argumentList -PassThru -NoNewWindow
$arr.Add(([PSCustomObject]@{
    processId = 'port';
    name = 80
}));

$argumentList = @"
--defaults-file="C:/Users/HP/Desktop/server/mariadb/conf/settings.cnf" --console
"@
$process = Start-Process -FilePath 'mysqld.exe' -ArgumentList $argumentList -PassThru -NoNewWindow
$arr.Add(([PSCustomObject]@{
    processId = 'port';
    name      = 3306
}));

$argumentList = @"
-f $($workingDir)/public/assets/js/moxie/mine.js -r "babel `${p} --out-file=$($workingDir)/public/assets/js/moxie/`${n}.compiled.js --presets=@babel/preset-env" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f $($workingDir)/public/assets/js/moxie/mine.compiled.js -r "uglifyjs `${p} -c -m -o $($workingDir)/public/assets/js/moxie/`${n}.min.js" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f $($workingDir)/public/assets/js/main.js -r "babel `${p} --out-file=$($workingDir)/public/assets/js/`${n}.compiled.js --presets=@babel/preset-env" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f $($workingDir)/public/assets/js/main.compiled.js -r "uglifyjs `${p} -c -m -o $($workingDir)/public/assets/js/`${n}.min.js" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f $($workingDir)/public/assets/js/main.compiled.min.js;$($workingDir)/public/assets/js/moxie/mine.compiled.min.js -r "concat-cli -f $($workingDir)/public/assets/js/jquery.min.js $($workingDir)/public/assets/js/bootstrap.min.js $($workingDir)/public/assets/js/selectize.min.js $($workingDir)/public/assets/js/moxie/plupload.full.min.js $($workingDir)/public/assets/js/moxie/mine.compiled.min.js $($workingDir)/public/assets/js/main.compiled.min.js -o $($workingDir)/public/assets/js/compiled.min.js" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f "$($workingDir)/public/assets/css/less/*.less" -r "lessc $($workingDir)/public/assets/css/less/main.less $($workingDir)/public/assets/css/compiled.css" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f "$($workingDir)/public/assets/css/compiled.css" -r "postcss `${p} --no-map -c $($workingDir)/public/assets/css/postcss.config.js -o $($workingDir)/public/assets/css/compiled.prefixed.css" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

$argumentList = @"
-f "$($workingDir)/public/assets/css/compiled.prefixed.css" -r "cleancss `${p} -O 2 -c ie7 --skip-rebase -o $($workingDir)/public/assets/css/compiled.min.css" -n
"@
$process = Start-Process -FilePath 'watch' -WorkingDirectory 'c:/Program Files/nodejs' -ArgumentList $argumentList -PassThru -NoNewWindow
$processId = $process.id
$arr.Add(([PSCustomObject]@{
    processId = $processId;
    name = ((Get-Process -Id $processId).Name)
}))

Out-File "$workingDir/configurations/process.json" -Encoding utf8 -Force -InputObject (ConvertTo-Json -InputObject $arr -Depth 10 -Compress)

#$arr.Add(([PSCustomObject]@{
#    pid = $processId;
#    name = ((Get-Process -Id $processId).Name)
#}))

#$arr = New-Object System.Collections.Generic.List[System.Object]
#$pinfo = New-Object System.Diagnostics.ProcessStartInfo
#$pinfo.FileName = "httpd.exe"
#$pinfo.RedirectStandardError = $true
#$pinfo.RedirectStandardOutput = $true
#$pinfo.UseShellExecute = $false
#$pinfo.Arguments = '-f',"$($workingDir)/configurations/apache/conf/httpd.conf",'-k','start'
#$p = New-Object System.Diagnostics.Process
#$p.StartInfo = $pinfo
#$p.Start() | Out-Null
#$stdout = $p.StandardOutput.ReadToEnd()
#$stderr = $p.StandardError.ReadToEnd()
#$p.WaitForExit()