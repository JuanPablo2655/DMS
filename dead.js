const Discord = require("discord.js");
const dead = new Discord.Client;

const config = require("./config.json");
const secrets = require("./secrets.json");

dead.on('ready', () => {
    console.log("ready bois!");
});

dead.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
})

dead.login(secrets.token);