
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
          client.user.setActivity("By: !Hilal.#1310",{type: 'STREAMING'});     //Heeeeeemo    
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

 client.on('message', message => {
    if (message.content.startsWith("$id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Name Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});


      message.author.sendMessage(`**شكرا لك لاستعمال البوت**

      __**الاوامر الادارية :gear:**__

❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
❖${prefix}** channels ** ==>**لانشاء روم صوتي او كتابي او حافضة**
❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
❖${prefix}** band ** ==>**لحصر شخص من السيرفر**
❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**
      __**الاوامر العامة :coffee:**__
❖${prefix}** avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
❖${prefix}** serveravatar ** ==>**لكي يعطيك رابط صورة السيرفر**
❖${prefix}** server ** ==>**لمعلومات السيرفر**
❖${prefix}** id ** ==>**لمعلومات عنك**
❖${prefix}** ping ** ==>**للتحقق من سرعة الاتصال**
❖${prefix}** bot ** ==>**معلومات عن البوت**
❖${prefix}** invite ** ==>**لاحضار البوت الى سيرفرك**
❖${prefix}** time ** ==>**لرؤية الوقت**
❖${prefix}** color ** ==>**لتغيير لونك**
❖${prefix}** roles ** ==>**لكي ترى كل رتب السيرفر**
❖${prefix}** rooms ** ==>**لكي ترى كل قنوات السيرفر**
❖${prefix}** date ** ==>**لكي ترى التاريخ**
      __**الاوامر الترفيهية :coffee:**__
❖${prefix}** mariam ** ==>**للعب مع مريم**
❖${prefix}** cuttweet ** ==>**لكي يعطيك جمل كت تويت عشوائية**
❖${prefix}** sarahah ** ==>**لكي يعطيك جمل صراحة عشوائية**
❖${prefix}** cat ** ==>**لكي ترى صور قطط عشوائية**
❖${prefix}** roll ** ==>**لاختيار رقم عشوائي**
By :<@280749272498962432> | __**شكرا لكم لاستعمال البوت**__

`);

}

 Client.on('message', async FARES => {
if(FARES.author.bot) return;
if (FARES.channel.guild) {
if (FARES.content.startsWith(prefix + `8ball`)) {
   let argsFARES = FARES.content.split(' ').slice(1).join(' ');
   let authorFARES = FARES.author.username;

   let FARES = [
"● It is certain.",
"● It is decidedly so.",
"● Without a doubt.",
"● Yes - definitely.",
"● You may rely on it.",
"● As I see it, yes.",
"● Most likely.",
"● Outlook good.",
"● Yes.",
"● Signs point to yes.",
       // إجابات غير ملتزمة
"● Reply hazy, try again",
"● Ask again later.",
"● Better not tell you now.",
"● Cannot predict now.",
"● Concentrate and ask again.",


       // إجابات سلبية
"● Don't count on it.",
"● My reply is no.",
"● My sources say no",
"● Outlook not so good.",
"● Very doubtful.",
   ]
   let randomFARES = Math.floor(Math.random() * FARES.length);

   if (!argsFARES) return ReBeLL.reply("ask him something.");
   FARES.channel.send(`\:8ball\: | ${FARES[randomFARES]} **${authorFARES}**`);
}}});

 client.on('message', message => {
             if(message.content.startsWith(`$about`)){
                 if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.channel.send(`** # Platinum Bot : نحن نقدم لكم بلاتنيوم بوت الذي يتوفر فيه ...
            ``  خدمات اسرع``

            ``  اوامر اكثر ``

            ``  سهولة استعمال ``

            `` امان لسيرفرك ``

              وانتضرونا بما هو احسن ... **    `)
             }
         });

 const arraySort = require('array-sort'),
table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith("$topinvite")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});

client.on('message' , async (message) => {

    if(message.content.startsWith("$topinvite")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});

 client.on('message', message => {
     if (message.content === ("$bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

hero.on('ready',async () => {
console.log(`Starting Work.`);
hero.guilds.forEach(g => {
    let user = g.members.get('اي دي الشخص');
    if(!user) return;
    console.log(g.name);
});
});

hero.on('ready',async () => {
console.log(`Starting Work.`);
hero.guilds.forEach(g => {
    let user = g.members.get('اي دي الشخص');
    if(!user) return;
    console.log(g.name);
});
});

client.on('message',async message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
let args = message.content.split(' ');
if(args[0] === `${prefix}rename`) {
  let role = message.guild.roles.find(r => r.name === args.slice(1).join(' ')) || message.mentions.roles.first();
  if(!role) return message.channel.send('- هذه الرتبة غير موجودة');
  let m = await message.channel.send('- أكتب اسم الرتبة الجديدة الان');
  let awaitng = await message.channel.awaitMessages(r => r.author.id == message.author.id, {max: 1, time: 30000, errors: ['time']}).then(c => {
    let name = c.first().content;
    role.edit({
      name: name
    }).then(() => {
      message.channel.send('- تم تغيير اسم الرتبة');
    }).catch(e => message.channel.send('- لم اقدر على تغيير اسم الرتبة'));
  });
}
});

client.on('message',async message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
let args = message.content.split(' ');
if(args[0] === `${prefix}rename`) {
  let role = message.guild.roles.find(r => r.name === args.slice(1).join(' ')) || message.mentions.roles.first();
  if(!role) return message.channel.send('- هذه الرتبة غير موجودة');
  let m = await message.channel.send('- أكتب اسم الرتبة الجديدة الان');
  let awaitng = await message.channel.awaitMessages(r => r.author.id == message.author.id, {max: 1, time: 30000, errors: ['time']}).then(c => {
    let name = c.first().content;
    role.edit({
      name: name
    }).then(() => {
      message.channel.send('- تم تغيير اسم الرتبة');
    }).catch(e => message.channel.send('- لم اقدر على تغيير اسم الرتبة'));
  });
}
});



client.login(process.env.BOT_TOKEN)
