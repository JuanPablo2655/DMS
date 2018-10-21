const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    if(message.author.id !== config.devs) return;
        process.exit(1);
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "Reboot",
    description: "restarts bot.",
    usage: "reboot"
}