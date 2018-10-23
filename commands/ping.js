const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    message.channel.send(`${dead.ping}`);
}

exports.conf = {
    aliases: ['ping']
}

exports.help = {
    name: "Ping",
    description: "ping pong.",
    usage: "ping"
}