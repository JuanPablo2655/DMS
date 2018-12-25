const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    if (args.length == 0) {
        message.channel.send(dead.buildHelpMenu(dead.commands));
    } else {
        message.channel.send(dead.advancedHelp(dead.commands.get(args[0]))).catch(console.error);
    }
}

exports.conf = {
    aliases: ['help', 'h', 'halp']
}

exports.help = {
    name: "help",
    description: "help menu.",
    usage: "help"
}