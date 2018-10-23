const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    message.channel.send("soon:tm:")
}

exports.conf = {
    aliases: ['profile']
}

exports.help = {
    name: "Profile",
    description: "profile of each community.",
    usage: "profile [name]"
}