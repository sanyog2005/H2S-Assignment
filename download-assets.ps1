$ErrorActionPreference = 'Continue'
$dir = 'd:\projectWork Hack2skill\front\public\assets'

$assets = @{
  'artboard.png' = 'https://www.figma.com/api/mcp/asset/1b18eceb-5911-4bbb-9b5e-7b3104413076'
  'logo.png' = 'https://www.figma.com/api/mcp/asset/aee3390c-b963-4716-a202-c9928cecefaf'
  'layer2.png' = 'https://www.figma.com/api/mcp/asset/13c187ae-dc8e-47f0-8e9c-8929196efbde'
  'ps2.png' = 'https://www.figma.com/api/mcp/asset/722dd6ca-bd1d-4820-913e-45a0c6b84443'
  'ps4.png' = 'https://www.figma.com/api/mcp/asset/e9014a44-05a6-4959-8554-75333118f563'
  'vector1.svg' = 'https://www.figma.com/api/mcp/asset/ea2d8d85-eff7-47bb-857a-3de95fa104cf'
  'ps6.png' = 'https://www.figma.com/api/mcp/asset/cae66d66-bfe9-4d2e-9f3d-26d3ee8f5f9e'
  'img7066.png' = 'https://www.figma.com/api/mcp/asset/c42b31b7-3117-41e7-bfa8-af706959e3d6'
  'municipal-gis1.png' = 'https://www.figma.com/api/mcp/asset/7fdf11cd-71e6-47b6-8929-9f2b4a0780e6'
  'ps8.png' = 'https://www.figma.com/api/mcp/asset/d45ec20d-ad35-450f-b565-9a6edf00d07f'
  'chandrayan-2.png' = 'https://www.figma.com/api/mcp/asset/90f71397-bc2b-46fe-96d8-e975db5b37be'
  'ps10.png' = 'https://www.figma.com/api/mcp/asset/7df5e879-699f-46bd-9dea-85ba9fa3bae0'
  'lander.png' = 'https://www.figma.com/api/mcp/asset/1a231e21-66cb-4228-b8c7-8555393b5abe'
  'satellite-data1.png' = 'https://www.figma.com/api/mcp/asset/c6be1310-31cc-4f52-853b-142977c1402b'
  'ps7.png' = 'https://www.figma.com/api/mcp/asset/d9ee935e-2536-4813-94ae-5626cd3e8f04'
  'artboard29.png' = 'https://www.figma.com/api/mcp/asset/5c5197f8-e8ca-42e0-af51-51a88d25bd92'
  'artboard30.png' = 'https://www.figma.com/api/mcp/asset/aea5faf8-b6ac-4108-a9bb-5aa043100350'
  'rect4489.png' = 'https://www.figma.com/api/mcp/asset/60ea9d31-3d3e-4e43-820e-9bebc2c355b2'
  'rect4490.png' = 'https://www.figma.com/api/mcp/asset/ed8effc3-227f-4a5c-a89e-3a79fdf999f4'
  'rect4491.png' = 'https://www.figma.com/api/mcp/asset/dba3732e-0ad9-47ee-b51e-535c2b7ca1a0'
  'rect4492.png' = 'https://www.figma.com/api/mcp/asset/fc523595-3c02-4df1-bda9-d3407c41cb5e'
  'rect4493.png' = 'https://www.figma.com/api/mcp/asset/9c2c8293-e73c-49cb-8b76-8390aab3369f'
  'rect4495.png' = 'https://www.figma.com/api/mcp/asset/0f248828-0a3d-47e7-911b-75b9e9e1ea04'
  'rect4-hero.png' = 'https://www.figma.com/api/mcp/asset/489a7c2f-8dd3-417c-bab6-c46449df96cc'
  'edit-icon.svg' = 'https://www.figma.com/api/mcp/asset/478ec513-917a-4040-8e21-875924868fdc'
  'group-icon.svg' = 'https://www.figma.com/api/mcp/asset/9062cc7d-7449-4ca7-a372-ef21ee9c68ce'
  'mountain-icon.svg' = 'https://www.figma.com/api/mcp/asset/a94ba296-147e-4a99-a688-5294fe503771'
  'shuttle-icon.svg' = 'https://www.figma.com/api/mcp/asset/1274d647-8085-4420-a315-e4eb1c369371'
  'idea-icon.svg' = 'https://www.figma.com/api/mcp/asset/ffdbab49-9b8c-4fec-b7e1-4243744514e7'
  'ps1.png' = 'https://www.figma.com/api/mcp/asset/84c29dd9-8aea-4af3-ae3e-d4b7ae2b5c98'
  'ps3.png' = 'https://www.figma.com/api/mcp/asset/69f8ef2f-8b60-4a0f-b6a5-9911a1b0ce44'
  'ps5.png' = 'https://www.figma.com/api/mcp/asset/9c0a308e-e959-48b3-8b5b-d8744360a585'
  'img7065.png' = 'https://www.figma.com/api/mcp/asset/74f6ecd7-d9af-4425-82f4-26659624d23b'
  'municipal-gis.png' = 'https://www.figma.com/api/mcp/asset/77a95cbe-a6dd-4641-a9cb-0f6d83e57bb3'
  'chandrayan-1.png' = 'https://www.figma.com/api/mcp/asset/930f7ff3-0e84-4181-a0b8-d8c1e9db9875'
  'satellite-data.png' = 'https://www.figma.com/api/mcp/asset/b1fbebc7-c7db-4b20-a0e7-0bae14f3e737'
  'rect4494.png' = 'https://www.figma.com/api/mcp/asset/c31ce23a-2a26-4136-9832-5b2114b97867'
  'group16238.png' = 'https://www.figma.com/api/mcp/asset/cace7861-e92e-4517-9e04-753a75cce63d'
  'group16239.png' = 'https://www.figma.com/api/mcp/asset/2170dbbf-b52a-479c-88e7-4d9ffe219c1f'
  'rect4453.png' = 'https://www.figma.com/api/mcp/asset/36342dd4-2986-4b64-94ab-7846f51b66c1'
}

$jobs = @()
foreach ($k in $assets.Keys) {
  $url = $assets[$k]
  $out = Join-Path $dir $k
  $jobs += Start-Job -ScriptBlock {
    param($u, $o)
    try {
      Invoke-WebRequest -Uri $u -OutFile $o -UseBasicParsing -ErrorAction Stop
      "OK: $o"
    } catch {
      "FAIL: $o - $_"
    }
  } -ArgumentList $url, $out
}

$jobs | Wait-Job | Receive-Job
$jobs | Remove-Job
"Total files: $((Get-ChildItem $dir).Count)"
