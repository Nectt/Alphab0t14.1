const fs = require('fs')
const chalk = import('chalk')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
	zeks: 'https://zeks.me',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
	'https://zeks.me': 'Alphabott',
}

global.owner = ['6288290013973','0881027218328']
global.packname = setting.NecttBot
global.author = setting.Akli
global.alphaVersion = [2, 2143, 3]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
