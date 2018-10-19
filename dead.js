const Discord = require("discord.js");
const dead = new Discord.Client();

const Enmap = require("enmap");
const data = new Enmap();
const fs = require('fs');

const config = require("./config.json");
const secrets = require("./secrets.json");

const commands = JSON.parse(fs.readFileSync('storage/commands.json', 'utf8'));

dead.on('ready', () => {
    var channel = dead.channels.get('500438046630608920');
    console.log("ready bois!");
    dead.user.setActivity("the zombies", {type: 'WATCHING'});
    channel.send("bot online");
});

dead.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
     let WelcomeEmbed = new Discord.RichEmbed()
    .setTitle("Member has joined!")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`Welcome ${member.user} to ${member.guild.name}, \nPlease follow the rules \n and I hope you enjoy your stay here!`)
    .setColor("#4286f4")
    .setFooter(`You are the ${member.guild.memberCount} member to joined.`)
    .setTimestamp();
    welcomeChannel.send(WelcomeEmbed);
  }
});

dead.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(dead, message, args);
      } catch (err) {
            console.log(err)
      }
});

dead.login(secrets.token);