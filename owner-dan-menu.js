const fs = require('fs')

global.namabot = "BOT"
global.namaowner = "DEXO`XD"
global.footer_text = "© BOT" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62895397537722']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay Kirim Bukti Transaksi
*_PAYMENT_*
*💶DANA: 083820597761*
*💴PULSA: 083820597761*

*📌LINK GRUP*
https://chat.whatsapp.com/G6xF4TgR2LwGeMVOEjudjz
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /╭─❒ 「 *KHUSUS PEMILIK* 」 
│
│○ .owner
│○ .pay
│
╰❒

❒ 「  *OWNER MENU*  」
│
│○ .addsewa  
│○ .delsewa  
│○ .listsewa  
│○ .ceksewa  
│○ .bot
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ .list  
│○ .addlist  
│○ .updatelist  
│○ .dellist  
│○ .setproses  
│○ .changeproses  
│○  delsetproses  
│○ .setdone  
│○ .changedone  
│○ .delsetdone  
│○ .proses  
│○ .done  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ .antiwame  [on/off]
│○ .antiwame2  [on/off]
│○ .antilink  [on/off]
│○ .antilink2  [on/off]
│○ .welcome  [on/off]
│○ .goodbye  [on/off]
│○ .setwelcome  
│○ .changewelcome  
│○ .delsetwelcome  
│○ .setleft  
│○ .changeleft  
│○ .delsetleft  
│○ .open
│○ .close
│○ .jeda  
│○ .hidetag  
│○ .kick          
│○ .add
│○ .setppgc
│○ .setnamegc
│○ .setdesgc
│○ .linkgc
│○ .resetlinkgc
│○ .promote
│○ .demote
│
╰❒

╭─❒ 「 *STICKER MENU* 」 
│
│○ .stiker
│
╰❒

╭─❒ 「  *KALKULATOR MENU*  」
│
│○ .tambah  
│○ .kurang  
│○ .kali  
│○ .bagi  
│
╰❒
\`\`\`

📝 *NOTE*: 
DI LARANG SPAM
MAU SEWA BOT? HUBUNGI 62895397537722 KETIK OWNER DI CHAT BOT
`
}
