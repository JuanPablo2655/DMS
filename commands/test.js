const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    message.channel.send("John big gay if he reads this.")
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: "Test",
    description: "test.",
    usage: "test"
}