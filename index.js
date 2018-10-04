
const Discord = require('discord.js');
const Util = require('discord.js');
const Canvas = require("canvas")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const figlet = require('figlet');
const request = require('request');
const moment = require('moment');
const r1 = require('snekfetch'); 
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
let ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`))

const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);
const PREFIX = '!';

const queue = new Map();
const client = new Discord.Client({disableEveryone: true}); //Heeeeeeeeeeeeeemo

client.on('ready', () => {
    console.log('╔[════════════════════════════════════]╗'); // Heeeeeemo
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
          client.user.setActivity("By: YodaBrro#4557",{type: 'STREAMING'});     //Heeeeeemo    
});

client.on('message', async message => {
  if(message.content.startsWith("+تقديم")) {
    await message.channel.send("** ❓  حسنا, قم بكتابة ايدي البوت**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** رائع, الأن قم بكتابة مميزات بوتك ❓**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**اخيرا وليس اخرا, قم بكتابة عدد السيرفرات والمستخدمين ❓ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(+gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الأيدي :question:  : \n ${lan}\nالمميزات :link: :\n ${md} \nعدد السيرفرات والمستخدمين :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`Tesla Server`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})

client.on('message' , message => {
if (message.content === '$help') {
 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions "); 
   let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)    
      .addField("**۩ஜ▬▬▬▬▬▬✦ الأوامر العامة ✦▬▬▬▬▬▬ஜ۩**","** **")
      .addField("**$members**","**لأظهار حالات الأعضاء**")
      .addField("**$ping**","**لاظهار سرعة اتصال البوت**")
      .addField("**$invite**","**لارسال رابط السيرفر على الخاص**")
       .addField("**$sug**","**لعمل اقتراح قد يساعدنا في تطوير السيرفر**")
     .addField("**$avatar**","**لاظهار صورتك الشخصية او صورة اي شخص بوضع منشن له**")
.setColor('#e9ab26')
  message.author.sendEmbed(embed);
    }
});
	    
client.login(process.env.BOT_TOKEN)
