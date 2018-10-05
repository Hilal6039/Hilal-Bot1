const discord = require ('discord.js');

const weather = require (`weather-js`);

const db = require (`quick.db`);

const fs = require('fs');

const googleapis = require (`googleapis`)

const economy = require('discord-eco');

const modRole = (`Leaders`);

const items = JSON.parse(fs.readFileSync('items.json', 'utf8'));

const os = require('os');

const arch = os.arch()

const used = process.memoryUsage().heapUsed / 1024 / 1024;

const randomPuppy = require(`random-puppy`);

const superagent = require('superagent');

const meme = require('memejs');

const snek = require('snekfetch');

const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const send = require("quick.hook");

var client = new discord.Client(); 

const ytdl = require('ytdl-core');

const urban = require('relevant-urban');



const token = "NDU1NDkzMjE3NTM4OTMyNzQ4.Df8yoQ.SW5QoYIRnYIS-YNbad48wnwg7qY";



client.on ("ready", () => {

    console.log ("Colonial >.<")

    client.user.setActivity ("use colonial pls help")

    client.user.setUsername ("ColonialBot")



    answered = true;

    cAnswer = "";

    userAnswer = "";

    answered2 = true;

});



client.on ("guildMemberAdd", member => {



    var role = member.guild.roles.find ("name", "pending");

    member.addRole (role);





})



const prefix = "$";



client.on ("message", (message) => {

    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.

    let sender = message.author; // This variable takes the message, and finds who the author is.

    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces

    let args = cont.slice(1);



    if (message.author.bot) return;



    if (message.content.startsWith ("colonial pls setavatar1")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/bodypillow.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/todd.jpg")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    if (message.content.startsWith ("colonial pls setavatar2")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/kill.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/todd.jpg")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    if (message.content.startsWith(`colonial pls trumpquote`)) {

        snek.get(api).then(r =>{

            let qembed = new discord.RichEmbed()

            qembed.setTitle('Trump quotes generator')

            qembed.setDescription(r.body.message)

            qembed.setColor('RANDOM')

            qembed.setThumbnail(`https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853`)



            message.channel.sendEmbed(qembed)

        })

    }



    if (message.content.startsWith(`colonial pls meme`)) {

        meme(function(data) {



            const embed11 = new discord.RichEmbed()

            embed11.setTitle(data.title[0])

            embed11.setColor("RANDOM")

            embed11.setImage(data.url[0])



            message.channel.sendEmbed(embed11)

        })

            

    }



    if (message.content.startsWith(`colonial pls gif`)) {

        let replies = ["https://78.media.tumblr.com/8c3df486bc2f7eb0b992019ff74c812a/tumblr_osn7f1242h1vpw5nxo1_500.gif", "https://78.media.tumblr.com/2ed7f5b5b1886a73b472d0e9f52f8b70/tumblr_o7854tvKXR1vpw5nxo1_400.gif", "https://78.media.tumblr.com/b9abb328981dc634da641b9b0f68cc40/tumblr_o4xkg71BGk1vpw5nxo1_500.gif", "https://78.media.tumblr.com/fd8e86ba904b17170f11d731e99043c2/tumblr_o4ry8qckvG1vpw5nxo1_500.gif", "https://78.media.tumblr.com/40c78b68c8ed362513d3286bf99f322f/tumblr_o4n22jlwJN1vpw5nxo1_400.gif", "https://78.media.tumblr.com/4f50555ee26b8cda1868108c57e8f2e5/tumblr_o4mmiqF2Cz1vpw5nxo1_400.gif", "https://78.media.tumblr.com/eb9a74715e65870b78535e941306307f/tumblr_o4l4ppRqat1vpw5nxo1_250.gif", "https://78.media.tumblr.com/544d5b52e112d86dc8494356118f0d15/tumblr_p9ei8wIJuf1v7dt6vo1_500.gif", "https://78.media.tumblr.com/cd7a4c688c8f5d7b05d8c092951180d1/tumblr_p91b9e2Kfh1v7dt6vo1_500.gif", "https://78.media.tumblr.com/5710bafd5111f8ffa3e1d631d689f12a/tumblr_p91toahaH91v7dt6vo1_400.gif"];

        

        let result = Math.floor((Math.random() * replies.length));



        let gifembed = new discord.RichEmbed()

        gifembed.setTitle("Here's your GIF! 🍑")

        gifembed.setColor("#FF69B4")

        gifembed.setFooter(`Requested by ${message.author.tag} 🍑`, message.author.avatarURL)

        gifembed.setImage(replies[result]);



        message.channel.sendEmbed(gifembed)

    }



    if (message.content.startsWith ("colonial pls setavatar3")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/kill.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/kang1.jpg")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    if (message.content.startsWith ("colonial pls setavatar4")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/kill.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/cop.png")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    exports.run = async (client, message, args, ops) => {

        if (message.content.startsWith(`colonial pls play`)) {

            if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');

            if (message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot is already connected to the guild.');

            if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');

            let validate = await ytdl.validateURL(args[0]);



            if (!validate) return message.channel.send('Sorry, please input a **valid** url following the command.');



            let info = await ytdl.getInfo(args[0]);

            let connection = await message.member.voiceChannel.join();

            let dispatcher = await connection.play(ytdl(args[0], {

                filter: 'audioonly'

            }));



            message.channel.send(`Now playing: ${info.title}`);



        }

    }



    if (message.content.startsWith(`colonial pls inviitestats`)) {

        module.exports.run = async (bot, message, args) => {

            let invites = await message.guild.fetchInvites().catch(error => {

                return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');

            });

        

            invites = invites.array();

        

            let possibleinvites = [];

            invites.forEach(function(invites) {

                possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)

            })

        

            const embed = new Discord.RichEmbed()

                .setTitle(`**INVITELEADERBOARD**`)

                .setColor(0xCB5A5E)

                .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)

                .setTimestamp();

            message.channel.send(embed);

        }

        

        module.exports.help = {

            name: "invitestats"

        }

    }

    if (message.content.startsWith (`colonial pls 4k`)) {

        if (!message.channel.nsfw) return message.channel.send(" You must be in a N.S.F.W channel to use this command.");



        var subreddits = [

            'NSFW_Wallpapers',

            'SexyWallpapers',

            'HighResNSFW',

            'nsfw_hd',

            'UHDnsfw'

        ]



        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];



        randomPuppy(sub)

            .then(url =>{

                const embed10 = new discord.RichEmbed()

                embed10.setColor("RANDOM")

                embed10.setAuthor("4k", client.user.avatarURL)

                embed10.setFooter("xD")

                embed10.setImage(url);

                message.channel.sendEmbed(embed10)

            })

    }



    if (message.content.startsWith (`colonial pls invite`)) {

        message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=442006504657125397&scope=bot&permissions=2146958591 \n \n You've made the right choice.`)

    }



    if (message.content.startsWith('colonial pls harass')) {

        setInterval(function() {

            let user = message.mentions.users.first() || message.author;

                user.send('You just got harassed.')

        }, 1) // basically sends the message 3000 times...

    }



    if (message.content.startsWith('colonial pls stop harass')) {

        clearInterval(function() {

            let user = message.mentions.users.first() || message.author;

                user.send('You just got unharassed.')

        }, 1) // basically sends the message 3000 times...

    }



    if (message.content.startsWith(`colonial pls define`)) {

        if (!args[0]) return message.channel.send(`***Please specify some text!***`);



        let res = urban(args.join(' ')).catch(e => {

            return message.channel.send('***Sorry, that word was not found!***');

        });



        const umbed = new discord.RichEmbed()

        umbed.setColor('RANDOM')

        umbed.setTitle(res.word)

        umbed.setURL(res.urbanURL)

        umbed.setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)

        umbed.addField('Author', res.author, true)

        umbed.addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)

        message.channel.sendEmbed(umbed)

    }



    



    if (message.content.startsWith (`colonial pls illegal`)) {

        let meow = message.content.split(" ").slice(1);

        let args1 = meow.join(' ');

        let illegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` + args1.toUpperCase() + `.gif`;

        if (!args1) {

            return message.channel.send(':x: **Please, specify a thing that trump will make illegal**');

        }



        if (meow.length < 1) {

            return message.channel.send(':x: **Max 1 word**');

        }

            const emb = new discord.RichEmbed();

            emb.setAuthor("Trump has now made " + meow + " illegal!", "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png");

            emb.setImage(illegal);

            message.channel.sendEmbed(emb)

        

    }



    if (message.content.startsWith (`colonial pls luckynumber`)) {

        var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);

        const numEmb = new discord.RichEmbed()

        numEmb.setColor("RANDOM")

        numEmb.setAuthor('LUCKY NUMBER', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')

        numEmb.addField('And your lucky number is...', `${LuckNumber}!`);



        message.channel.sendEmbed(numEmb)

    }



    if (message.content.startsWith (`colonial pls evil`)) {

        var evilpercentile = Math.floor((Math.random() * 34) + 0.120);

        var evilEmb = new discord.RichEmbed()

        var today = new Date()

        let Day = today.toString().split(" ")[0].concat("day");

        var evilpercentile = Math.floor((Math.random() * 34) + 0.120);



        evilEmb.addField(`The current percentage of weebs in the mapping community is ${evilpercentile}%!`)

        evilEmb.setColor("RANDOM")

        

        message.channel.send(evilEmb)

    }



    if (message.content.startsWith ("colonial pls setavatar5")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/kill.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/todd.jpg")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    if (message.content.startsWith ("colonial pls setavatar6")) {

        message.channel.send ("Restarting...")

        client.user.setAvatar ("./images/kill.jpg")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

        client.on ("ready", () => {

            client.user.setActivity ("colonial pls help")

            client.user.setAvatar ("./images/animesucks.jpg")

            .then(user => console.log("new avatar set"))

            .catch(console.error);

            client.user.setUsername ("Weeb Patrol")

        })

    }



    if (message.content.startsWith ("colonial pls say")) {

        let args3 = message.content.split(" ").splice(3);

        message.channel.send(args3.join(" "))

    }



    if (message.content.startsWith("colonial pls userinfo")) {

        const embed2 = new discord.RichEmbed()

        embed2.setDescription(`This user's info`)

        embed2.setAuthor(message.author.username)

        embed2.setColor(`003fff`)

        embed2.addField(`Full Username`, `${message.author.username}#${message.author.discriminator}`)

        embed2.addField(`ID`, message.author.id)

        embed2.addField(`Created At`, message.author.createdAt)

        embed2.setThumbnail(message.author.avatarURL)

        message.channel.sendEmbed(embed2)

    }



    if (message.content.startsWith ("colonial pls hwid")) {

        number = 32;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.send ("You will die at an LGBT support rally."); break;

            case 2: message.channel.send ("Colonial's Weeb Gas Chamber."); break;

            case 3: message.channel.send ("You challenge a furry to the fight and lose."); break;

            case 4: message.channel.send ("WAKEAcolonial pls !!!!!!"); break;

            case 5: message.channel.send ("Your dick gets stuck in the person you're fucking."); break;

            case 6: message.channel.send ("Wait... \n 3... \n 2... \n 1... \n Oh dear... Goodbye."); break;

            case 7: message.channel.send ("Jap turns on his webcam in the middle of a call."); break;

            case 8: message.channel.send ("Cheezus Christ wants you."); break;

            case 9: message.channel.send ("You are assassinated as Dictator of China."); break;

            case 10: message.channel.send ("Jap kills you because you stole his Korean Tennis Girlfriend."); break;

            case 11: message.channel.send ("Your sex slave plots agaisnt you."); break;

            case 12: message.channel.send ("Never chat on furry discords."); break;

            case 13: message.channel.send ("You die while sucking your mom."); break;

            case 14: message.channel.send ("Cloud."); break;

            case 15: message.channel.send ("Use your zuccer-bucks to ask again."); break;

            case 16: message.channel.send ("You discover Iri to be living in your basement and he bites you and gives you a poisonous venom which makes you die."); break;

            case 17: message.channel.send ("Your korean tennis girlfriend leaves you for Jap."); break;

            case 18: message.channel.send ("Strip Club, Pole, You on pole, Knife is thrown at pole."); break;

            case 19: message.channel.send ("You end up as Cloud and commit suicide.");break;

            case 20: message.channel.send ("You end up homeless, starvation takes your life."); break;

            case 21: message.channel.sned ("You spammed kikc bot."); break;

            case 22: message.channel.send ("Wonder went crazy again."); break;

            case 23: message.channel.send ("You see Freeze's face, one, last, time..."); break;

            case 24: message.channel.send ("You walk in on Sol and Leah fucking. Sol kills you so you don't tell."); break;

            case 25: message.channel.send ("You catch Wakean playing Minecraft."); break;

            case 26: message.channel.send ("You start a fire at furry con, the fire takes your life."); break;

            case 27: message.channel.send ("An evil Elf takes your life using a breadstick."); break;

            case 28: message.channel.send ({ files: [kang1]}); break;

            case 29: message.channel.send ("Chinese shows you the drug he's on."); break;

            case 30: message.channel.send ("I'm dying inside \n And all I see are demons \n I try to hide all my deepest feelings \n I'm dying inside \n And all I see are demons \n I try to hide all my deepest feelings"); break;

            case 31: message.channel.send ("You admit you're secretly trans. Wakean appears at your door."); break;

            case 32: message.channel.send ("You lose your nigga pass."); break;

        }

    }



    mc1 = "./mc/cep.png", mc2 = "./mc/hue.png", mc3 = "./mc/iri.png", mc4 = "./mc/pc.png", mc5 = "./mc/pc2.png", mc6 = "./mc/saph.png", mc7 = "./mc/white.png", mc8 = "./mc/wondy.png";

    if (message.content.startsWith ("colonial pls minecraft")) {

        number = 8;

        var random = Math.floor (Math.random() * (number - 1 + 1));

        switch (random) {

            case 1: message.channel.send ({ files: [mc1]}); break;

            case 2: message.channel.send ({ files: [mc2]}); break;

            case 3: message.channel.send ({ files: [mc3]}); break;

            case 4: message.channel.send ({ files: [mc4]}); break;

            case 5: message.channel.send ({ files: [mc5]}); break;

            case 6: message.channel.send ({ files: [mc6]}); break;

            case 7: message.channel.send ({ files: [mc7]}); break;

            case 8: message.channel.send ({ files: [mc8]}); break;



        }

    }



    if (message.content.startsWith ("colonial pls setavatar")) {

        message.channel.send ("There are 6 images you can choose from every hour to be this bots avatar. Here are the images. \n **The command you must use to use these is** `colonial pls setavatar1 (1 would be the number of the first image, each image in consecutive order is represented by it's order, so the second image would be colonial pls setavatar2)`  \n \n **1)** https://cdn.discordapp.com/attachments/445725338346192906/447886357399076864/bodypillow.jpg \n  **2)** https://cdn.discordapp.com/attachments/445725338346192906/447886357919039488/animesucks.jpg \n  **3)** https://cdn.discordapp.com/attachments/445725338346192906/447886358086942730/cop.png \n  **4)** https://cdn.discordapp.com/attachments/445725338346192906/447886359663869962/kill.jpg \n  **5)** https://cdn.discordapp.com/attachments/445725338346192906/447886361370951710/todd.jpg \n  **6)** https://cdn.discordapp.com/attachments/445725338346192906/447886358644785155/kang1.jpg ");

    }



    if (message.content.startsWith ("colonial pls profile")) {

        image = message.attachments.first().url;

        client.user.setAvatar (image)

        .then(user => console.log("new avatar set")) 

        .catch(console.error);

    }



    if (message.content.startsWith ("colonial pls restart")) {

        message.channel.send ("Restarting...")

        .then(msg => client.destroy())

        .then(() => client.login("NDQyMDA2NTA0NjU3MTI1Mzk3.Dd-Phg.50t9G7GqqS4UoAE11qk1v0vEk5o"));

        message.channel.send("Restart complete!")

    }



    if (message.content.startsWith (`colonial pls stats`)) {

        let totalSeconds = process.uptime();

        let realTotalSecs = Math.floor(totalSeconds % 60);

        let days = Math.floor((totalSeconds % 31536000) / 86400);

        let hours = Math.floor((totalSeconds / 3600) % 24);

        let mins = Math.floor((totalSeconds / 60) % 60);



        var ping = client.ping

        message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {

            code: 'AsciiDoc'

        })

    }



    if (message.content.startsWith(`colonial pls fuckmarrykill`)) {



        var membed = new discord.RichEmbed()

        var kembed = new discord.RichEmbed()

        var fembed = new discord.RichEmbed()



        membed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)

        membed.setColor('RANDOM')

        membed.addField(`You choosed:`, `MARRY :ring:`)

        membed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);



        fembed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)

        fembed.setColor('RANDOM')

        fembed.addField(`You choosed:`, `FUCK :sweat_drops: :eggplant:`)

        fembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);



        kembed.setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)

        kembed.setColor('RANDOM')

        kembed.addField(`You choosed:`, `KILL :knife: :bomb: :person_frowning: :gun:`)

        kembed.setFooter('Fuck, Marry, Kill!', message.author.displayAvatarURL);



        if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, please mention a user you wanna choose!`).then(msg => {

            message.delete(10000)

        })



        number = 3;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.sendEmbed(kembed); break;

            case 2: message.channel.sendEmbed(membed); break;

            case 3: message.channel.sendEmbed(fembed); break;

        }

    }



    if (message.content.startsWith (`colonial pls weather`)) {



        weather.find({search: args.join(" "), degreeType: `F`}, function(err,result) {

            if (err) message.channel.send(err);



            if (result.length === 0) {

                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.

                return; // This exits the code so the rest doesn't run.

            }

            var current = result[0].current; // This is a variable for the current part of the JSON output

            var location = result[0].location; // This is a variable for the location part of the JSON output



            const weatherembed = new discord.RichEmbed()

            var current = result[0].current; // This is a variable for the current part of the JSON output

            var location = result[0].location; // This is a variable for the location part of the JSON output

            weatherembed.setDescription(`**${current.skytext}**`)

            weatherembed.setAuthor(`Weather for ${current.observationpoint}`)

            weatherembed.setThumbnail(current.imageUrl)

            weatherembed.setColor(`003fff`)

            weatherembed.addField('Timezone',`UTC${location.timezone}`, true)

            weatherembed.addField('Degree Type',location.degreetype, true)

            weatherembed.addField('Temperature',`${current.temperature} Degrees`, true)

            weatherembed.addField('Feels Like', `${current.feelslike} Degrees`, true)

            weatherembed.addField('Winds',current.winddisplay, true)

            weatherembed.addField('Humidity', `${current.humidity}%`, true)

            message.channel.sendEmbed(weatherembed)

        })};



    if (message.content.startsWith ("hmmm")) {

        message.channel.send (":thinking:");

    }



    if (message.content.startsWith (`colonial pls bal`)) {

        economy.fetchBalance(message.author.id + message.guild.id).then((i) => {

            const embed6 = new discord.RichEmbed()

            embed6.setDescription(`**${message.guild.name} Bank**`)

            embed6.setColor(`00efff`)

            embed6.addField('Account Holder',message.author.username,true)

            embed6.addField('Account Balance',i.money,true)

            embed6.setThumbnail(message.author.avatarURL)



            message.channel.sendEmbed(embed6)

        })

    }



    if (message.content.startsWith (`colonial pls balance`)) {

        economy.fetchBalance(message.author.id + message.guild.id).then((i) => {

            const embed6 = new discord.RichEmbed()

            embed6.setDescription(`**${message.guild.name} Bank**`)

            embed6.setColor(`00efff`)

            embed6.addField('Account Holder',message.author.username,true)

            embed6.addField('Account Balance',i.money,true)

            embed6.setThumbnail(message.author.avatarURL)



            message.channel.sendEmbed(embed6)

        })

    }



    if (message.content.startsWith (`colonial pls addmoney`)) {

        if (!message.member.roles.find("name", modRole)) {

            message.channel.send('**You need the role `' + modRole + '` to use this command...**');

            return;

        }



        if (!args[0]) {

            message.channel.send(`**You need to define an amount. Usage: ${prefix}BALSET <amount> <user>**`);

            return;

        }



        if (isNaN(args[0])) {

            message.channel.send(`**The amount has to be a number. Usage: ${prefix}BALSET <amount> <user>**`);

            return;

        }



        let defineduser = '';

        if (!args[1]) {

            defineduser = message.author.id;

        } else {

            let firstMentioned = message.mentions.users.first();

            defineduser = firstMentioned.id;

        }

        economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => {

            message.channel.send(`**${message.author} had ${args[0]} added/subtraction from their account.**`)

        });

    }



    if (message.content.startsWith (`colonial pls buy`)) {

        let categories = [];

        if (!args.join(" ")) {

            for (var i in items) {

                if (!categories.includes(items[i].type)) {

                    categories.push(items[i].type)

                }

            }

            const embed7 = new discord.RichEmbed()

            embed7.setDescription(`Available Items`)

            embed7.setColor(`003fff`)

            embed7.setThumbnail(message.guild.iconURL)



            for (var i = 0; i < categories.length; i++) {

                var tempDesc = '';

                for (var c in items) {

                    if (categories[i] === items[c].type) {

                        tempDesc += `${items[c].name} - $${items[c].price} - ${items[c].desc}\n`;

                    }

                }

                embed7.addField(categories[i], tempDesc);

            }

            return message.channel.sendEmbed (embed7)

        }



        let itemName = '';

        let itemPrice = 0;

        let itemDesc = '';



        for (var i in items) {

            if (args.join(" ").trim().toUpperCase() === items[i].name.toUpperCase()) {

                itemName = items[i].name;

                itemPrice = items[i].price;

                itemDesc = items[i].desc;

            }

        }



        if (itemName === '') {

            return message.channel.send(`**Item ${args.join(" ").trim()} not found.**`)

        }



        economy.fetchBalance(message.author.id + message.guild.id).then((i) => {

            if (i.money <= itemPrice) {

                return message.channel.send(`**You don't have enough money for this item.**`);

            }

            economy.updateBalance(message.author.id + message.guild.id, parseInt(`-${itemPrice}`)).then((i) => {

                message.channel.send('**You bought ' + itemName + '!**');

                if (itemName === 'Helper Role') {

                    message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", "Cabinet"));

                }

            })

        })

    }



    if (answered2 == false) {

        nameAnswer = message;

        if (nameAnswer == userResponse) {

            number = 50;

            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

            switch (random) {

                case 1: message.channel.send ("Liam"); break;

                case 2: message.channel.send ("Noah"); break;

                case 3: message.channel.send ("William"); break;

                case 4: message.channel.send ("James"); break;

                case 5: message.channel.send ("Logan"); break;

                case 6: message.channel.send ("Benjamin"); break;

                case 7: message.channel.send ("Mason"); break;

                case 8: message.channel.send ("Elijah"); break;

                case 9: message.channel.send ("Oliver"); break;

                case 10: message.channel.send ("Jacob"); break;

                case 11: message.channel.send ("Lucas"); break;

                case 12: message.channel.send ("Michael"); break;

                case 13: message.channel.send ("Alexander"); break;

                case 14: message.channel.send ("Ethan"); break;

                case 15: message.channel.send ("Daniel"); break;

                case 16: message.channel.send ("Matthew"); break;

                case 17: message.channel.send ("Aiden"); break;

                case 18: message.channel.send ("Henry"); break;

                case 19: message.channel.send ("Joseph"); break;

                case 20: message.channel.send ("Jackson"); break;

                case 21: message.channel.send ("Samuel"); break;

                case 22: message.channel.send ("Sebastin"); break;

                case 23: message.channel.send ("David"); break;

                case 24: message.channel.send ("Carter"); break;

                case 25: message.channel.send ("Wyatt"); break;

                case 26: message.channel.send ("Jayden"); break;

                case 27: message.channel.send ("John"); break;

                case 28: message.channel.send ("Owen"); break;

                case 29: message.channel.send ("Dylan"); break;

                case 30: message.channel.send ("Luke"); break;

                case 31: message.channel.send ("Gabriel"); break;

                case 32: message.channel.send ("Anthony"); break;

                case 33: message.channel.send ("Isaac"); break;

                case 34: message.channel.send ("Grayson"); break;

                case 35: message.channel.send ("Jack"); break;

                case 36: message.channel.send ("Julian"); break;

                case 37: message.channel.send ("Levi"); break;

                case 38: message.channel.send ("Christopher"); break;

                case 39: message.channel.send ("Joshua"); break;

                case 40: message.channel.send ("Andrew"); break;

                case 41: message.channel.send ("Lincoln"); break;

                case 42: message.channel.send ("Mateo"); break;

                case 43: message.channel.send ("Ryan"); break;

                case 44: message.channel.send ("Jaxon"); break;

                case 45: message.channel.send ("Nathann"); break;

                case 46: message.channel.send ("Aaron"); break;

                case 47: message.channel.send ("Isaiah"); break;

                case 48: message.channel.send ("Thomas"); break;

                case 49: message.channel.send ("Charles"); break;

                case 50: message.channel.send ("Caleb"); break;

            }

        }

        else {

            number = 50;

            var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

            switch (random) {

                case 1: message.channel.send ("Emma"); break;

                case 2: message.channel.send ("Olivia"); break;

                case 3: message.channel.send ("Ava"); break;

                case 4: message.channel.send ("Isabella"); break;

                case 5: message.channel.send ("Sophia"); break;

                case 6: message.channel.send ("Mia"); break;

                case 7: message.channel.send ("Charlotte"); break;

                case 8: message.channel.send ("Amelia"); break;

                case 9: message.channel.send ("Evelyn"); break;

                case 10: message.channel.send ("Abigail"); break;

                case 11: message.channel.send ("Harper"); break;

                case 12: message.channel.send ("Emily"); break;

                case 13: message.channel.send ("Elizabeth"); break;

                case 14: message.channel.send ("Avery"); break;

                case 15: message.channel.send ("Sofia"); break;

                case 16: message.channel.send ("Ella"); break;

                case 17: message.channel.send ("Madison"); break;

                case 18: message.channel.send ("Scarlett"); break;

                case 19: message.channel.send ("Victoria"); break;

                case 20: message.channel.send ("Aria"); break;

                case 21: message.channel.send ("Grace"); break;

                case 22: message.channel.send ("Chloe"); break;

                case 23: message.channel.send ("Camila"); break;

                case 24: message.channel.send ("Peneloper"); break;

                case 25: message.channel.send ("Riley"); break;

                case 26: message.channel.send ("Layla"); break;

                case 27: message.channel.send ("Lillian"); break;

                case 28: message.channel.send ("Nora"); break;

                case 29: message.channel.send ("Zoe"); break;

                case 30: message.channel.send ("Mila"); break;

                case 31: message.channel.send ("Audrey"); break;

                case 32: message.channel.send ("Hannah"); break;

                case 33: message.channel.send ("Lily"); break;

                case 34: message.channel.send ("Addison"); break;

                case 35: message.channel.send ("Eleanor"); break;

                case 36: message.channel.send ("Natalia"); break;

                case 37: message.channel.send ("Luna"); break;

                case 38: message.channel.send ("Savannah"); break;

                case 39: message.channel.send ("Brooklyn"); break;

                case 40: message.channel.send ("Leah"); break;

                case 41: message.channel.send ("Zoe"); break;

                case 42: message.channel.send ("Stella"); break;

                case 43: message.channel.send ("Hazel"); break;

                case 44: message.channel.send ("Ellie"); break;

                case 45: message.channel.send ("Paisley"); break;

                case 46: message.channel.send ("Aubrey"); break;

                case 47: message.channel.send ("Skylar"); break;

                case 48: message.channel.send ("Violet"); break;

                case 49: message.channel.send ("Claire"); break;

                case 50: message.channel.send ("Bella"); break;

            }

        }

        answered2 = true; userResponse = ""; nameAnswer = "";

    }



    if (message.content.startsWith ("colonial pls names")) {

        message.channel.send("Boy or Girl name?"); userResponse = "Boy"; 

        answered2 = false;

        nameUser = message.author;

        

    }



    if (message.content.startsWith ("colonial pls gas")) {

        message.channel.send ("We must gas these weebs!", {files: ["./images/Japan.jpg"]});

    }



    if (message.content.startsWith ("colonial pls valor")) {

        message.channel.send ("expooooosed", {files: ["./images/bodypillow.jpg"]});

        

    }

   

    if (message.content.startsWith ("colonial pls anime")) {

        message.channel.send ("huh", {files: ["./images/animesucks.jpg"]});



    }



    if (message.content.startsWith ("colonial pls 8ball")) {

        ballMessage = message.content.slice (8); // n ! 8 b a l l [your message]

        number = 20;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.send ("It is certain."); break;

            case 2: message.channel.send ("As I see it, yes."); break;

            case 3: message.channel.send ("Reply hazy, please try again."); break;

            case 4: message.channel.send ("Don't count on it."); break;

            case 5: message.channel.send ("It is decidedly so."); break;

            case 6: message.channel.send ("Yes, definitely."); break;

            case 7: message.channel.send ("Without a doubt."); break;

            case 8: message.channel.send ("Most likely."); break;

            case 9: message.channel.send ("Outlook is good."); break;

            case 10: message.channel.send ("Ask again later. (Watch Korean Rage)"); break;

            case 11: message.channel.send ("Better not tell you."); break;

            case 12: message.channel.send ("My reply is no."); break;

            case 13: message.channel.send ("My sources say no.."); break;

            case 14: message.channel.send ("You may rely on it."); break;

            case 15: message.channel.send ("Signs point to yes."); break;

            case 16: message.channel.send ("Concetrate and ask again."); break;

            case 17: message.channel.send ("Very doubtful."); break;

            case 18: message.channel.send ("Yes."); break;

            case 19: message.channel.send ("Cannot predict now."); break;

            case 20: message.channel.send ("Outlook is not so good."); break;

        }

    }



    if (message.content.startsWith(`colonial pls kick`)) {

        var member = message.mentions.members.first();

        member.kick().then((member) => {

            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");

        }).catch(() => {

            message.channel.send("Access Denied");

        })

    }



    if (message.content.startsWith("colonial pls serverinfo")) {

        const embed = new discord.RichEmbed()

        embed.addField(`Members`, message.guild.memberCount, true)

        embed.addField(`Name`, message.guild.name, true)

        embed.addField(`Region`, message.guild.region, true)

        embed.addField(`Owner`, message.guild.owner.tag, true)

        embed.addField(`ID`, message.guild.id, true)

        embed.setColor(`003fff`)

        embed.setThumbnail(message.guild.iconURL)

        message.channel.sendEmbed(embed)

    }



    ex1 = "./memes/ex1.png"; ex2 = "./memes/ex2.png"; ex3 = "./memes/ex3.png"; ex4 = "./memes/ex4.png"; ex5 = "./memes/ex5.png"; ex6 = "./memes/ex6.png"; ex7 = "./memes/ex7.png"; ex8 = "./memes/ex8.png"; ex9 = "./memes/ex9.png"; ex10 = "./memes/ex10.png"; ex11 = "./memes/ex11.png"; ex12 = "./memes/ex12.png"; ex13 = "./memes/ex13.png"; ex14 = "./memes/ex14.png"; ex15 = "./memes/ex15.png"; ex16 =  "./memes/ex16.png"; ex17 = "./memes/ex17.png"; ex18 = "./memes/ex18.png"; ex19 = "./memes/ex19.png"; ex20 = "./memes/ex20.jpg"; ex21 = "./memes/ex21.png"; ex22 = "./memes/ex22.png"; ex23 = "./memes/ex23.png"; ex24 = "./memes/ex24.png"; ex25 = "./memes/ex25.png"; ex26 = "./memes/ex26.png"; ex27 = "./memes/ex27.png"; ex28 = "./memes/ex28.png"; ex29 = "./memes/ex29.png";

    if (message.content.startsWith ("colonial pls expose")) {

        number = 29;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;  

        switch (random) {

            case 1: message.channel.send ({ files: [ex1] }); break;

            case 2: message.channel.send ({ files: [ex2] }); break;

            case 3: message.channel.send ({ files: [ex3] }); break;

            case 4: message.channel.send ({ files: [ex4] }); break;

            case 5: message.channel.send ({ files: [ex5] }); break;

            case 6: message.channel.send ({ files: [ex6] }); break;

            case 7: message.channel.send ({ files: [ex7] }); break;

            case 8: message.channel.send ({ files: [ex8] }); break;

            case 9: message.channel.send ({ files: [ex9] }); break;

            case 10: message.channel.send ({ files: [ex10] }); break;

            case 11: message.channel.send ({ files: [ex11] }); break;

            case 12: message.channel.send ({ files: [ex12] }); break;

            case 13: message.channel.send ({ files: [ex13] }); break;

            case 14: message.channel.send ({ files: [ex14] }); break;

            case 15: message.channel.send ({ files: [ex15] }); break;

            case 16: message.channel.send ({ files: [ex16] }); break;

            case 17: message.channel.send ({ files: [ex17] }); break;

            case 18: message.channel.send ({ files: [ex18] }); break;

            case 19: message.channel.send ({ files: [ex19] }); break;

            case 20: message.channel.send ({ files: [ex20] }); break;

            case 21: message.channel.send ({ files: [ex21] }); break;

            case 22: message.channel.send ({ files: [ex22] }); break;

            case 23: message.channel.send ({ files: [ex23] }); break;

            case 24: message.channel.send ({ files: [ex24] }); break;

            case 25: message.channel.send ({ files: [ex25] }); break;

            case 26: message.channel.send ({ files: [ex26] }); break;

            case 27: message.channel.send ({ files: [ex27] }); break;

            case 28: message.channel.send ({ files: [ex28] }); break;

            case 29: message.channel.send ({ files: [ex29] }); break;

        }

    }



    furry1 = "./image2/furry1.jpg"; furry2 = "./image2/furry2.png"; furry3 = "./image2/furry3.jpg"; furry4 = "./image2/furry4.jpg"; furry5 = "./image2/furry5.jpg"; furry6 = "./image2/furry6.jpeg"; furry7 = "./image2/furry7.jpg"; furry8 = "./image2/furry8.jpg"; furry9 = "./image2/furry9.jpg";

    if (message.content.startsWith ("colonial pls furry")) {

        number = 9;

        var random = Math.floor (Math.random() * (number - 1 + 1 + 1 + 1 + 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.send ({ files: [furry1] }); break;

            case 2: message.channel.send ({ files: [furry2] }); break;

            case 3: message.channel.send ({ files: [furry3] }); break;

            case 4: message.channel.send ({ files: [furry4] }); break;

            case 5: message.channel.send ({ files: [furry5] }); break;

            case 6: message.channel.send ({ files: [furry6] }); break;

            case 7: message.channel.send ({ files: [furry7] }); break;

            case 8: message.channel.send ({ files: [furry8] }); break;

            case 9: message.channel.send ({ files: [furry9] }); break;

        }

    }



    if (message.content.startsWith ("colonial pls dice")) {

        number = 7;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.send (":game_die: You rolled a 1! :game_die:"); break;

            case 2: message.channel.send (":game_die: You rolled a 2! :game_die:"); break;

            case 3: message.channel.send (":game_die: You rolled a 3! :game_die:"); break;

            case 4: message.channel.send (":game_die: You rolled a 4! :game_die:"); break;

            case 5: message.channel.send (":game_die: You rolled a 5! :game_die:"); break;

            case 6: message.channel.send (":game_die: You rolled a 6! :game_die:"); break;

            case 7: message.channel.send (":game_die: You lost your dice :( :game_die:"); break;

        }

    }



    if (message.content.startsWith ('colonial pls help')) {



        const embed3 = new discord.RichEmbed()

        embed3.setDescription(`Weeb Patrol Command List`)

        embed3.setColor(`003fff`)

        embed3.addField(`setavatar`, `sets avatar of bot`)

        embed3.addField(`valor`, `exposing valor`)

        embed3.addField(`anime`, `only weebs will try using this`)

        embed3.addField(`todd`, `our lord...`)

        embed3.addField(`roblox`, `mappers playing roblox`)

        embed3.addField(`weeb`, `exposing weebs`)

        embed3.addField(`8ball`, `8ball command`)

        embed3.addField(`quizme`, `the quiz to see if youre a weeb or not`)

        embed3.addField(`names`, `a name generator for any gender`)

        embed3.addField(`myfuture`, `your future`)

        embed3.addField(`setnickname`, `sets the nickname of a user`)

        embed3.addField(`randomnickname`, `sets you a random prisoner nickname`)

        embed3.addField(`begone`, `kick command`)

        embed3.addField(`avatar`, `gives you your avatar`)

        embed3.addField(`membercount`, `member count`)

        embed3.addField(`say`, `make the bot say whatever you want`)

        embed3.addField(`serverinfo`, `info on the server`)

        embed3.addField(`userinfo`, `info on you!`)

        embed3.addField(`pfp`, `you're discord pfp`)

        embed3.addField(`hwid`, `how will you die?!`)

        embed3.addField(`minecraft`, `exposing mappers and minecraft`)

        embed3.addField(`furry`, `only furries will use this`)

        embed3.addField(`roast`, `mention another user and I'll roas them!`)

        embed3.addField(`fuckmarrykill`, `I'll choose fuck marry or kill for a user you mentioned!`)

        embed3.addField(`weather`, `Get the weather in your location!`)

        message.channel.sendEmbed(embed3)

    }



    q1 = "./images/animesucks.jpg"; q2 = "./images/q3.jpg"; q3 = "./images/q2.jpg"; q4 = "./images/kill.jpg"; q5 = "./images/q1.jpg"; q6 = "./images/Todd.jpg";

    if (message.content.startsWith ("colonial pls quizme")) {

        number = 6;

        var random = Math.floor (Math.random() * (number - 1 + 1));

        switch (random) {

            case 1: message.channel.send ("Which one do you gas? \n https://media.discordapp.net/attachments/445725338346192906/448646974678499358/q1_copy.jpg?width=400&height=601 \n https://media.discordapp.net/attachments/445725338346192906/448647693586268180/cop_copy.png"); cAnswer = "A"; break;

            case 2: message.channel.send ("Which one do you gas? \n https://media.discordapp.net/attachments/445725338346192906/448646976028803094/q2_copy.jpg?width=583&height=601 \n https://media.discordapp.net/attachments/445725338346192906/448647693661896714/kill_copy.jpg"); cAnswer = "B"; break; 

            case 3: message.channel.send ("Which one do you gas? \n https://media.discordapp.net/attachments/445725338346192906/448646976255426562/q3_copy.jpg \n https://media.discordapp.net/attachments/445725338346192906/448648787104104452/cop.jpg"); cAnswer = "B"; break; 

        }

        answered = false;

        quizUser = message.author;

    }



    if (message.content.startsWith (`colonial pls avatar`)) {

        message.channel.send(message.author.avatarURL);

    }



    if (message.content.startsWith(`colonial pls membercount`)) {

        message.channel.send(message.guild.memberCount)

    }



    if (message.content.startsWith(`colonial pls nickset`)) {

        message.author.setNickname(`doofus`)

    }



    if (message.content.startsWith ("colonial pls myfuture")) {

        number = 32;

        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;

        switch (random) {

            case 1: message.channel.send ("Ants in your pants, ooh yeah there's ants in yo pants."); break;

            case 2: message.channel.send ("You become a lawyer."); break;

            case 3: message.channel.send ("You get married to Omega."); break;

            case 4: message.channel.send ("You start a family with your highschool crush."); break;

            case 5: message.channel.send ("The future cannot predict itself..."); break;

            case 6: message.channel.send ("You commit suicide because Cloud called you fat."); break;

            case 7: message.channel.send ("You run for some political office and win."); break;

            case 8: message.channel.send ("You wake up as a girl."); break;

            case 9: message.channel.send ("You run for president but lose to Wonder."); break;

            case 10: message.channel.send ("*sigh*, no korean your crush will never go out with you."); break;

            case 11: message.channel.send ("You will live a successful life with Cloud and Wonder as your sex slaves."); break;

            case 12: message.channel.send ("Ask me over your cell phone."); break;

            case 13: message.channel.send ("You and your friend.", {files: ["./images/bodypillow.jpg"]}); break;

            case 14: message.channel.send ("Cloud."); break;

            case 15: message.channel.send ("Use your zuccer-bucks to ask again."); break;

            case 16: message.channel.send ("You discover Iri to be living in your basement and he bites you and gives you a poisonous venom which makes you die."); break;

            case 17: message.channel.send ("Your korean tennis girlfriend leaves you for Jap."); break;

            case 18: message.channel.send ("Strip Club, Pole, You on pole."); break;

            case 19: message.channel.send ("You end up as Cloud.");break;

            case 20: message.channel.send ("You end up homeless."); break;

            case 21: message.channel.sned ("Neck, rope, god, god leaves, wakean appears."); break;

            case 22: message.channel.send ("You end up in a time machine, kill west, now you no longer exist"); break;

            case 23: message.channel.send ("You catch Wakean playing Minecraft."); break;

            case 24: message.channel.send ("You find Jap in full anime girl cosplay making out with Wonder who doesn't know it's Jap."); break;

        }

    }



    if (message.content.startsWith ("colonial pls setnickname")) {

        let nickName = message.content.slice (50);

        let nUser = message.mentions.members.first();

        let guildMember = message.guild.member(nUser);

        let args2 = message.content.split(" ").splice(1);

        guildMember.setNickname(args2[1])

        message.channel.send(`Success! \n \n if nothing happens my permission is too locolonial pls `)

    } 

});

client.login (token);
