const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    try {
        await message.channel.send(`Commands: \n\n${dead.commands.map(cmd => `\`${cmd.help.name}\``).join(",\n ")}`);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
    aliases: ['help']
}

exports.help = {
    name: "Help",
    description: "help menu.",
    usage: "help"
}