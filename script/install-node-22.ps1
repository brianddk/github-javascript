# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# Set powershell environment https://github.com/Schniz/fnm?tab=readme-ov-file#powershell
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 22

# verifies the right Node.js version is in the environment
node -v # should print `v22.2.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
