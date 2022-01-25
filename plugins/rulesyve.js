let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Baca Rulesnya Banh...*_ ')
  let ext= `
 ── 「 *PANDUAN* 」 ──
1.User Dapat Menggunakan Semua Command Gratis Dengan Batasan Tiket
Kecuali User Premium Dengan Tiket Unlimited/Tanpa Batas
2.Saat Pertama Mendaftar User Akan Diberi 10 Tiket, Setiap 24 Jam User Akan Diberi 10 Tiket 
Jika Tiket Anda Habis Anda Dapat Membelinya Dengan
Command .buy <Jumlah Tiket> Contoh .buy 5
1 Tiket = 350 Xp
3.Pengguna Yang Mengirim Media Atau Data Pribadi Tidak Akan Disimpan Didalam Bot Ini
Dan Kami Tidak Akan Bertanggung Jawab Atas Data Tersebut
4.Jika Bot Tidak Membaca Pesan Anda Tandanya Bot Sedang Off
Jika Bot Membaca Pesan Dan Tidak Merespon Tanda Nya Bot Sedang Delay Karena Gw Gak Pake Rdp
5.Bot Ini Dilengkapi Dengan Fitur Antispam Jika Anda Spam 20 Pesan Tanpa Colldown 5 Detik Bot Ini Akan Otomatis Membanned Anda
6.Jika Anda Melanggar Rules Maka Owner Akan Memberi Peringatan Kepada Anda
7.Jika Anda Menelpon Bot Anda Akan Diberi Warn/Soft Block
8.Jika Anda Adalah User Premium Lalu Anda Dibanned Karena Melanggar Rules, Owner Tidak Akan Menanggung Kerugian Anda
9.Jika Ada Bug Dalam Fitur Bot Silahkan Laporkan Ke owner Dengan Command .report <Laporan Anda>
10.Jika Ingin Request Fitur Baru Silahkan Ketik .request <Fitur Yang Ingin Direquest>



 ── 「 *RULES* 」 ──
  1.DILARANG MERUSAK SERVER BOT ATAU MENGIRIMKAN VIRTEX YANG MEMBUAT BOT RUSAK
  2.DILARANG MENELPON/MENVC BOT
  3.DILARANG SPAM BOT
  4.DILARANG MENGCOPY/MENYALIN PESAN DARI BOT
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Panduan Dan Rules`)).buffer(), ext.trim(), 'SixxTenz Ganteng', '👤 NOMER OWNER', '.owner',m)
    

}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
