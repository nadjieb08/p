let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Donasi Nya Banh...*_ ')
  let ext= `
*DONASI*

*TSEL* : 085742344873
*GOPAY* : 085742344873
*DANA* : 085742344873
*SAWERIA* : saweria.co/JulianKastara

`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Donasi`)).buffer(), ext.trim(), 'SixxTenz Ganteng', '🙋‍♂️ NOMER OWNER', '.owner',m)
    

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
