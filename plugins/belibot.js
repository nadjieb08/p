let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Donasi Nya Banh...*_ ')
  let ext= `
*SEWA DAN BELI*

*IM3* : 085742344873
*GOPAY* : 085742344873
*DANA* : 085742344873
*SAWERIA* : saweria.co/JulianKastara
*HARGA :*
1.5k = 7 Hari *(Bebas Masukin Bot 1 Grup Aja)*
2.10k = 1 Bulan *(Bebas Masukin Bot 5 Grup aja)*
3.15k = VIP *(Bebas Mainin Bot Ampe Mati)*
4.20k = Jadi Owner Bot 7 Hari *(Tidak Termasuk Premium)*
5.25k = Jadi Owner Bot 1 Bulan *(Premium 1 Bulan)*
6.30k = Jadi Owner Bot Ampe Mati *(VIP Berlaku Ampe Mati)*

`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Donasi`)).buffer(), ext.trim(), 'HanzzBotz By Hanzz-kun', '🙋‍♂️ NOMER OWNER', '.owner',m)
    

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
