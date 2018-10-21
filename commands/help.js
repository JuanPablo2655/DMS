const Discord = require("discord.js");

exports.run = async (dead, message, args) => {
    try {
        await message.channel.send(`Commands: \n\n${dead.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "Help",
    description: "help menu.",
    usage: "help"
}